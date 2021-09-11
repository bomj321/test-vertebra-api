import {
  Controller,
  Get,
  Post,
  Body,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationsService } from '../services/locations.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { Public } from '../../auth/decorators/public.decorator';



@UseGuards(JwtAuthGuard)
@Controller('locations')
@ApiTags('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) { }

  @Public()
  @Get()
  findAll() {
    return this.locationsService.findAll();
  }

  @Delete()
  remove() {
    return this.locationsService.remove();
  }
}
