import { MigrationInterface, QueryRunner } from 'typeorm';

export class start1637287058795 implements MigrationInterface {
  name = 'start1637287058795';

  //prettier-ignore
  public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "${process.env.POSTGRES_SCHEMA}"."movies_list" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "Title" text NOT NULL, "Year" text NOT NULL, "imdbID" text NOT NULL, "Type" text NOT NULL, "Poster" text NOT NULL, CONSTRAINT "PK_14057318d4c3bc962cf9112499c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_7240e1ee8837ab3b7b85da3d81" ON "${process.env.POSTGRES_SCHEMA}"."movies_list" ("imdbID") `);
        await queryRunner.query(`CREATE TABLE "${process.env.POSTGRES_SCHEMA}"."o_auth" ("primary_id" SERIAL NOT NULL, "login" text, "id" bigint, "node_id" text, "avatar_url" text, "gravatar_id" text, "url" text, "html_url" text, "followers_url" text, "following_url" text, "gists_url" text, "starred_url" text, "subscriptions_url" text, "organizations_url" text, "repos_url" text, "events_url" text, "received_events_url" text, "type" text, "site_admin" boolean, "name" text, "company" text, "blog" text, "location" text, "email" text, "hireable" text, "bio" text, "twitter_username" text, "public_repos" integer, "public_gists" integer, "followers" integer, "following" integer, "created_at" TIMESTAMP, "updated_at" TIMESTAMP, CONSTRAINT "PK_53aa08aa68001fe8db654bb7a57" PRIMARY KEY ("primary_id"))`);
        await queryRunner.query(`CREATE TABLE "${process.env.POSTGRES_SCHEMA}"."ratings" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "Source" text NOT NULL, "Value" text NOT NULL, "movieId" integer NOT NULL, CONSTRAINT "PK_0f31425b073219379545ad68ed9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${process.env.POSTGRES_SCHEMA}"."movies" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "Actors" text NOT NULL, "Awards" text NOT NULL, "BoxOffice" text NOT NULL, "Country" text NOT NULL, "Director" text NOT NULL, "DVD" text NOT NULL, "Genre" text NOT NULL, "imdbID" text NOT NULL, "imdbRating" text NOT NULL, "imdbVotes" text NOT NULL, "Language" text NOT NULL, "Metascore" text NOT NULL, "Plot" text NOT NULL, "Poster" text NOT NULL, "Production" text NOT NULL, "Rated" text NOT NULL, "Released" text NOT NULL, "Response" text NOT NULL, "Runtime" text NOT NULL, "Title" text NOT NULL, "Type" text NOT NULL, "Website" text NOT NULL, "Writer" text NOT NULL, "Year" text NOT NULL, CONSTRAINT "PK_c5b2c134e871bfd1c2fe7cc3705" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "${process.env.POSTGRES_SCHEMA}"."favorites" ("id" SERIAL NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP DEFAULT now(), "deleted_at" TIMESTAMP, "movie_id" text NOT NULL, "o_auth_id" bigint NOT NULL, "movieIdId" integer, "oAuthIdPrimaryId" integer, CONSTRAINT "PK_890818d27523748dd36a4d1bdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."favorites" ADD CONSTRAINT "FK_ff6e0d17074ac301b32c3771d1d" FOREIGN KEY ("movieIdId") REFERENCES "${process.env.POSTGRES_SCHEMA}"."movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."favorites" ADD CONSTRAINT "FK_95d0093a2c9bd16f0dae5cfc7b8" FOREIGN KEY ("oAuthIdPrimaryId") REFERENCES "${process.env.POSTGRES_SCHEMA}"."o_auth"("primary_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
  //prettier-ignore
  public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."favorites" DROP CONSTRAINT "FK_95d0093a2c9bd16f0dae5cfc7b8"`);
        await queryRunner.query(`ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."favorites" DROP CONSTRAINT "FK_ff6e0d17074ac301b32c3771d1d"`);
        await queryRunner.query(`DROP TABLE "${process.env.POSTGRES_SCHEMA}"."favorites"`);
        await queryRunner.query(`DROP TABLE "${process.env.POSTGRES_SCHEMA}"."movies"`);
        await queryRunner.query(`DROP TABLE "${process.env.POSTGRES_SCHEMA}"."ratings"`);
        await queryRunner.query(`DROP TABLE "${process.env.POSTGRES_SCHEMA}"."o_auth"`);
        await queryRunner.query(`DROP INDEX "${process.env.POSTGRES_SCHEMA}"."public"."IDX_7240e1ee8837ab3b7b85da3d81"`);
        await queryRunner.query(`DROP TABLE "${process.env.POSTGRES_SCHEMA}"."movies_list"`);
    }
}
