import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { User } from 'src/user/user.entity'
import { UserService } from 'src/user/user.service'
import { CreateUserDto } from './dto/createUser.dto'

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get(':id')
  async findUser(@Param('id') id: string): Promise<User> {
    return await this.service.findOne(id)
  }

  @Post()
  async createUser(@Body() dto: CreateUserDto): Promise<User> {
    return await this.service.createUser(dto)
  }
}
