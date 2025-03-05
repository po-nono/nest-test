import { DataSource } from 'typeorm'

export default new DataSource({
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'nest_user',
  password: 'nest_password',
  database: 'pirty',
  synchronize: true,
  entities: ['./dist/**/*.entity{.ts,.js}'],
  migrations: ['./dist/**/migrations/*{.ts,.js}'],
  connectTimeout: 30 * 1000,
  logging: true
})
