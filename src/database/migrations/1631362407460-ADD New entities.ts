import {MigrationInterface, QueryRunner} from "typeorm";

export class ADDNewEntities1631362407460 implements MigrationInterface {
    name = 'ADDNewEntities1631362407460'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "status" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "species" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."species" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "gender" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."gender" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "image" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."image" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "name" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "type" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "dimension" DROP NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."dimension" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."dimension" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "dimension" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "locations" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."image" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "image" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."gender" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "gender" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."type" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "type" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."species" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "species" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."status" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "status" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."name" IS NULL`);
        await queryRunner.query(`ALTER TABLE "characters" ALTER COLUMN "name" SET NOT NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
    }

}
