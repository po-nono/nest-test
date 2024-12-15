import { Module } from '@nestjs/common'
import { PirtyService } from 'service/pirty'
import { PirtyController } from 'controller/pirty'

@Module({
  imports: [],
  controllers: [PirtyController],
  providers: [PirtyService]
})
export class PirtyModule {}
