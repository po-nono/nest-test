import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { InsertResult, Repository } from 'typeorm'
import { CreatePirtyDto } from './dto/createPirty.dto'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'

@Injectable()
export class PirtyService {
  constructor(
    @InjectRepository(Pirty)
    private repository: Repository<Pirty>,

    @InjectRepository(Place)
    private placeRepository: Repository<Place>,

    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  findAll(): Promise<Pirty[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Pirty | null> {
    return this.repository.findOneBy({ id })
  }

  async create(): Promise<InsertResult> {
    const dto: CreatePirtyDto = {
      title: 'test',
      placeId: '8fcf2af1-ce79-4733-ae63-e907cf26bc34',
      budget: 1000,
      date: '2024-02-12',
      members: ['505162f5-41c3-4b48-80d6-c4ab82b298c6'],
      holdingStatus: HoldingStatus.ACTIVE,
      creatorId: 'a3668396-4693-45e8-85f8-52bd04e113e4'
    }

    const place = await this.placeRepository.findOneBy({ id: dto.placeId })
    const members = await this.userRepository.findBy(
      dto.members.map((id) => {
        return { id }
      })
    )
    const creator = await this.userRepository.findOneBy({ id: dto.creatorId })
    return this.repository.insert({
      title: dto.title,
      place,
      members,
      creator,
      holdingStatus: dto.holdingStatus,
      owners: [],
      budget: dto.budget,
      date: dto.date
    })
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
