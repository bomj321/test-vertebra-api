import {MigrationInterface, QueryRunner} from "typeorm";

export class INIT1631340731873 implements MigrationInterface {
    name = 'INIT1631340731873'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "course" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "category_id" integer, CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "characters" ("id" SERIAL NOT NULL, "name" character varying(255) NOT NULL, "status" character varying(30) NOT NULL, "species" character varying(30) NOT NULL, "type" character varying(30) NOT NULL, "gender" character varying(30) NOT NULL, "image" character varying(300) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_9d731e05758f26b9315dac5e378" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "email" character varying(255) NOT NULL, "password" character varying(255) NOT NULL, "createAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, "updateAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_2f133fd8aa7a4d85ff7cd6f7c98" FOREIGN KEY ("category_id") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_2f133fd8aa7a4d85ff7cd6f7c98"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "characters"`);
        await queryRunner.query(`DROP TABLE "category"`);
        await queryRunner.query(`DROP TABLE "course"`);
    }

}
