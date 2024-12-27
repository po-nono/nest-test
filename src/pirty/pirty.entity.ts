import { User } from 'src/user/user.entity'
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Pirty {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  date: string

  @ManyToMany(() => User, (user) => user.pirtys, {
    onDelete: 'CASCADE'
  })
  users: User[]

  @Column({ default: true })
  isActive: boolean
}
