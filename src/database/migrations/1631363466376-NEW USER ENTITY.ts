import {MigrationInterface, QueryRunner} from "typeorm";

export class NEWUSERENTITY1631363466376 implements MigrationInterface {
    name = 'NEWUSERENTITY1631363466376'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email")`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."email" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
    }

}
