export interface IVehicle {
  id?: string;
  licensePlate: string;
  brand: string;
  model: string;
  version: string;
  year: number;
  createdAt?: Date;
  updatedAt?: Date;
}