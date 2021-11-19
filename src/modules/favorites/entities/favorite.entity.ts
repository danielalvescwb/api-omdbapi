import { MovieRelationFavoriteEntity } from 'src/modules/movies/entities/movie-relation-favorite.entity';
import { OAuthRelationFavoriteEntity } from 'src/modules/o-auth/entities/o-auth-relation-favorite.entity';
import { DefaultColumns } from 'src/typeorm/default-columns';
import { Column, Entity, JoinColumn, OneToMany } from 'typeorm';

@Entity({ name: 'favorites' })
export class FavoriteEntity extends DefaultColumns {
  @Column({ type: 'text' })
  movie_id: string;

  @Column({ type: 'bigint' })
  o_auth_id: number;

  @OneToMany(
    () => MovieRelationFavoriteEntity,
    (movie) => movie.movieRelationFavorite,
  )
  @JoinColumn({ name: 'movie_id', referencedColumnName: 'imdbID' })
  movies: MovieRelationFavoriteEntity[];

  @OneToMany(
    () => OAuthRelationFavoriteEntity,
    (oAuth) => oAuth.oAuthRelationFavorite,
  )
  @JoinColumn({ name: 'o_auth_id', referencedColumnName: 'id' })
  oAuth: OAuthRelationFavoriteEntity;
}
