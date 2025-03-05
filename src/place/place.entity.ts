import { EntityBase } from 'src/common/date.entity'
import { Pirty } from 'src/pirty/pirty.entity'
import { User } from 'src/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Place extends EntityBase {
  @PrimaryGeneratedColumn('uuid')
  id?: string

  @Column()
  name: string

  @Column()
  address: string

  @Column({
    default: 0
  })
  star?: number
}
