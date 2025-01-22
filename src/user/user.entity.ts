import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Depertment } from '../depertment/depertment.entity'
import { Pirty } from '../pirty/pirty.entity'
import { PirtyUser } from 'src/pirtyUser/pirtyUser.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

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
