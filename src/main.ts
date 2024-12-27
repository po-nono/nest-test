import { NestFactory } from '@nestjs/core'
import { PirtyModule } from 'src/pirty/pirty.module'

async function bootstrap() {
  const app = await NestFactory.create(PirtyModule)
  await app.listen(process.env.PORT ?? 3000)
}

bootstrap()
