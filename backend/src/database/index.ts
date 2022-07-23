import { DataSource } from "typeorm";
import "dotenv/config";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DATABASE_HOST,
  port: parseInt(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  logging: true,
  entities: [`${__dirname}/src/entities/*.{ts, js}`],
  migrations: [`${__dirname}/src/database/migrations/*.{ts, js}`],
  migrationsTableName: "migrations",
});
