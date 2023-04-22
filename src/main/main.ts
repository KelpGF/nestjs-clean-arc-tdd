import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';
import env from './constants/env';

async function bootstrap() {
  const app = await NestFactory.create(MainModule);
  await app.listen(env.API_PORT);
}
bootstrap();
