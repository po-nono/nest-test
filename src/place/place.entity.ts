import { EntityBase } from 'src/common/date.entity'
import { Pirty } from 'src/pirty/pirty.entity'
import { User } from 'src/user/user.entity'
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Place extends EntityBase {
  constructor(name: string, address: string) {
    super()
    this.name = name
    this.address = address
  }

  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column()
  address: string

  @Column({
    default: 0
  })
  star?: number
}
