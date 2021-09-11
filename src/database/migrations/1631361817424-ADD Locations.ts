import {MigrationInterface, QueryRunner} from "typeorm";

export class ADDLocations1631361817424 implements MigrationInterface {
    name = 'ADDLocations1631361817424'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "locations" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "type" character varying(100) NOT NULL, "dimension" character varying(100) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_7cc1c9e3853b94816c094825e74" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`DROP TABLE "locations"`);
    }

}
