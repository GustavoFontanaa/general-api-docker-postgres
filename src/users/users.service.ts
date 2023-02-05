import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './interface/user.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<UserEntity> {
    return await this.userRepository.save(user);
  }
}
