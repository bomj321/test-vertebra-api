import {
  Controller,
  Get,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CharactersService } from '../services/characters.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

import { FilterCharacterDto } from '../dtos/character.dto';

@UseGuards(JwtAuthGuard)
@Controller('characters')
@ApiTags('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) { }

  @Get()
  findAll(@Query() params: FilterCharacterDto) {
    return this.charactersService.findAll(params);
  }

  @Delete()
  remove() {
    return this.charactersService.remove();
  }
}
