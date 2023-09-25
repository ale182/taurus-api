import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  const documentOptions = new DocumentBuilder()
    .setTitle('Title example')
    .setDescription('The API description')
    .setVersion('1.0')
    .build()
  const document = SwaggerModule.createDocument(app, documentOptions)
  SwaggerModule.setup('api', app, document)

  await app.listen(configService.get('app.port'))
}

bootstrap()
