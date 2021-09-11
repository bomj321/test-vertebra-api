import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { Episode } from '../entities/episode.entity';
import { Character } from '../entities/character.entity';
import { Location } from '../entities/location.entity';


import { CreateEpisodeDto, UpdateEpisodeDto } from './../dtos/episode.dto';

@Injectable()
export class EpisodesService {
  constructor(
    @InjectRepository(Episode) private episodeRepo: Repository<Episode>,
    @InjectRepository(Location) private locationRepo: Repository<Location>,
    @InjectRepository(Character) private characterRepo: Repository<Character>,
  ) { }

  async findAll() {

    return this.episodeRepo.find();
  }

  async findOne(id: number) {
    const product = await this.episodeRepo.findOne(id, {
      relations: ['location', 'characters'],
    });
    if (!product) {
      throw new NotFoundException(`Episode #${id} not found`);
    }
    return product;
  }

  async create(data: CreateEpisodeDto) {
    const newEpisode = this.episodeRepo.create(data);

    if (data.locationId) {
      const location = await this.locationRepo.findOne(data.locationId);
      newEpisode.location = location;
    }

    if (data.charactersIds) {
      const characters = await this.characterRepo.findByIds(data.charactersIds);
      newEpisode.characters = characters;
    }
    return this.episodeRepo.save(newEpisode);
  }

  async update(id: number, changes: UpdateEpisodeDto) {
    const episode = await this.episodeRepo.findOne(id);
    if (changes.locationId) {
      const location = await this.locationRepo.findOne(changes.locationId);
      episode.location = location;
    }

    if (changes.charactersIds) {
      const characters = await this.characterRepo.findByIds(changes.charactersIds);
      episode.characters = characters;
    }

    this.episodeRepo.merge(episode, changes);
    return this.episodeRepo.save(episode);
  }


  async removeCharacterByEpisode(productId: number, characterId: number) {
    const episode = await this.episodeRepo.findOne(productId, {
      relations: ['characters']
    });
    episode.characters = episode.characters.filter((item) => {
      return item.id !== characterId
    })

    return this.episodeRepo.save(episode);
  }

  async addCharacterToEpisode(episodeId: number, characterId: number) {
    const episode = await this.episodeRepo.findOne(episodeId, {
      relations: ['characters']
    });
    const character = await this.characterRepo.findOne(characterId);


    if (!character) {
      episode.characters.push(character);
    }
    return this.episodeRepo.save(episode);

  }

  remove(id: number) {
    return this.episodeRepo.delete(id);
  }
}
