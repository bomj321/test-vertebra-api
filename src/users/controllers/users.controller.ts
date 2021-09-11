import {
  Controller,
  Req,
  Post,
  Body,
  UseGuards
} from '@nestjs/common';
import { Request } from 'express';
import { ApiTags } from '@nestjs/swagger';
import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/user.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { PayloadToken } from 'src/auth/models/token.model';

import { Public } from '../../auth/decorators/public.decorator';

@UseGuards(JwtAuthGuard)
@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(private usersService: UsersService) { }

  findAll(@Req() req: Request) {
    const user = req.user as PayloadToken;
    return this.usersService.findAll(user.sub);
  }

  @Public()
  @Post()
  create(@Body() payload: CreateUserDto) {
    return this.usersService.create(payload);
  }

}
