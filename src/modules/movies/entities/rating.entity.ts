import { DefaultColumns } from 'src/typeorm/default-columns';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { MovieEntity } from './movie.entity';

@Entity({ name: 'ratings' })
export class RatingEntity extends DefaultColumns {
  @Column({ type: 'text' })
  Source: string;

  @Column({ type: 'text' })
  Value: string;

  @Column({ type: 'bigint' })
  movieId: MovieEntity;

  @ManyToOne(() => MovieEntity, (movie) => movie.Ratings, {
    createForeignKeyConstraints: false,
  })
  @JoinColumn({ name: 'movieId', referencedColumnName: 'id' })
  movie: MovieEntity;
}
