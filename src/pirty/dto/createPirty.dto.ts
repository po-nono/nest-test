import { User } from 'src/user/user.entity'
import { HoldingStatus, Pirty } from '../pirty.entity'
import {
  IsArray,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Length
} from 'class-validator'

export class CreatePirtyDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsNotEmpty()
  @IsString()
  placeId: string

  @IsNumber()
  budget: number

  @IsDateString()
  date: string

  @IsOptional()
  @IsArray()
  members?: string[]

  @IsArray()
  @Length(1)
  @IsOptional()
  owners?: string[]

  @IsEnum(HoldingStatus)
  holdingStatus: HoldingStatus

  @IsNotEmpty()
  @IsString()
  creatorId: User['id']
}
