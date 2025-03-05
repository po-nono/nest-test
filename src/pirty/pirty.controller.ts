import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Pirty } from 'src/pirty/pirty.entity'
import { PirtyService } from 'src/pirty/pirty.service'
import { CreatePirtyDto } from './dto/createPirty.dto'
import { InsertResult } from 'typeorm'

@Controller('/pirty')
export class PirtyController {
  constructor(private readonly service: PirtyService) {}

  @Get()
  async getPirtys(@Query('id') id: number): Promise<Pirty[]> {
    return await this.service.findAll()
  }

  @Get(':id')
  async findPirty(@Param('id') id: number): Promise<Pirty | null> {
    return await this.service.findOne(id)
  }

  /*async createPirty(@Body() createPirtyDto: CreatePirtyDto): Promise<InsertResult> {
    return await this.service.create(createPirtyDto)
  }*/

  @Post()
  async createPirty(): Promise<Pirty> {
    return await this.service.create()
  }

  @Post()
  async create(@Body() createPirtyDto: CreatePirtyDto) {
    //this.service.create(createPirtyDto)
  }
}
