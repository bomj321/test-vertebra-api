import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CharactersService } from './users/services/characters.service';
import { LocationsService } from './users/services/locations.service';
import { UsersService } from './users/services/users.service';


async function bootstrap() {
  const application = await NestFactory.createApplicationContext(
    AppModule,
  );

  const command = process.argv[2];

  switch (command) {
    case 'create-characters':
      const charactersService = application.get(CharactersService);
      await charactersService.createFromAPI().then(() => console.log('Characters added'));
      break;
    case 'create-locations':
      const locationsService = application.get(LocationsService);
      await locationsService.createFromAPI().then(() => console.log('Locations added'));
      break;

    case 'create-user-admin':
      const usersService = application.get(UsersService);
      await usersService.create({ email: "admin@admin.com", password: '123456' }).then(() => {
        console.log(`User: admin@admin.com, password:123456 added`)
      });
      break;
    default:
      console.log('Command not found');
      process.exit(1);
  }

  await application.close();
  process.exit(0);
}

bootstrap();
