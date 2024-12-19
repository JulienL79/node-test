import { Router } from "express";
import Car from "../models/Car.js";
import { createCar, deleteCarById, getAllCars, getCarById, updateCarById } from "../controllers/carController.js";

const carRouter = Router()

carRouter.get('/cars', getAllCars)

carRouter.post('/car', createCar)

carRouter.get('/car/:id', getCarById)

carRouter.put('/car/:id', updateCarById)

carRouter.delete('/car/:id', deleteCarById)

export default carRouter