import { Vehicle } from "../entities/Vehicle";
import { IVehicle } from "./vehicle";

export interface IVehicleRepository {
  create(vehicle: IVehicle): Promise<Vehicle>;
  update(vehicleId: string, vehicle: IVehicle): Promise<Vehicle>;
  delete(vehicleId: string): Promise<boolean>;
  findOneById(vehicleId: string): Promise<Vehicle>;
  findAll(): Promise<Vehicle[]>;
}
