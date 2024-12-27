import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserController } from 'src/user/user.controller'
import { User } from 'src/user/user.entity'
import { UserService } from 'src/user/user.service'

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [TypeOrmModule],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}
