import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { DeleteResult, In, InsertResult, Repository } from 'typeorm'
import { CreatePirtyDto } from './dto/createPirty.dto'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'
import { PaidStatus, Participant } from 'src/participant/participant.entity'
import { Condition } from 'src/condition/condition.entity'

@Injectable()
export class PirtyService {
  constructor(
    @InjectRepository(Pirty)
    private repository: Repository<Pirty>,

    @InjectRepository(Place)
    private placeRepository: Repository<Place>,

    @InjectRepository(User)
    private userRepository: Repository<User>,

    @InjectRepository(Participant)
    private participantRepository: Repository<Participant>,

    @InjectRepository(Condition)
    private conditionRepository: Repository<Condition>
  ) {}

  findAll(): Promise<Pirty[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Pirty | null> {
    return this.repository.findOneBy({ id })
  }

  async create(dto: CreatePirtyDto): Promise<Pirty> {
    const place = dto.placeId ? await this.placeRepository.findOneBy({ name: dto.placeId }) : null
    const creator = await this.userRepository.findOneBy({ id: dto.creatorId })
    const owners = dto.owners.length ? await this.userRepository.findBy({ id: In(dto.owners) }) : []

    const pirty: Pirty = this.repository.create({
      title: dto.title,
      memberCountLimit: dto.memberCountLimit,
      budget: dto.budget,
      date: dto.date,
      conditions: [],
      place,
      members: [],
      owners,
      holdingStatus: HoldingStatus.ACTIVE,
      creator
    })
    const result = await this.repository.save(pirty)
    const members = dto.members.length
      ? this.participantRepository.create(
          dto.members.map((memberId) => {
            return {
              userId: memberId,
              pirtyId: pirty.id,
              paid: PaidStatus.NOTYET
            }
          })
        )
      : []
    await this.participantRepository.save(members)
    return this.repository.findOneBy({ id: result.id })
  }

  /*  update(id: number, dto: UpdatePirtyDto): Promise<Pirty> {
    return this.repository.update(id)
  }*/

  delete(id: number): Promise<DeleteResult> {
    return this.repository.delete(id)
  }

  async addMember(pirtyId: number, userId: string): Promise<InsertResult> {
    const pirty = await this.repository.findOneBy({ id: pirtyId })
    return this.participantRepository.insert({
      userId,
      pirtyId: pirty.id,
      paid: PaidStatus.NOTYET
    })
  }

  async removeMember(pirtyId: number, userId: string): Promise<DeleteResult> {
    const pirty = await this.repository.findOneBy({ id: pirtyId })
    return this.participantRepository.delete({
      userId,
      pirtyId: pirty.id
    })
  }
}
