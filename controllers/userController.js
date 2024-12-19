import User from "../models/User.js";
import Car from "../models/Car.js";

export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        if(users.length < 1) {
            return res.status(404).json({message: 'Users not found'})
        }
        return res.json(users)
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const getUserById = async (req, res) => {
    const {id} = req.params
    try {
        const userById = await User.findById(id) //le {new : true} permet de renvoyer la valeur après modif
        if (!userById) {
            return res.status(400).json({message: 'User not found'})
        }
        return res.status(200).json({message: 'User has been updated'})
    }
    catch (err){
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const createUser = async (req, res) => {
    // const {firstname, lastname, birthdate, email, password} = req.body
    try {
        const newUser = await new User(req.body)
        newUser.save()
        return res.status(201).json({message : 'User has been created'})
    }
    catch(err) {
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const updateUser = async (req, res) => {
    const {id} = req.params
    console.log(id)
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new : true}) //le {new : true} permet de renvoyer la valeur après modif
        if (!updatedUser) {
            return res.status(400).json({message: 'User not found'})
        }
        return res.status(200).json({message: 'User has been updated'})
    }
    catch (err){
        return res.status(500).json({message: 'Internal server error'})
    }
}

export const deleteUser = async (req, res) => {
    const {id} = req.params
    try {
        const deletedUser = await User.deleteOne({_id : id})
        const deletedCarRelatedtoUser = await Car.deleteMany({user_id : id})
        console.log(deletedCarRelatedtoUser)
        console.log(deletedUser)
        return res.status(203).json({message: 'User has been deleted'})
    }
    catch (err) {

    }
}