import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { Place } from 'src/place/place.entity'

export default class PlaceSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const places: Place[] = [new Place('かいしゃ', 'ごたんだのとこ')]
    await dataSource.createEntityManager().save<Place>(places)
  }
}
