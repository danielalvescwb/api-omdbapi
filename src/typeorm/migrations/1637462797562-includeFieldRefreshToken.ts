import { MigrationInterface, QueryRunner } from 'typeorm';

export class includeFieldRefreshToken1637462797562
  implements MigrationInterface
{
  name = 'includeFieldRefreshToken1637462797562';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."o_auth" ADD "refresh_token" text`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "${process.env.POSTGRES_SCHEMA}"."o_auth" DROP COLUMN "refresh_token"`,
    );
  }
}
