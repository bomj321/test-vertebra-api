import { Injectable, HttpService } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { map } from 'rxjs/operators';
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

  createFromAPI() {
    return this.http.get('https://rickandmortyapi.com/api/character')
      .pipe(
        map(response => response.data)
      );
  }

  async create(data: CreateCharacterDto) {
    const newCharacter = this.characterRepo.create(data);
    return this.characterRepo.save(newCharacter);

  }

  async remove() {
    return this.characterRepo.query(`DELETE FROM characters`);
  }

}
