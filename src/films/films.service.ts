import { Injectable } from '@nestjs/common';
import { CreateFilmDto } from './dto/create-film.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Film } from './entities/film.entity';
import { Repository } from 'typeorm';
import { ListAllFilmsDto } from './dto/list-all-films.dto';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film) private filmsRepository: Repository<Film>,
  ) {}

  create(createFilmDto: CreateFilmDto) {
    const createdFilm = this.filmsRepository.create(createFilmDto);
    return this.filmsRepository.save(createdFilm);
  }

  findAll(listAllFilmsDto: ListAllFilmsDto) {
    if (listAllFilmsDto.isFeatured || listAllFilmsDto.isTrending) {
      return this.filmsRepository.findOneBy(listAllFilmsDto);
    } else {
      return this.filmsRepository.find();
    }
  }

  findOne(id: number) {
    return this.filmsRepository.findOneOrFail({
      where: { id },
    });
  }
}
