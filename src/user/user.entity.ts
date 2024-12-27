import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Depertment } from '../depertment/depertment.entity'
import { Pirty } from '../pirty/pirty.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  slackId: string

  @ManyToMany(() => Pirty, (pirty) => pirty.users, {
    onDelete: 'CASCADE',
    eager: true
  })
  @JoinTable()
  pirtys: Pirty[]

  @OneToMany(() => Depertment, (depertment) => depertment.id)
  depertment: Depertment
}
