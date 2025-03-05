import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Depertment } from 'src/depertment/depertment.entity'
import { User } from 'src/user/user.entity'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>

    /*    @InjectRepository(Depertment)
    private depertmentRepository: Repository<Depertment>*/
  ) {}

  async findAll(): Promise<User[]> {
    /*    const depertments = this.depertmentRepository.create([
      {
        name: 'CCoE'
      },
      {
        name: 'ITプロダクト開発'
      }
    ])
    await this.depertmentRepository.save(depertments)
    const users = this.userRepository.create([
      {
        name: 'たろう',
        email: 'test1',
        slackId: 'slackId',
        depertment: await this.depertmentRepository.findBy({ name: 'CCoE' }),
        pirtys: [],
        organizePirtys: []
      },
      {
        name: 'じろう',
        email: 'test2',
        slackId: 'slackId',
        depertment: await this.depertmentRepository.findBy({ name: 'ITプロダクト開発' }),
        pirtys: [],
        organizePirtys: []
      }
    ])
    console.log(users)
    await this.userRepository.save(users)*/
    return this.userRepository.find()
  }

  findOne(id: string): Promise<User | null> {
    return this.userRepository.findOneBy({ id })
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id)
  }
}
