import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HttpService } from '@nestjs/axios';

import { Location } from '../entities/location.entity';
import { CreateLocationDto, FilterLocationDto } from '../dtos/location.dto';

import {
  paginate,
} from 'nestjs-typeorm-paginate';


@Injectable()
export class LocationsService {
  constructor(
    @InjectRepository(Location) private locationRepo: Repository<Location>,
    private http: HttpService
  ) { }

  async findAll(params?: FilterLocationDto) {

    if (params && params.page && params.limit) {
      return paginate(this.locationRepo, params);
    } else {
      return paginate(this.locationRepo, { page: 1, limit: 10 });
    }

  }

  async createFromAPI() {

    let response = await this.http.get('https://rickandmortyapi.com/api/location').toPromise();
    await this.remove();
    if (response.data && response.data.results) {
      await Promise.all(response.data.results.map(async (element: CreateLocationDto) => {
        const newCharacter = await this.locationRepo.create(element)
        await this.locationRepo.save(newCharacter);
      }));
      var url = response.data.info.next;
      do {
        console.log(url);
        let newResponse = await this.http.get(url).toPromise();
        url = newResponse.data.info.next;
        await Promise.all(newResponse.data.results.map(async (element: CreateLocationDto) => {
          const newCharacter = await this.locationRepo.create(element)
          await this.locationRepo.save(newCharacter);
        }));

      } while (url && url !== null);

    }

  }

  remove() {
    return this.locationRepo.query(`DELETE FROM locations`);
  }

}
