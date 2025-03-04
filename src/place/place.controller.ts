import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common'
import { Place } from 'src/place/place.entity'
import { PlaceService } from 'src/place/place.service'
import { InsertResult } from 'typeorm'

@Controller('/place')
export class PlaceController {
  constructor(private readonly service: PlaceService) {}

  @Get()
  async getPlaces(@Query('id') id: number): Promise<Place[]> {
    return await this.service.findAll()
  }

  @Get(':id')
  async findPlace(@Param('id') id: string): Promise<Place | null> {
    return await this.service.findOne(id)
  }

  @Post()
  async create(@Body() createPlaceDto: { name: string; address: string }): Promise<InsertResult> {
    const data = { name: 'かいしゃ', address: 'ごたんだ' }
    return await this.service.create(data)
  }
}
