import { Controller, Get, Param, Query } from '@nestjs/common'
import { PirtyService } from 'service/pirty'

@Controller('/pirty')
export class PirtyController {
  constructor(private readonly service: PirtyService) {}

  @Get()
  getPirty(@Query('id') id: string, @Query('name') name: string): string {
    console.log(id)
    console.log(name)
    return this.service.getPirty(id, name)
  }

  @Get(':id')
  findPirty(@Param('id') id: string): string {
    console.log(id)
    return 'hoge'
  }
}
