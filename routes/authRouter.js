import { Router } from "express";
import { registerNewUser, loginUser } from "../controllers/authController.js";
import { emailVerification, userFieldsVerification } from "../middlewares/userValidation.js";

const authRouter = Router()

authRouter.post('/register', userFieldsVerification, emailVerification, registerNewUser)
authRouter.post('/login', loginUser)


export default authRouter