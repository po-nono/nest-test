import { Column, Entity, ManyToMany, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Music } from './music.entity'
import { Label } from './label.entity'

@Entity()
export class Artist {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @OneToMany(() => Music, (music) => music.artist)
  musics: Music[]

  @ManyToMany(() => Label, (labels) => labels.artists)
  labels: Artist[]
}
