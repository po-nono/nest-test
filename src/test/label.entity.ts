import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm'
import { Artist } from './artist.entity'

@Entity()
export class Label {
  @PrimaryGeneratedColumn()
  id: number

  @ManyToMany(() => Artist, (artists) => artists.labels)
  @JoinTable()
  artists: Artist[]
}
