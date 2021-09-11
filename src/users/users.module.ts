import { Module, HttpModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


import { CategoriesController } from './controllers/categories.controller';
import { CategoriesService } from './services/categories.service';
import { Category } from './entities/category.entity';


import { CoursesController } from './controllers/courses.controller';
import { CoursesService } from './services/courses.service';
import { Course } from './entities/course.entity';


import { CharactersController } from './controllers/characters.controller';
import { CharactersService } from './services/characters.service';
import { Character } from './entities/character.entity';



import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { User } from './entities/user.entity';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([User, Category, Course, Character])],
  controllers: [CategoriesController, CoursesController, UsersController, CharactersController],
  providers: [CategoriesService, CoursesService, UsersService, CharactersService],
  exports: [UsersService]
})
export class UsersModule { }
