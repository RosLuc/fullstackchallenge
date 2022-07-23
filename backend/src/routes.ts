import { Router } from "express";
import { vehicleFactory } from "./modules/vehicles";

export const routes = () => {
  const routes = Router();

  const vehicleController = vehicleFactory();

  routes.post("/vehicle", (req, res) => vehicleController.create(req, res));
  routes.put("/vehicle/:vehicleId", (req, res) => vehicleController.update(req, res));
  routes.delete("/vehicle/:vehicleId", (req, res) => vehicleController.delete(req, res));
  routes.get("/vehicle", (req, res) => vehicleController.list(req, res));
  routes.get("/vehicle/:vehicleId", (req, res) => vehicleController.view(req, res));

  return routes;
};
