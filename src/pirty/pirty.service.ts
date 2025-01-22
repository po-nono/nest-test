import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Pirty } from 'src/pirty/pirty.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PirtyService {
  constructor(
    @InjectRepository(Pirty)
    private repository: Repository<Pirty>
  ) {}

  findAll(): Promise<Pirty[]> {
    return this.repository.find()
  }

  findOne(id: number): Promise<Pirty | null> {
    return this.repository.findOneBy({ id })
  }

  //  async create(pirty: Pirty): Promise<Pirty> {}

  async remove(id: number): Promise<void> {
    await this.repository.delete(id)
  }
}
