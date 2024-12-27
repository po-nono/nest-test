import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PirtyModule } from 'src/pirty/pirty.module'
import { UserModule } from 'src/user/user.module'
import { typeormConfig } from 'typeorm.config'

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), PirtyModule, UserModule]
})
export class AppModule {}
