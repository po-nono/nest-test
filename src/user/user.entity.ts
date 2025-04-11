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

  @Column({ nullable: true, default: null })
  slackId: string

  @OneToMany(() => Participant, (participant) => participant.user)
  @JoinTable()
  entryPirtys: Participant[]

  @ManyToMany(() => Pirty, (pirty) => pirty.owners)
  organizePirtys: Pirty[]

  @ManyToMany(() => Depertment, (depertment) => depertment.id, { eager: true, cascade: true })
  @JoinTable()
  depertment: Depertment[]
}
