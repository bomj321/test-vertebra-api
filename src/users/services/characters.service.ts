import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
import { HttpService } from '@nestjs/axios';

import { Character } from '../entities/character.entity';
import { CreateCharacterDto } from '../dtos/character.dto';


@Injectable()
export class CharactersService {
  constructor(
    @InjectRepository(Character) private characterRepo: Repository<Character>,
    private http: HttpService
  ) { }

  findAll() {
    return this.characterRepo.find();
  }

  async createFromAPI() {


    let response = await this.http.get('https://rickandmortyapi.com/api/character').toPromise();
    await this.remove();
    if (response.data && response.data.results) {
      await Promise.all(response.data.results.map(async (element) => {
        const newCharacter = await this.characterRepo.create(element)
        await this.characterRepo.save(newCharacter);
      }));
    }

  }

  async create(data: CreateCharacterDto) {
    const newCharacter = await this.characterRepo.create(data);
    return this.characterRepo.save(newCharacter);

  }

  remove() {
    return this.characterRepo.query(`DELETE FROM characters`);
  }

}
