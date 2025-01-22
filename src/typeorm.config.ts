import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { config } from 'dotenv'
import { User } from 'src/user/user.entity'
import { Pirty } from 'src/pirty/pirty.entity'
import { Depertment } from './depertment/depertment.entity'

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'nest_user',
  password: 'nest_password',
  database: 'pirty',
  synchronize: true,
  entities: [User, Pirty, Depertment],
  connectTimeout: 30 * 1000,
  logging: process.env.NODE_ENV === 'development'
}
