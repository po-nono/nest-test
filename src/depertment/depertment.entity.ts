import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export class Depertment {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string
  // 1: ITプロダクト
  // 2: CCoE
  // 3: データプラットフォーム
}
