import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(configService.get('PORT'));
  const appUrl = await app.getUrl();
  const logger = new Logger();
  logger.log(`App is running on ${appUrl}`);
}
bootstrap();