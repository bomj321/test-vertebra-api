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
import { CategoriesService } from '../services/categories.service';
import { CreateCategoryDto, UpdateCategoryDto } from '../dtos/category.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { PayloadToken } from 'src/auth/models/token.model';

@UseGuards(JwtAuthGuard)
@Controller('categories')
@ApiTags('Categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) { }

  @Get()
  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.categoriesService.findAll(user.sub);
  }

  @Post()
  create(@Req() req: Request, @Body() payload: CreateCategoryDto) {
    const user = req.user as PayloadToken;
    return this.categoriesService.create(user.sub, payload);
  }

  @Put(':id')
  update(
    @Req() req: Request,
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateCategoryDto,
  ) {
    const user = req.user as PayloadToken;
    return this.categoriesService.update(user.sub, id, payload);
  }

  @Delete(':id')
  remove(@Req() req: Request, @Param('id', ParseIntPipe) id: number) {
    const user = req.user as PayloadToken;
    return this.categoriesService.remove(user.sub, id);
  }
}
