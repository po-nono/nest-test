import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { Place } from 'src/place/place.entity'
import dayjs from 'dayjs'

export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const place: Place = new Place('かいしゃ', 'ごたんだのとこ')
    const day = new Date('2010/10/10') //dayjs().toDate()
    const pirtys: Pirty[] = [new Pirty('のみかい', place, 2000, day, [], [], HoldingStatus.ACTIVE)]
    await dataSource.createEntityManager().save<Pirty>(pirtys)
  }
}
