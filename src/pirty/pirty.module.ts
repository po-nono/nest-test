import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { PirtyController } from 'src/pirty/pirty.controller'
import { Pirty } from 'src/pirty/pirty.entity'
import { PirtyService } from 'src/pirty/pirty.service'

@Module({
  imports: [TypeOrmModule.forFeature([Pirty])],
  exports: [TypeOrmModule],
  controllers: [PirtyController],
  providers: [PirtyService]
})
export class PirtyModule {}
