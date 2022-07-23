import { Request, Response } from "express";
import { IVehicle } from "../../interfaces/vehicle";
import { IVehicleService } from "../../interfaces/VehicleService";

export class VehicleController {
  constructor(private VehicleService: IVehicleService) {}

  async create(request: Request, response: Response) {
    const { licensePlate, brand, model, version, year } = request.body;

    try {
      const result = await this.VehicleService.create({
        licensePlate,
        brand,
        model,
        version,
        year,
      });

      return response.status(201).json(result);
    } catch (e) {
      return response.status(400).json(e.message);
    }
  }

  async update(request: Request, response: Response) {
    const { licensePlate, brand, model, version, year } = request.body;
    const { vehicleId } = request.params;

    try {
      const result = await this.VehicleService.update(vehicleId, {
        licensePlate,
        brand,
        model,
        version,
        year,
      });

      return response.status(200).json(result);
    } catch (e) {
      return response.status(400).json(e.message);
    }
  }

  async delete(request: Request, response: Response) {
    const { vehicleId } = request.params;

    try {
      const result = await this.VehicleService.delete(vehicleId);

      return response.status(200).json(result);
    } catch (e) {
      return response.status(400).json(e.message);
    }
  }

  async list(_: Request, response: Response) {
    try {
      const result = await this.VehicleService.list();

      return response.status(200).json(result);
    } catch (e) {
      return response.status(400).json(e.message);
    }
  }

  async view(request: Request, response: Response) {
    const { vehicleId } = request.params;

    try {
      const result = await this.VehicleService.view(vehicleId);

      return response.status(200).json(result);
    } catch (e) {
      return response.status(400).json(e.message);
    }
  }
}
