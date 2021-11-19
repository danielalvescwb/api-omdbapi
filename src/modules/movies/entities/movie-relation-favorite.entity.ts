import { FavoriteEntity } from 'src/modules/favorites/entities/favorite.entity';
import { DefaultColumns } from 'src/typeorm/default-columns';
import { Entity, JoinColumn, ManyToOne } from 'typeorm';

@Entity({ name: 'movies' })
export class MovieRelationFavoriteEntity extends DefaultColumns {
  @ManyToOne(() => FavoriteEntity, (favorete) => favorete.o_auth_id)
  @JoinColumn({ name: 'imdbID', referencedColumnName: 'movie_id' })
  movieRelationFavorite: FavoriteEntity;
}
