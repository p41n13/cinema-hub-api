import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { FilmsService } from './films.service';
import { CreateFilmDto } from './dto/create-film.dto';
import { ListAllFilmsDto } from './dto/list-all-films.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get()
  findAll(@Query() query: ListAllFilmsDto) {
    return this.filmsService.findAll(query);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(Number(id));
  }
}
