import "reflect-metadata";
import "dotenv/config";
import app from "./app";
import { AppDataSource } from "./database";

async function main() {
  try {
    await AppDataSource.initialize();
    console.log("Database initialized successfully");
    app.listen(process.env.APP_PORT || 3000, () =>
      console.log(`listening on port ${process.env.APP_PORT}`)
    );
  } catch (error) {
    console.error(error);
  }
}

main();
