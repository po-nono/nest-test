import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Depertment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
}
