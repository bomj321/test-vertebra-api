import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CharactersService } from './users/services/characters.service';

async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];

  switch (command) {
    case 'create-characters':
      const charactersService = application.get(CharactersService);
      await charactersService.createFromAPI().then((data) => console.log(data));
      break;
    default:
      console.log('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
