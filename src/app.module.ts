import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PirtyModule } from 'src/pirty/pirty.module'
import { UserModule } from 'src/user/user.module'
import { typeormConfig } from './db/typeorm.config'
import { DepertmentModule } from './depertment/depertment.module'
import { PlaceModule } from './place/place.module'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), PirtyModule, UserModule, DepertmentModule, PlaceModule]
})
export class AppModule {}
