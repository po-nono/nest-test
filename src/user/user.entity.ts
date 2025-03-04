import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Depertment } from '../depertment/depertment.entity'
import { Pirty } from '../pirty/pirty.entity'
import { PirtyUser } from 'src/pirtyUser/pirtyUser.entity'

@Entity()
export class User {
  constructor(name: string, slackId: string, depertment: Depertment[], pirtys: Pirty[], organizePirtys: Pirty[]) {
    this.name = name
    this.slackId = slackId
    this.depertment = depertment
    this.pirtys = pirtys
    this.organizePirtys = organizePirtys
  }

  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  name: string

  @Column()
  slackId: string

  @OneToMany(() => PirtyUser, (pirtyUser) => pirtyUser.pirty)
  pirtys: Pirty[]

  @ManyToMany(() => Pirty, (pirty) => pirty.owners)
  organizePirtys: Pirty[]

  @ManyToMany(() => Depertment, (depertment) => depertment.id, { eager: true, cascade: true })
  @JoinTable()
  depertment: Depertment[]
}
