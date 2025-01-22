import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PirtyModule } from 'src/pirty/pirty.module'
import { UserModule } from 'src/user/user.module'
import { typeormConfig } from './typeorm.config'
import { DepertmentModule } from './depertment/depertment.module'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), PirtyModule, UserModule, DepertmentModule]
})
export class AppModule {}
