import { User } from 'src/user/user.entity'
import { IsArray, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator'
import { Place } from 'src/place/place.entity'
import { CreateConditionDto } from 'src/condition/dto/createCondition.dto'

export class CreatePirtyDto {
  @IsNotEmpty()
  @IsString()
  title: string

  @IsOptional()
  @IsNumber()
  memberCountLimit?: number

  @IsOptional()
  @IsNumber()
  budget?: number

  @IsOptional()
  @IsDateString()
  date?: string

  @IsOptional()
  @IsArray()
  conditions?: CreateConditionDto[]

  @IsOptional()
  @IsString()
  placeId?: Place['id']

  @IsOptional()
  @IsArray()
  members?: User['id'][]

  @IsOptional()
  @IsArray()
  owners?: User['id'][]

  @IsNotEmpty()
  @IsString()
  creatorId: User['id']
}
