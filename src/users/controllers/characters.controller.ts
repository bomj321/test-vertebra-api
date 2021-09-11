import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CharactersService } from '../services/characters.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
@UseGuards(JwtAuthGuard)
@Controller('characters')
@ApiTags('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) { }

  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Delete()
  remove() {
    return this.charactersService.remove();
  }
}
