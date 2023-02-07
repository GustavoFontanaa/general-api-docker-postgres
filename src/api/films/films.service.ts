import { FilmsDto } from './dtos/films.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FilmsEntity } from './interfaces/films.entity';
import { Repository } from 'typeorm';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { paginate } from 'nestjs-typeorm-paginate/dist/paginate';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(FilmsEntity)
    private readonly filmsRepository: Repository<FilmsEntity>,
  ) {}

  async getFilms(): Promise<FilmsEntity[]> {
    return await this.filmsRepository.find();
  }

  async getFilmsPaginated(
    options: IPaginationOptions,
  ): Promise<Pagination<FilmsEntity>> {
    const queryBuilder = this.filmsRepository.createQueryBuilder('p');
    queryBuilder.select(['p.id', 'p.name', 'p.category', 'p.date', 'p.poster']);
    queryBuilder.orderBy('p.id', 'ASC');
    return await paginate<FilmsEntity>(queryBuilder, options);
  }

  async getFilmById(id: number): Promise<FilmsEntity> {
    return await this.filmsRepository.findOne({ where: { id } });
  }

  async createFilms(film: FilmsDto): Promise<FilmsEntity> {
    return await this.filmsRepository.save(film);
  }
}
