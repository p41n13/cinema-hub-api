import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class TvShow {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  overview: string;

  @Column()
  posterUrl: string;

  @Column()
  coverUrl: string;

  @Column()
  trailerUrl: string;

  @Column()
  userScore: number;

  @Column('text', { array: true })
  genres: string[];

  @Column()
  isTrending: boolean;
}
