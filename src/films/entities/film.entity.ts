import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Film {
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
  releaseDate: string;

  @Column()
  duration: string;

  @Column()
  isTrending: boolean;

  @Column()
  isFeatured: boolean;
}
