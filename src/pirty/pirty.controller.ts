import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Pirty } from 'src/pirty/pirty.entity'
import { PirtyService } from 'src/pirty/pirty.service'
import { CreatePirtyDto } from './dto/createPirty.dto'

@Controller('/pirty')
export class PirtyController {
  constructor(private readonly service: PirtyService) {}

  @Get()
  async getPirty(@Query('id') id: number): Promise<Pirty> {
    return await this.service.findOne(id)
  }

  @Get(':id')
  findPirty(@Param('id') id: string): string {
    console.log(id)
    return 'hoge'
  }

  @Post()
  async create(@Body() createPirtyDto: CreatePirtyDto) {
    //this.service.create(createPirtyDto)
  }
}
