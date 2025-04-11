import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator'
import { Depertment } from 'src/depertment/depertment.entity'

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsString()
  slackId?: string

  @IsOptional()
  @IsString()
  depertment: Depertment['id']
}
