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
import { CreateCharacterDto } from '../dtos/character.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Public } from '../../auth/decorators/public.decorator';



@UseGuards(JwtAuthGuard)
@Controller('characters')
@ApiTags('characters')
export class CharactersController {
  constructor(private charactersService: CharactersService) { }

  @Public()
  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Public()
  @Get('api')
  createFromAPI() {
    return this.charactersService.createFromAPI();
  }


  @Post()
  create(@Body() payload: CreateCharacterDto) {
    return this.charactersService.create(payload);
  }

  @Delete()
  remove() {
    return this.charactersService.remove();
  }
}
