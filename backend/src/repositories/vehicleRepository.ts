import { AppDataSource } from "../database";
import { Vehicle } from "../entities/Vehicle";

export const vehicleRepository = AppDataSource.getRepository(Vehicle);
