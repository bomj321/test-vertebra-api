import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
      await Promise.all(response.data.results.map(async (element: CreateCharacterDto) => {
        const newCharacter = await this.characterRepo.create(element)
        await this.characterRepo.save(newCharacter);
      }));
      var url = response.data.info.next;
      do {
        console.log(url);
        let newResponse = await this.http.get(url).toPromise();
        url = newResponse.data.info.next;
        await Promise.all(newResponse.data.results.map(async (element: CreateCharacterDto) => {
          const newCharacter = await this.characterRepo.create(element)
          await this.characterRepo.save(newCharacter);
        }));

      } while (url && url !== null);

    }
  }

  remove() {
    return this.characterRepo.query(`DELETE FROM characters`);
  }

}
