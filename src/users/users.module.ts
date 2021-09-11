import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CharactersController } from './controllers/characters.controller';
import { CharactersService } from './services/characters.service';
import { Character } from './entities/character.entity';

import { LocationsController } from './controllers/locations.controller';
import { LocationsService } from './services/locations.service';
import { Location } from './entities/location.entity';

import { EpisodesController } from './controllers/episodes.controller';
import { EpisodesService } from './services/episodes.service';
import { Episode } from './entities/episode.entity';

import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([User, Character, Location, Episode])],
  controllers: [UsersController, CharactersController, LocationsController, EpisodesController],
  providers: [UsersService, CharactersService, LocationsService, EpisodesService],
  exports: [UsersService]
})
export class UsersModule { }
