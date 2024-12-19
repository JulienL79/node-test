import Car from "../models/Car.js";

export const getAllCars = async (req, res) => {
    try {
        const cars = await Car.find().populate('user_id', '-password')
        if(cars.length < 1) {
            return res.status(404).json({message: 'Cars not found'})
        }
        return res.json(cars)
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const getCarById = async (req, res) => {
    const {id} = req.params
    try {
        const carByID = await Car.findById(id)
        if (!carByID) {
            return res.status(400).json({message: 'Car not found'})
        }
        return res.json(carByID)
    }
    catch (err) {
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const createCar = async (req, res) => {
    // const {brand, model, plate_numbers, user_id} = req.body
    try {
        const newCar = await new Car(req.body)
        newCar.save()
        return res.status(201).json({message : 'Car has been created'})
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const updateCarById = async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
        const updatedCar = await Car.findByIdAndUpdate(id, req.body, {new : true}) //le {new : true} permet de renvoyer la valeur après modif
        if (!updatedCar) {
            return res.status(400).json({message: 'Car not found'})
        }
        return res.status(200).json({message: 'Car has been updated'})
    }
    catch (err){
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const deleteCarById = async (req, res) => {
    const {id} = req.params
    try {
        const deletedCar = await Car.deleteOne({_id : id})
        console.log(deletedCar)
        return res.status(203).json({message: 'Car has been deleted'})
    }
    catch (err) {

    }
}