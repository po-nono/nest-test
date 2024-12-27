import { Controller, Get, Param, Query } from '@nestjs/common'
import { User } from 'src/user/user.entity'
import { UserService } from 'src/user/user.service'

@Controller('/user')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getUser(@Query('id') id: number): Promise<User> {
    return await this.service.findOne(id)
  }

  @Get(':id')
  findUser(@Param('id') id: string): string {
    console.log(id)
    return 'hoge'
  }
}
