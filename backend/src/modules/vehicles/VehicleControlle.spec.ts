import { VehicleService } from "./VehicleService";
import { VehicleController } from "./VehicleController";

jest.mock("../repositories/VehicleRepository");

const VehicleServiceMock = VehicleService as jest.Mock<VehicleService>;

const getSut = () => {
  const vehicleServiceMock =
    new VehicleServiceMock() as jest.Mocked<VehicleService>;
  const vehicleController = new VehicleController(vehicleServiceMock);

  return {
    vehicleController,
    vehicleServiceMock,
  };
};