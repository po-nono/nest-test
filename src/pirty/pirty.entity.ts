import { EntityBase } from 'src/common/date.entity'
import { PirtyUser } from 'src/pirtyUser/pirtyUser.entity'
import { Place } from 'src/place/place.entity'
import { User } from 'src/user/user.entity'
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm'

export enum HoldingStatus {
  ACTIVE = 'active',
  STOPPED = 'stopped'
}

@Entity()
export class Pirty extends EntityBase {
  constructor(
    title: string,
    place: Place,
    budget: number,
    date: Date,
    members: User[],
    owners: User[],
    holdingStatus: HoldingStatus
  ) {
    super()
    this.title = title
    this.place = place
    this.budget = budget
    this.date = date
    this.members = members
    this.owners = owners
    this.holdingStatus = holdingStatus
  }

  @PrimaryGeneratedColumn()
  id?: number

  @Column()
  title: string

  @ManyToOne(() => Place, (place) => place.id, { eager: true, cascade: true })
  place: Place

  @Column({ nullable: true })
  budget: number

  @Column({ nullable: true })
  date: Date

  @OneToMany(() => PirtyUser, (pirtyUser) => pirtyUser.user, { eager: true, cascade: true })
  members: User[]

  @ManyToMany(() => User, (user) => user.organizePirtys, { eager: true, cascade: true })
  @JoinTable()
  owners: User[]

  @Column({ default: HoldingStatus.ACTIVE })
  holdingStatus: HoldingStatus

  @OneToOne(() => User, (user) => user.id, { eager: true, cascade: true })
  creator: User
}
