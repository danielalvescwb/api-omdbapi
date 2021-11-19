import { MoviesListEntity } from 'src/modules/movies-list/entities/movies-list.entity';
import { OAuthEntity } from 'src/modules/o-auth/entities/o-auth.entity';
import { DefaultColumns } from 'src/typeorm/default-columns';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { MovieInterface } from './interfaces/movie.interfaces';
import { RatingEntity } from './rating.entity';

@Entity({ name: 'movies' })
export class MovieEntity extends DefaultColumns implements MovieInterface {
  @Column({ type: 'text' })
  Actors: string;

  @Column({ type: 'text' })
  Awards: string;

  @Column({ type: 'text' })
  BoxOffice: string;

  @Column({ type: 'text' })
  Country: string;

  @Column({ type: 'text' })
  Director: string;

  @Column({ type: 'text' })
  DVD: string;

  @Column({ type: 'text' })
  Genre: string;

  @Column({ type: 'text' })
  imdbID: string;

  @Column({ type: 'text' })
  imdbRating: string;

  @Column({ type: 'text' })
  imdbVotes: string;

  @Column({ type: 'text' })
  Language: string;

  @Column({ type: 'text' })
  Metascore: string;

  @Column({ type: 'text' })
  Plot: string;

  @Column({ type: 'text' })
  Poster: string;

  @Column({ type: 'text' })
  Production: string;

  @Column({ type: 'text' })
  Rated: string;

  @Column({ type: 'text' })
  Released: string;

  @Column({ type: 'text' })
  Response: string;

  @Column({ type: 'text' })
  Runtime: string;

  @Column({ type: 'text' })
  Title: string;

  @Column({ type: 'text' })
  Type: string;

  @Column({ type: 'text' })
  Website: string;

  @Column({ type: 'text' })
  Writer: string;

  @Column({ type: 'text' })
  Year: string;

  @OneToMany(() => RatingEntity, (rating) => rating.movie, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'id', referencedColumnName: 'movieId' })
  Ratings: RatingEntity[];

  @OneToMany(() => MoviesListEntity, (movieList) => movieList.Movie, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'imdbID', referencedColumnName: 'imdbID' })
  MoviesList: MoviesListEntity[];

  @ManyToMany(() => OAuthEntity, (oAuth) => oAuth.favoritesInOAuth, {
    createForeignKeyConstraints: false,
  })
  @JoinTable({
    name: 'favorites',
    joinColumn: {
      name: 'movie_id',
      referencedColumnName: 'imdbID',
    },
    inverseJoinColumn: {
      name: 'o_auth_id',
      referencedColumnName: 'id',
    },
  })
  favoritesInMovies: OAuthEntity[];
}
