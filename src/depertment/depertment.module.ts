import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Depertment } from './depertment.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Depertment])],
  exports: [TypeOrmModule]
})
export class DepertmentModule {}
