import { TypeOrmModuleOptions } from '@nestjs/typeorm'
import { config } from 'dotenv'

config({ path: '.env' })

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest_user',
  password: 'nest_password',
  database: 'pirty',
  //  synchronize: true,
  entities: ['./**/*.entity{.ts,.js}'],
  migrations: ['./**/migrations/*{.ts,.js}'],
  connectTimeout: 30 * 1000,
  logging: process.env.NODE_ENV === 'development'
  //  type: 'mysql',
  //  name: 'pirty',
  //  host: process.env.DB_HOST,
  //  port: Number(process.env.DB_PORT),
  //  database: process.env.DB_NAME,
  //  username: process.env.DB_USER,
  //  password: process.env.DB_PASS,
  //  entities: ['./dist/**/*.entity{.ts,.js}'],
  //  migrations: ['./dist/**/migrations/*{.ts,.js}'],
  //  synchronize: true,
  //  connectTimeout: 30 * 1000,
  // logging: true
}
