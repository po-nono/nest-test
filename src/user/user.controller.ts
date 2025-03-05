import { Controller, Get, Param, Query } from '@nestjs/common'
import { User } from 'src/user/user.entity'
import { UserService } from 'src/user/user.service'

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async get(): Promise<User[]> {
    return await this.service.findAll()
  }

  @Get()
  async getUser(@Query('id') id: string): Promise<User> {
    return await this.service.findOne(id)
  }

  @Get(':id')
  async findUser(@Param('id') id: string): Promise<User> {
    return await this.service.findOne(id)
  }
}
