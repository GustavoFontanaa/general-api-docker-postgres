import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { Pagination } from 'nestjs-typeorm-paginate';
import { FilmsDto } from './dtos/films.dto';
import { FilmsService } from './films.service';
import { FilmsEntity } from './interfaces/films.entity';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get('list')
  async findAll(): Promise<FilmsEntity[]> {
    return await this.filmsService.getFilms();
  }

  @Get('list-paginate')
  async findAllPaginated(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
  ): Promise<Pagination<FilmsEntity>> {
    limit = limit > 10 ? 10 : limit;
    return await this.filmsService.getFilmsPaginated({page, limit});
  }

  @Get(':id')
  async findOne(@Param('id') id) {
    return await this.filmsService.getFilmById(id);
  }

  @Post()
  async create(@Body() film: FilmsDto): Promise<FilmsEntity> {
    return await this.filmsService.createFilms(film);
  }
}
