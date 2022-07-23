import { VehicleRepository } from "../../repositories/VehicleRepository";
import { VehicleController } from "./VehicleController";
import { VehicleService } from "./VehicleService";

const vehicleRepository = new VehicleRepository();
const vehicleService = new VehicleService(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);

export { vehicleController };
