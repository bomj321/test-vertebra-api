import {MigrationInterface, QueryRunner} from "typeorm";

export class INIT1631351571968 implements MigrationInterface {
    name = 'INIT1631351571968'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "characters" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "status" character varying(100) NOT NULL, "species" character varying(100) NOT NULL, "type" character varying(100) NOT NULL, "gender" character varying(100) NOT NULL, "image" character varying(300) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "category"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "course"."createAt" IS NULL`);
        await queryRunner.query(`DROP TABLE "characters"`);
    }

}
