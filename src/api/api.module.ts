import { Module } from '@nestjs/common';
import { FilmsModule } from './films/films.module';
import { UsersModule } from './user/users.module';

@Module({
  imports: [UsersModule, FilmsModule],
})
export class ApiModule {}
