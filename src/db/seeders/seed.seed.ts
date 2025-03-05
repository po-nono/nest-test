import { DataSource } from 'typeorm'
import { Seeder } from '@jorgebodega/typeorm-seeding'
import { Place } from 'src/place/place.entity'
import UserSeeder from './User.seed'
import { User } from 'src/user/user.entity'
import { Pirty } from 'src/pirty/pirty.entity'
import { Depertment } from 'src/depertment/depertment.entity'
import { Participant } from 'src/participant/participant.entity'

export default class Seed extends Seeder {
  async run(dataSource: DataSource) {
    const userRepository = dataSource.getRepository(User)
    const pirtyRepository = dataSource.getRepository(Pirty)
    const placeRepository = dataSource.getRepository(Place)
    const depertmentRepository = dataSource.getRepository(Depertment)
    const participantRepository = dataSource.getRepository(Participant)

    const depertments = depertmentRepository.create([
      {
        name: 'POLA ITプロダクト統括'
      },
      {
        name: 'POLA CXシステム企画'
      },
      {
        name: 'POLA 基幹システム企画'
      },
      {
        name: 'ショップインフラ'
      },
      {
        name: 'ソフトウェア&エンジニアリング統括'
      },
      {
        name: 'CXシステム企画'
      },
      {
        name: 'ITプロダクト開発'
      },
      {
        name: 'クラウド戦略'
      },
      {
        name: 'データプラットフォーム'
      },
      {
        name: 'IT組織戦略'
      },
      {
        name: 'グループIT統括'
      },
      {
        name: 'SCMシステム企画'
      },
      {
        name: 'デジタルワークフォース'
      },
      {
        name: 'DECENCIA IT'
      },
      {
        name: 'ネットワーク・ITセキュリティ'
      },
      {
        name: 'グローバルIT'
      }
    ])
    await depertmentRepository.save(depertments)

    const place = placeRepository.create([
      {
        name: '食堂とだか',
        address: '東京都品川区西五反田1-9-3 リバーライトビル B1F'
      },
      {
        name: '福祥餃子楼',
        address: '東京都品川区西五反田2-26-4 I・A・BLDG 1F'
      }
    ])
  }
}
