import { Vehicle } from "../../entities/Vehicle";
import { IVehicle } from "../../interfaces/vehicle";
import { IVehicleRepository } from "../../interfaces/VehicleRepository";

export class VehicleService {
  constructor(private vehicleRepository: IVehicleRepository) {}

  async create(vehicle: IVehicle): Promise<Vehicle> {
    const newVehicle = await this.vehicleRepository.create(vehicle);

    return newVehicle;
  }

  async update(vehicleId: string, vehicle: IVehicle): Promise<Vehicle> {
    const hasVehicle = await this.vehicleRepository.findOneById(vehicleId);

    if (!hasVehicle) throw new Error("Vehicle does not exist.");

    return await this.vehicleRepository.update(vehicleId, {
      ...hasVehicle,
      brand: vehicle.brand,
      licensePlate: vehicle.licensePlate,
      model: vehicle.model,
      version: vehicle.version,
      year: vehicle.year,
    });
  }

  async delete(vehicleId: string): Promise<void> {
    const hasVehicle = await this.vehicleRepository.findOneById(vehicleId);

    if (!hasVehicle) throw new Error("Vehicle does not exist.");

    await this.vehicleRepository.delete(vehicleId);
  }

  async list(): Promise<Vehicle[]> {
    const vehicles = await this.vehicleRepository.findAll();

    return vehicles;
  }

  async view(vehicleId: string): Promise<Vehicle> {
    const hasVehicle = await this.vehicleRepository.findOneById(vehicleId);

    if (!hasVehicle) throw new Error("Vehicle does not exist.");

    return hasVehicle;
  }
}
