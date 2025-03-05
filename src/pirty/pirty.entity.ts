import { EntityBase } from 'src/common/date.entity'
import { Condition } from 'src/condition/condition.entity'
import { Participant } from 'src/participant/participant.entity'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn
} from 'typeorm'

export enum HoldingStatus {
  ACTIVE = 'active',
  STOPPED = 'stopped'
}

@Entity()
export class Pirty extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  title: string

  @Column()
  memberCountLimit: number

  @Column({ nullable: true })
  budget: number

  @Column({ nullable: true })
  date: Date

  @OneToMany(() => Condition, (condition) => condition.id)
  conditions: Condition[]

  @ManyToOne(() => Place, (place) => place.id, { eager: true, cascade: true })
  place: Place

  @OneToMany(() => Participant, (participant) => participant.pirty, { eager: true, cascade: true })
  members: Participant[]

  @ManyToMany(() => User, (user) => user.organizePirtys, { eager: true, cascade: true })
  @JoinTable()
  owners: User[]

  @Column({ default: HoldingStatus.ACTIVE })
  holdingStatus: HoldingStatus

  @ManyToOne(() => User, (user) => user.id, { eager: true, cascade: true })
  //  @JoinColumn()
  creator: User
}
