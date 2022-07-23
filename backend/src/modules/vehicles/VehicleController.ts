import { Request, Response } from "express";
import { IVehicle } from "../../interfaces/vehicle";
import { IVehicleService } from "../../interfaces/VehicleService";

export class VehicleController {
  constructor(private vehicleService: IVehicleService) {}

  async create(request: Request, response: Response) {
    const { licensePlate, brand, model, version, year } = request.body;
    
    try {
      const result = await this.vehicleService.create({
        licensePlate,
        brand,
        model,
        version,
        year,
      });

      return response.status(201).json(result);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json(e.message);
      } else {
        return response.status(500).json(e);
      }
    }
  }

  async update(request: Request, response: Response) {
    const { licensePlate, brand, model, version, year } = request.body;
    const { vehicleId } = request.params;

    try {
      const result = await this.vehicleService.update(vehicleId, {
        licensePlate,
        brand,
        model,
        version,
        year,
      });

      return response.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json(e.message);
      } else {
        return response.status(500).json(e);
      }
    }
  }

  async delete(request: Request, response: Response) {
    const { vehicleId } = request.params;

    try {
      const result = await this.vehicleService.delete(vehicleId);

      return response.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json(e.message);
      } else {
        return response.status(500).json(e);
      }
    }
  }

  async list(_: Request, response: Response) {
    try {
      const result = await this.vehicleService.list();

      return response.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json(e.message);
      } else {
        return response.status(500).json(e);
      }
    }
  }

  async view(request: Request, response: Response) {
    const { vehicleId } = request.params;

    try {
      const result = await this.vehicleService.view(vehicleId);

      return response.status(200).json(result);
    } catch (e) {
      if (e instanceof Error) {
        return response.status(400).json(e.message);
      } else {
        return response.status(500).json(e);
      }
    }
  }
}
