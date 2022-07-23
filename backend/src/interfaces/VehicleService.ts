import { Vehicle } from "../entities/Vehicle";
import { IVehicle } from "./vehicle";

export interface IVehicleService {
  create(vehicle: IVehicle): Promise<Vehicle>;
  update(vehicleId: string, vehicle: IVehicle): Promise<Vehicle>;
  delete(vehicleId: string): Promise<void>;
  list(): Promise<Vehicle[]>;
  view(vehicleId: string): Promise<Vehicle>;
}
