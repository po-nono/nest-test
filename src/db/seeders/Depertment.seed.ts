import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { Depertment } from 'src/depertment/depertment.entity'

export default class DepertmentSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Depertment)
    const depertments = repository.create([
      {
        name: 'ITプロダクト開発'
      },
      {
        name: 'CCoE'
      },
      {
        name: 'ほげぴ'
      }
    ])
    await repository.save(depertments)
  }
}
