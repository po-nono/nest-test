import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { User } from 'src/user/user.entity'

export default class UserSeeder extends Seeder {
  async run(dataSource: DataSource) {
    const users: User[] = [new User('たかし', 'slackId', [], [], [])]
    await dataSource.createEntityManager().save<User>(users)
  }
}
