import { MovieEntity } from 'src/modules/movies/entities/movie.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'o_auth' })
export class OAuthEntity {
  @PrimaryGeneratedColumn()
  primary_id: number;
  @Column({ type: 'text', nullable: true })
  login: string;
  @Column({ type: 'bigint', nullable: true })
  id: number;
  @Column({ type: 'text', nullable: true })
  node_id: string;
  @Column({ type: 'text', nullable: true })
  avatar_url: string;
  @Column({ type: 'text', nullable: true })
  gravatar_id: string;
  @Column({ type: 'text', nullable: true })
  url: string;
  @Column({ type: 'text', nullable: true })
  html_url: string;
  @Column({ type: 'text', nullable: true })
  followers_url: string;
  @Column({ type: 'text', nullable: true })
  following_url: string;
  @Column({ type: 'text', nullable: true })
  gists_url: string;
  @Column({ type: 'text', nullable: true })
  starred_url: string;
  @Column({ type: 'text', nullable: true })
  subscriptions_url: string;
  @Column({ type: 'text', nullable: true })
  organizations_url: string;
  @Column({ type: 'text', nullable: true })
  repos_url: string;
  @Column({ type: 'text', nullable: true })
  events_url: string;
  @Column({ type: 'text', nullable: true })
  received_events_url: string;
  @Column({ type: 'text', nullable: true })
  type: string;
  @Column({ type: 'boolean', nullable: true })
  site_admin: boolean;
  @Column({ type: 'text', nullable: true })
  name: string;
  @Column({ type: 'text', nullable: true })
  company: string;
  @Column({ type: 'text', nullable: true })
  blog: string;
  @Column({ type: 'text', nullable: true })
  location: string;
  @Column({ type: 'text', nullable: true })
  email: string;
  @Column({ type: 'text', nullable: true })
  hireable: string;
  @Column({ type: 'text', nullable: true })
  bio: string;
  @Column({ type: 'text', nullable: true })
  twitter_username: string;
  @Column({ type: 'integer', nullable: true })
  public_repos: number;
  @Column({ type: 'integer', nullable: true })
  public_gists: number;
  @Column({ type: 'integer', nullable: true })
  followers: number;
  @Column({ type: 'integer', nullable: true })
  following: number;
  @Column({ type: 'timestamp', nullable: true })
  created_at: Date;
  @Column({ type: 'timestamp', nullable: true })
  updated_at: Date;
  @Column({ type: 'text', nullable: true })
  refresh_token?: string;

  @ManyToMany(() => MovieEntity, (oAuth) => oAuth.favoritesInMovies, {
    createForeignKeyConstraints: false,
  })
  @JoinTable({
    name: 'favorites',
    joinColumn: {
      name: 'o_auth_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'movie_id',
      referencedColumnName: 'imdbID',
    },
  })
  favoritesInOAuth: MovieEntity[];
}
