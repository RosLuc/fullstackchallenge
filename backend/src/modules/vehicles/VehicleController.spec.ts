import { v4 as uuidV4 } from "uuid";
import { VehicleService } from "./VehicleService";
import { VehicleController } from "./VehicleController";
import { Request, Response } from "express";

jest.mock("./VehicleService");

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

describe("VehicleController", () => {
  it("create - create user", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {
      body: vehicleMock,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.create.mockImplementationOnce(async (value) => {
      return {
        ...value,
        id: uuidV4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    const result = await vehicleController.create(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.create).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(201);
    expect(result.json).toEqual({
      ...vehicleMock,
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("create - catch error on service", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {
      body: vehicleMock,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.create.mockImplementationOnce(async (value) => {
      throw new Error("Error test");
    });

    const result = await vehicleController.create(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.create).toHaveBeenCalledTimes(1);
    expect(result.json).toEqual("Error test");
    expect(result.status).toEqual(400);
  });

  it("update - updated user", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {
      body: vehicleMock,
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.update.mockImplementationOnce(
      async (vehicleId, vehicle) => {
        return {
          ...vehicle,
          id: vehicleId,
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      }
    );

    const result = await vehicleController.update(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.update).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(200);
    expect(result.json).toEqual({
      ...vehicleMock,
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("update - catch error on service", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {
      body: vehicleMock,
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.update.mockImplementationOnce(async (value) => {
      throw new Error("Error test");
    });

    const result = await vehicleController.update(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.update).toHaveBeenCalledTimes(1);
    expect(result.json).toEqual("Error test");
    expect(result.status).toEqual(400);
  });

  it("delete - deleted user", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const request = {
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.delete.mockResolvedValueOnce();

    const result = await vehicleController.delete(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(200);
  });

  it("delete - catch error on service", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const request = {
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.delete.mockImplementationOnce(async () => {
      throw new Error("Error test");
    });

    const result = await vehicleController.delete(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.delete).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(400);
    expect(result.json).toEqual("Error test");
  });

  it("list - list users", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {};
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.list.mockResolvedValueOnce([
      {
        ...vehicleMock,
        id: uuidV4(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const result = await vehicleController.list(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.list).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(200);
    expect(result.json).toEqual(
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

  it("list - catch error on service", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const request = {};
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.list.mockImplementationOnce(async () => {
      throw new Error("Error test");
    });

    const result = await vehicleController.list(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.list).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(400);
    expect(result.json).toEqual("Error test");
  });

  it("view - view user", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const vehicleMock = {
      brand: "marcaTeste",
      licensePlate: "placaTeste",
      model: "modeloTeste",
      version: "versaoTeste",
      year: 73573,
    };

    const request = {
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.view.mockResolvedValueOnce({
      ...vehicleMock,
      id: uuidV4(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const result = await vehicleController.view(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.view).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(200);
    expect(result.json).toEqual({
      ...vehicleMock,
      id: expect.any(String),
      createdAt: expect.any(Date),
      updatedAt: expect.any(Date),
    });
  });

  it("view - catch error on service", async () => {
    const { vehicleController, vehicleServiceMock } = getSut();

    const request = {
      params: { vehicleId: uuidV4() } as any,
    };
    let response = {};
    response = {
      status: (value: number) => (response = { ...response, status: value }),
      json: (value: any) => (response = { ...response, json: value }),
    };

    vehicleServiceMock.view.mockImplementationOnce(async () => {
      throw new Error("Error test");
    });

    const result = await vehicleController.view(
      request as Request,
      response as Response
    );

    expect(vehicleServiceMock.view).toHaveBeenCalledTimes(1);
    expect(result.status).toEqual(400);
    expect(result.json).toEqual("Error test");
  });
});
