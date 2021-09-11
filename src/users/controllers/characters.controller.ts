import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseGuards,
  Req
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


  @Get()
  findAll() {
    return this.charactersService.findAll();
  }

  @Post()
  create(@Body() payload: CreateCharacterDto) {
    return this.charactersService.create(payload);
  }

  @Public()
  @Post('api')
  createFromAPI() {
    return this.charactersService.createFromAPI();
  }


  @Delete()
  remove() {
    return this.charactersService.remove();
  }
}
