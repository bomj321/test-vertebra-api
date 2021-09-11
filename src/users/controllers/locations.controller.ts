import {
  Controller,
  Get,
  Delete,
  UseGuards,
  Query
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LocationsService } from '../services/locations.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

import { FilterLocationDto } from '../dtos/location.dto';



@UseGuards(JwtAuthGuard)
@Controller('locations')
@ApiTags('locations')
export class LocationsController {
  constructor(private locationsService: LocationsService) { }

  @Get()
  findAll(@Query() params: FilterLocationDto) {
    return this.locationsService.findAll(params);
  }

  @Delete()
  remove() {
    return this.locationsService.remove();
  }
}
