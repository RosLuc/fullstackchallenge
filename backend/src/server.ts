import express from "express";
import cors from "cors";
import { routes } from "./routes";
import { AppDataSource } from "./database";

const app = express();

AppDataSource.initialize()
  .then(() => {
    console.log("Database initialized successfully");
  })
  .catch((error) => console.error(error))
  .finally(() => {
    app.use(cors());
    app.use(express.json());
    app.use(routes());
    app.listen(process.env.APP_PORT || 3000, () =>
      console.log(`listening on port ${process.env.APP_PORT}`)
    );
  });
