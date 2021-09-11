import {
  Controller,
  Req,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  ParseIntPipe,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { CoursesService } from '../services/courses.service';
import { CreateCourseDto, UpdateCourseDto } from '../dtos/course.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { PayloadToken } from 'src/auth/models/token.model';

@UseGuards(JwtAuthGuard)
@Controller('courses')
@ApiTags('Courses')
export class CoursesController {
  constructor(private coursesService: CoursesService) { }

  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.coursesService.findAll(user.sub);
  }

  @Post()
  create(@Req() req: Request, @Body() payload: CreateCourseDto) {
    const user = req.user as PayloadToken;
    return this.coursesService.create(user.sub, payload);
  }

  @Put(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCourseDto,
  ) {
    const user = req.user as PayloadToken;
    return this.coursesService.update(user.sub, id, payload);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = req.user as PayloadToken;
    return this.coursesService.remove(user.sub, id);
  }
}
