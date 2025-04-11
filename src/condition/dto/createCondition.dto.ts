import { IsNotEmpty, IsNumber } from 'class-validator'
import { Depertment } from 'src/depertment/depertment.entity'

export class CreateConditionDto {
  @IsNotEmpty()
  @IsNumber()
  depertments: Depertment['id'][]
}
