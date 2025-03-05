import { Participant } from 'src/participant/participant.entity'
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Depertment } from '../depertment/depertment.entity'
import { Pirty } from '../pirty/pirty.entity'

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id!: string

  @Column()
  email: string

  @Column()
  name: string

  @Column()
  slackId: string

  @OneToMany(() => Participant, (participant) => participant.user)
  @JoinTable()
  pirtys: Participant[]

  @ManyToMany(() => Pirty, (pirty) => pirty.owners)
  organizePirtys: Pirty[]

  @ManyToMany(() => Depertment, (depertment) => depertment.id, { eager: true, cascade: true })
  @JoinTable()
  depertment: Depertment[]
}
