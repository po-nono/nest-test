import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Depertment } from 'src/depertment/depertment.entity'
import { UserController } from 'src/user/user.controller'
import { User } from 'src/user/user.entity'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User, Depertment])],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
