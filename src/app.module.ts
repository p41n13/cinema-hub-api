import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { FilmsModule } from './films/films.module';
import { Film } from './films/entities/film.entity';
import { TvShowsModule } from './tv-shows/tv-shows.module';
import { TvShow } from './tv-shows/entities/tv-show.entity';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [Film, TvShow],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    FilmsModule,
    TvShowsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
