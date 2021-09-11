import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Course } from './../entities/course.entity';
import { Category } from '../entities/category.entity';
import { User } from './../entities/user.entity';

import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';


@Injectable()
export class CoursesService {
  constructor(
    @InjectRepository(Course) private courseRepo: Repository<Course>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,

    @InjectRepository(User) private userRepo: Repository<User>
  ) { }

  findAll(userId) {
    return this.courseRepo.find({
      relations: ['user', 'category'], where: {
        user: {
          id: userId,
        }
      }
    });

  }

  async create(id: number, data: CreateCourseDto) {
    if (id) {
      const newCourse = this.courseRepo.create(data);
      const user = await this.userRepo.findOne(id);

      if (!user) {
        throw new NotFoundException(`User #${id} not found`);
      }

      if (data.categoryId) {
        const category = await this.categoryRepo.findOne(data.categoryId);

        if (category) {
          newCourse.category = category;
        }
      }

      return this.courseRepo.save(newCourse);
    } else {
      throw new NotFoundException(`User #${id} not found`);
    }

  }

  async update(adminId: number, id: number, changes: UpdateCourseDto) {
    const course = await this.courseRepo.findOne({
      relations: ['user'], where: {
        user: {
          id: adminId,
        },
        id: id,
      }
    });

    if (course) {
      if (changes.categoryId) {
        const category = await this.categoryRepo.findOne(changes.categoryId);

        if (category) {
          course.category = category;
        }
      }


      this.courseRepo.merge(course, changes);
      return this.courseRepo.save(course);
    } else {
      throw new NotFoundException(`Course not found`);
    }


  }

  async remove(adminId: number, id: number) {
    if (adminId) {
      const user = await this.userRepo.findOne(adminId);

      if (!user) {
        throw new NotFoundException(`User #${adminId} not found`);
      }

      return this.courseRepo.delete(id);
    } else {
      throw new NotFoundException(`Course #${id} not found`);
    }
  }

}
