import { v4 as uuidV4 } from "uuid";
import { VehicleRepository } from "../repositories/VehicleRepository";
import { VehicleService } from "./VehicleService";
import { Vehicle } from "../entities/Vehicle";

jest.mock("../repositories/VehicleRepository");

const VehicleRepositoryMock = VehicleRepository as jest.Mock<VehicleRepository>;

const getSut = () => {
  const vehicleRepositoryMock =
    new VehicleRepositoryMock() as jest.Mocked<VehicleRepository>;
  const vehicleService = new VehicleService(vehicleRepositoryMock);

  return {
    vehicleService,
    vehicleRepositoryMock,
  };
};

describe("VehicleService", () => {
  it("create - creation successful", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    vehicleRepositoryMock.create.mockImplementationOnce(async (value) => {
      return {
        ...value,
        id: uuidV4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    const newVehicle = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const result = await vehicleService.create(newVehicle);

    expect(vehicleRepositoryMock.create).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      ...newVehicle,
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("update - updation successful", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    let vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce({
      ...vehicleMock,
      id: uuidV4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    vehicleRepositoryMock.update.mockImplementationOnce(
      async (_, value: Vehicle) => ({
        ...value,
        updatedAt: new Date(),
      })
    );

    const result = await vehicleService.update(uuidV4(), {
      ...vehicleMock,
      brand: "marcaTeste02",
    });

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(vehicleRepositoryMock.update).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      ...vehicleMock,
      brand: "marcaTeste02",
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("update - vehicle does not exist", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    let vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce(null);

    let error: { message: string };
    try {
      await vehicleService.update(uuidV4(), {
        ...vehicleMock,
        brand: "marcaTeste02",
      });
    } catch (e) {
      error = e;
    }

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(vehicleRepositoryMock.update).toHaveBeenCalledTimes(0);
    expect(error.message).toBe("Vehicle does not exist.");
  });

  it("delete - deletion successful", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    let vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce({
      ...vehicleMock,
      id: uuidV4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    vehicleRepositoryMock.delete.mockResolvedValueOnce(true);

    const result = await vehicleService.delete(uuidV4());

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(vehicleRepositoryMock.delete).toHaveBeenCalledTimes(1);
    expect(result).toEqual(undefined);
  });

  it("delete - vehicle does not exist", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce(null);

    let error: { message: string };
    try {
      await vehicleService.delete(uuidV4());
    } catch (e) {
      error = e;
    }

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(vehicleRepositoryMock.delete).toHaveBeenCalledTimes(0);
    expect(error.message).toBe("Vehicle does not exist.");
  });

  it("list - list successful", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    vehicleRepositoryMock.findAll.mockResolvedValueOnce([
      {
        brand: "marcaTeste",
        licensePlate: "placaTeste",
        model: "modeloTeste",
        version: "versaoTeste",
        year: 73573,
        id: uuidV4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        brand: "marcaTeste2",
        licensePlate: "placaTeste2",
        model: "modeloTeste2",
        version: "versaoTeste2",
        year: 735732,
        id: uuidV4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const result = await vehicleService.list();

    expect(vehicleRepositoryMock.findAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(
      expect.arrayContaining([
        {
          brand: expect.any(String),
          licensePlate: expect.any(String),
          model: expect.any(String),
          version: expect.any(String),
          year: expect.any(Number),
          id: expect.any(String),
          createdAt: expect.any(Date),
          updatedAt: expect.any(Date),
        },
      ])
    );
  });

  it("view - view successful", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    let vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce({
      ...vehicleMock,
      id: uuidV4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await vehicleService.view(uuidV4());

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(result).toEqual({
      ...vehicleMock,
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("view - vehicle does not exist", async () => {
    const { vehicleService, vehicleRepositoryMock } = getSut();

    vehicleRepositoryMock.findOneById.mockResolvedValueOnce(null);

    let error: { message: string };
    try {
      await vehicleService.view(uuidV4());
    } catch (e) {
      error = e;
    }

    expect(vehicleRepositoryMock.findOneById).toHaveBeenCalledTimes(1);
    expect(error.message).toBe("Vehicle does not exist.");
  });
});
