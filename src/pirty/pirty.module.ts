import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Participant } from 'src/participant/participant.entity'
import { PirtyController } from 'src/pirty/pirty.controller'
import { Pirty } from 'src/pirty/pirty.entity'
import { PirtyService } from 'src/pirty/pirty.service'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'

@Module({
  imports: [TypeOrmModule.forFeature([Pirty, Place, User, Participant])],
  controllers: [PirtyController],
  providers: [PirtyService]
})
export class PirtyModule {}
