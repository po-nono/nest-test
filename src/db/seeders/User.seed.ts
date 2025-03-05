import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { User } from 'src/user/user.entity'
import { Depertment } from 'src/depertment/depertment.entity'
export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(User)
    const depertmentRepository = dataSource.getRepository(Depertment)
    const users = repository.create([
      {
        name: 'たろう',
        email: 'test1',
        slackId: 'slackId',
        depertment: await depertmentRepository.findBy({ name: 'CCoE' }),
        pirtys: [],
        organizePirtys: []
      },
      {
        name: 'じろう',
        email: 'test2',
        slackId: 'slackId',
        depertment: await depertmentRepository.findBy({ name: 'ITプロダクト開発' }),
        pirtys: [],
        organizePirtys: []
      }
    ])
    console.log(users)
    await repository.save(users)
  }
}
