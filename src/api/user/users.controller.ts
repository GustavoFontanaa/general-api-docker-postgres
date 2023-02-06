import { UserDto } from './dtos/user.dto';
import { UserEntity } from './user.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async index(): Promise<UserEntity[]> {
    return await this.usersService.findAll();
  }

  @Post()
  async create(@Body() user: UserDto): Promise<UserEntity> {
    return await this.usersService.create(user);
  }
}
