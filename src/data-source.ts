import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'nest_user',
  password: 'nest_password',
  database: 'pirty',
  synchronize: true,
  entities: ['./**/*.entity{.ts,.js}'],
  migrations: ['./**/migrations/*{.ts,.js}'],
  connectTimeout: 30 * 1000,
  logging: process.env.NODE_ENV === 'development'
})
