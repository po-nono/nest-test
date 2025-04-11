import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Depertment } from 'src/depertment/depertment.entity'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { User } from 'src/user/user.entity'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/createUser.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Depertment)
    private depertmentRepository: Repository<Depertment>
  ) {}

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne({
      relations: {
        entryPirtys: {
          pirty: true
        },
        organizePirtys: true
      },
      where: {
        id
      }
    })
  }

  async createUser(dto: CreateUserDto): Promise<User> {
    const depertment = await this.depertmentRepository.findOneBy({ id: dto.depertment })
    const user = this.userRepository.create({
      email: dto.email,
      name: dto.name,
      slackId: dto.slackId || null,
      depertment: [depertment]
    })
    const result = this.userRepository.save(user)
    return result
  }
}
