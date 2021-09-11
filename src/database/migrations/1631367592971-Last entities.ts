import {MigrationInterface, QueryRunner} from "typeorm";

export class LastEntities1631367592971 implements MigrationInterface {
    name = 'LastEntities1631367592971'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "episode" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "location_id" integer, CONSTRAINT "UQ_5b8186cd5641b3bf6ee49479ce3" UNIQUE ("name"), CONSTRAINT "PK_7258b95d6d2bf7f621845a0e143" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "episodes_characters" ("episode_id" integer NOT NULL, "character_id" integer NOT NULL, CONSTRAINT "PK_524e2780b501db69ac866fec49d" PRIMARY KEY ("episode_id", "character_id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2f2cb8ade75d135e44e7850950" ON "episodes_characters" ("episode_id") `);
        await queryRunner.query(`CREATE INDEX "IDX_a680c8e948fd2a57a36627e6ca" ON "episodes_characters" ("character_id") `);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`ALTER TABLE "episode" ADD CONSTRAINT "FK_2decffdc5ce6000f26180fd01de" FOREIGN KEY ("location_id") REFERENCES "locations"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "episodes_characters" ADD CONSTRAINT "FK_2f2cb8ade75d135e44e78509509" FOREIGN KEY ("episode_id") REFERENCES "episode"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "episodes_characters" ADD CONSTRAINT "FK_a680c8e948fd2a57a36627e6cad" FOREIGN KEY ("character_id") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "episodes_characters" DROP CONSTRAINT "FK_a680c8e948fd2a57a36627e6cad"`);
        await queryRunner.query(`ALTER TABLE "episodes_characters" DROP CONSTRAINT "FK_2f2cb8ade75d135e44e78509509"`);
        await queryRunner.query(`ALTER TABLE "episode" DROP CONSTRAINT "FK_2decffdc5ce6000f26180fd01de"`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "user"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "characters"."createAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."updateAt" IS NULL`);
        await queryRunner.query(`COMMENT ON COLUMN "locations"."createAt" IS NULL`);
        await queryRunner.query(`DROP INDEX "IDX_a680c8e948fd2a57a36627e6ca"`);
        await queryRunner.query(`DROP INDEX "IDX_2f2cb8ade75d135e44e7850950"`);
        await queryRunner.query(`DROP TABLE "episodes_characters"`);
        await queryRunner.query(`DROP TABLE "episode"`);
    }

}
