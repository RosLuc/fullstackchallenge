import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class vehicles1658581471762 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "vehicles",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "license_plate",
            type: "varchar",
          },
          {
            name: "brand",
            type: "varchar",
          },
          {
            name: "model",
            type: "varchar(64)",
          },
          {
            name: "version",
            type: "varchar(64)",
          },
          {
            name: "year",
            type: "integer",
          },
          {
            name: "created_at",
            type: "timestamp",
          },
          {
            name: "updated_at",
            type: "timestamp",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('vehicles');
  }
}
