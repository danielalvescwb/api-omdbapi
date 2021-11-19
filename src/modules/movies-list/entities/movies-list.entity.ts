import { MovieEntity } from 'src/modules/movies/entities/movie.entity';
import { DefaultColumns } from 'src/typeorm/default-columns';
import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'movies_list' })
export class MoviesListEntity extends DefaultColumns {
  @Column({ type: 'text' })
  Title: string;
  @Column({ type: 'text' })
  Year: string;
  @Index()
  @Column({ type: 'text' })
  imdbID: string;
  @Column({ type: 'text' })
  Type: string;
  @Column({ type: 'text' })
  Poster: string;

  @ManyToOne(() => MovieEntity, (movie) => movie.imdbID, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'imdbID', referencedColumnName: 'imdbID' })
  Movie: MovieEntity;
}
