import { Repository } from "typeorm";
import { AppDataSource } from "../database";
import { Vehicle } from "../entities/Vehicle";
import { IVehicle } from "../interfaces/vehicle";
import { IVehicleRepository } from "../interfaces/VehicleRepository";

export class VehicleRepository implements IVehicleRepository {
  private repository: Repository<Vehicle>;

  constructor() {
    this.repository = AppDataSource.getRepository(Vehicle);
  }

  async create(vehicle: IVehicle): Promise<Vehicle> {
    const newVehicle = this.repository.create(vehicle);

    await this.repository.save(newVehicle);

    return newVehicle;
  }

  async update(vehicleId: string, vehicle: IVehicle): Promise<Vehicle> {
    await this.repository.update(vehicleId, {
      ...vehicle,
    });

    return await this.repository.findOneBy({ id: vehicleId });
  }

  async delete(vehicleId: string): Promise<boolean> {
    const hasVehicle = await this.repository.findOneBy({ id: vehicleId });

    if (!hasVehicle) throw new Error("Vehicle does not exist.");

    await this.repository.delete(vehicleId);

    return true;
  }

  async findOneById(vehicleId: string): Promise<Vehicle> {
    const hasVehicle = await this.repository.findOneBy({ id: vehicleId });

    if (!hasVehicle) throw new Error("Vehicle does not exist.");

    return hasVehicle;
  }

  async findAll(): Promise<Vehicle[]> {
    const vehicles = await this.repository.find();

    return vehicles;
  }
}
