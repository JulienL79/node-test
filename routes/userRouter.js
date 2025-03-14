import { Router } from "express";
import { emailVerification, userFieldsVerification } from "../middlewares/userValidation.js";
import { getAllUsers, createUser, updateUser, deleteUser, getUserById } from "../controllers/userController.js";

const userRouter = Router()

userRouter.get('/users', getAllUsers)

userRouter.post('/user', userFieldsVerification , emailVerification , createUser)

userRouter.get('/user/:id', getUserById)

userRouter.put('/user/:id', updateUser)

userRouter.delete('/user/:id', deleteUser)

export default userRouter