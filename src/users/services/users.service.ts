import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dtos/user.dto';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepo: Repository<User>,
  ) { }

  findAll(userId) {
    return this.userRepo.find({ where: { adminId: userId } });
  }

  async findOne(id: number) {
    const user = await this.userRepo.findOne(id);
    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }
    return user;
  }

  async findByEmail(email: string) {
    return this.userRepo.findOne({ where: { email } });
  }

  async create(data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    return this.userRepo.save(newUser);
  }

  async createClient(id: number, data: CreateUserDto) {
    const newUser = this.userRepo.create(data);
    const hashPassword = await bcrypt.hash(newUser.password, 10);
    newUser.password = hashPassword;
    return this.userRepo.save(newUser);
  }

  async update(adminId: number, id: number, changes: UpdateUserDto) {
    const user = await this.userRepo.findOne({ where: { adminId: adminId, id: id } });
    this.userRepo.merge(user, changes);
    return this.userRepo.save(user);
  }

  remove(id: number) {
    return this.userRepo.delete({ id: id });
  }


}
