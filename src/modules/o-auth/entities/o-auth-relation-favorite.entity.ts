import { FavoriteEntity } from 'src/modules/favorites/entities/favorite.entity';
import { DefaultColumns } from 'src/typeorm/default-columns';
import { Entity, ManyToOne } from 'typeorm';

@Entity({ name: 'o_auth' })
export class OAuthRelationFavoriteEntity extends DefaultColumns {
  @ManyToOne(() => FavoriteEntity, (favorete) => favorete.oAuth)
  oAuthRelationFavorite: FavoriteEntity;
}
