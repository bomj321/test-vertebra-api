import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Res,
  UseGuards,
  Query
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';


import { CreateEpisodeDto, UpdateEpisodeDto, FilterEpisodeDto } from '../dtos/episode.dto';
import { EpisodesService } from './../services/episodes.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@ApiTags('episodes')
@Controller('episodes')
export class EpisodesController {
  constructor(private episodesService: EpisodesService) { }

  @Get()
  @ApiOperation({ summary: 'List of episodes' })
  getProducts(@Query() params: FilterEpisodeDto) {
    return this.episodesService.findAll(params);
  }


  @Get(':episodeId')
  getOne(@Param('episodeId', ParseIntPipe) episodeId: number) {
    return this.episodesService.findOne(episodeId);
  }

  @Post()
  create(@Res() response: Response, @Body() payload: CreateEpisodeDto) {
    return this.episodesService.create(payload)
      .then((res) => {
        response.status(200).send(res);
      })
      .catch((e) => { response.status(500).send({ error: e.detail ? e.detail : e }) });
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: UpdateEpisodeDto) {
    return this.episodesService.update(id, payload);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.episodesService.remove(id);
  }
}
