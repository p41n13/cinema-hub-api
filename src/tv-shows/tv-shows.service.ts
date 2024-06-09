import { Injectable } from '@nestjs/common';
import { CreateTvShowDto } from './dto/create-tv-show.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { TvShow } from './entities/tv-show.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TvShowsService {
  constructor(
    @InjectRepository(TvShow) private tvShowsRepository: Repository<TvShow>,
  ) {}

  create(createTvShowDto: CreateTvShowDto) {
    const createdFilm = this.tvShowsRepository.create(createTvShowDto);
    return this.tvShowsRepository.save(createdFilm);
  }

  findAll() {
    return this.tvShowsRepository.find();
  }

  findOne(id: number) {
    return this.tvShowsRepository.findOneOrFail({
      where: { id },
    });
  }
}
