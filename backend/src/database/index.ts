import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  entities: [`${__dirname}/../entities/*.{ts, js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
  migrationsTableName: "migrations",
});

export { AppDataSource };
