import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { HoldingStatus, Pirty } from 'src/pirty/pirty.entity'
import { Place } from 'src/place/place.entity'
import dayjs from 'dayjs'
import { User } from 'src/user/user.entity'
import { Participant } from 'src/participant/participant.entity'

export default class PirtySeeder extends Seeder {
  async run(dataSource: DataSource) {
    const repository = dataSource.getRepository(Pirty)
    const userRepository = dataSource.getRepository(User)
    const participantRepository = dataSource.getRepository(Participant)
    const placeRepository = dataSource.getRepository(Place)
    /*
    const pirty = repository.create({
      title: 'のみかい',
      memberCountLimit: 10,
      budget: 2000,
      date: '2024-02-12',
      conditions: [],
      place: await placeRepository.findOneBy({ name: 'かいしゃ' }),
      members: [await userRepository.findOneBy({ name: 'たろう' })],
      owners: [await userRepository.findOneBy({ name: 'じろう' })],
      holdingStatus: HoldingStatus.ACTIVE,
      creator: await userRepository.findOneBy({ name: 'たろう' })
    })

    await repository.save(pirty)*/
  }
}
