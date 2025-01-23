import { Column, Entity, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Artist } from './artist.entity'

@Entity()
export class Music {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @ManyToOne(() => Artist, (artist) => artist.musics)
  artist: Artist
}
