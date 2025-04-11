import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common'
import { Pirty } from 'src/pirty/pirty.entity'
import { PirtyService } from 'src/pirty/pirty.service'
import { CreatePirtyDto } from './dto/createPirty.dto'
import { DeleteResult, InsertResult } from 'typeorm'

@Controller('/pirty')
export class PirtyController {
  constructor(private readonly service: PirtyService) {}

  @Get()
  async getPirtys(): Promise<Pirty[]> {
    return await this.service.findAll()
  }

  @Get(':id')
  async findPirty(@Param('id') id: number): Promise<Pirty | null> {
    return await this.service.findOne(id)
  }

  @Post()
  async create(@Body() createPirtyDto: CreatePirtyDto) {
    return this.service.create(createPirtyDto)
  }

  /*  @Put(':id')
  async update(@Param('id') id: number, @Body() createPirtyDto: CreatePirtyDto): Promise<Pirty> {
    return await this.service.update(id, createPirtyDto)
  }*/

  @Delete(':id')
  async delete(@Param('id') id: number): Promise<DeleteResult> {
    return await this.service.delete(id)
  }

  @Post('member/:id')
  async addMember(@Param('id') pirtyId: number, @Body() { userId }: { userId: string }): Promise<InsertResult> {
    return await this.service.addMember(pirtyId, userId)
  }

  @Delete('member/:id')
  async removeMember(@Param('id') pirtyId: number, @Body() { userId }: { userId: string }): Promise<DeleteResult> {
    return await this.service.removeMember(pirtyId, userId)
  }
}
