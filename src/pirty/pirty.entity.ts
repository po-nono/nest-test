import { EntityBase } from 'src/common/date.entity'
import { PirtyUser } from 'src/pirtyUser/pirtyUser.entity'
import { User } from 'src/user/user.entity'
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

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

  @Column({ nullable: true })
  location: string

  @Column({ nullable: true })
  locationUrl?: string

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
}
