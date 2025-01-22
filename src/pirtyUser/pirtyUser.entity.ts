import { EntityBase } from 'src/common/date.entity'
import { Pirty } from 'src/pirty/pirty.entity'
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
  PrimaryColumn,
  PrimaryGeneratedColumn
} from 'typeorm'

export enum PaidStatus {
  NOTYET = 'notyet',
  PAID = 'paid',
  PENDING = 'pending'
}

@Entity()
export class PirtyUser extends EntityBase {
  @PrimaryColumn()
  userId: number

  @PrimaryColumn()
  pirtyId: number

  @ManyToOne(() => User, (user) => user.id, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'userId' })
  user: User

  @ManyToOne(() => Pirty, (pirty) => pirty.id, {
    onDelete: 'CASCADE'
  })
  @JoinColumn({ name: 'pirtyId' })
  pirty: Pirty

  @Column({
    type: 'enum',
    enum: PaidStatus,
    default: PaidStatus.NOTYET
  })
  paid: PaidStatus
}
