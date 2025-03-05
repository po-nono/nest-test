import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { Place } from 'src/place/place.entity'

export default class PlaceSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Place)
    const places = repository.create([
      {
        name: 'かいしゃ',
        address: 'ごたんだのとこ'
      },
      {
        name: 'おるびす',
        address: 'とごし'
      }
    ])
    await repository.save(places)
  }
}
