import { Depertment } from 'src/depertment/depertment.entity'
import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Condition {
  @PrimaryGeneratedColumn()
  id: number

  @OneToMany(() => Depertment, (depertment) => depertment.id)
  depertments: Depertment[]
}
