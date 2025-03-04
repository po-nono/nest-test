import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { InsertResult, Repository } from 'typeorm'
import { Place } from 'src/place/place.entity'
import { homedir } from 'os'

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private repository: Repository<Place>
  ) {}

  findAll(): Promise<Place[]> {
    return this.repository.find()
  }

  findOne(id: string): Promise<Place | null> {
    return this.repository.findOneBy({ id })
  }

  async create(dto: { name: string; address: string }): Promise<InsertResult> {
    return this.repository.insert({
      name: dto.name,
      address: dto.address
    })
  }

  async remove(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
