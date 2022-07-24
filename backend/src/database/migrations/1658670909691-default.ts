import { MigrationInterface, QueryRunner } from "typeorm";

export class default1658670909691 implements MigrationInterface {
    name = 'default1658670909691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" character varying NOT NULL, "license_plate" character varying NOT NULL, "brand" character varying NOT NULL, "model" character varying NOT NULL, "version" character varying NOT NULL, "year" integer NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
    }

}
