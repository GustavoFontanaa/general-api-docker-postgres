import { FilmsEntity } from './interfaces/films.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmsEntity])],
  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
