import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { InsertResult, Repository } from 'typeorm'
import { CreatePirtyDto } from './dto/createPirty.dto'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'
import { PaidStatus, Participant } from 'src/participant/participant.entity'

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
    private participantRepository: Repository<Participant>
  ) {}

  findAll(): Promise<Pirty[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Pirty | null> {
    return this.repository.findOneBy({ id })
  }

  async create(): Promise<Pirty> {
    const place = await this.placeRepository.findOneBy({ name: 'かいしゃ' })
    const member = await this.userRepository.findOneBy({ name: 'たろう' })
    const creator = await this.userRepository.findOneBy({ name: 'じろう' })
    console.log(place)
    console.log(member)
    console.log(creator)
    const pirty: Pirty = this.repository.create({
      title: 'のみかい',
      memberCountLimit: 10,
      budget: 2000,
      date: '2024-02-12',
      conditions: [],
      place,
      members: [],
      owners: [member],
      holdingStatus: HoldingStatus.ACTIVE,
      creator
    })
    console.log(pirty)
    console.log('ぬ')
    const result = await this.repository.save(pirty)
    console.log('ぽp')
    console.log('ぬ')
    const participant = this.participantRepository.create({
      userId: member.id,
      pirtyId: result.id,
      paid: PaidStatus.NOTYET
    })
    await this.participantRepository.save(participant)

    return result
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
