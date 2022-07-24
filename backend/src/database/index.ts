import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";

const port = process.env.DATABASE_PORT as number | undefined

const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: port,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  entities: [`${__dirname}/../entities/*.{ts, js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts, js}`],
  migrationsTableName: "migrations",
});

export { AppDataSource };
