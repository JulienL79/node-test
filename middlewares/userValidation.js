import User from "../models/User.js"
import jwt from 'jsonwebtoken'

export const userFieldsVerification = (req, res, next) => {
    const {email, firstname, lastname, password} = req.body
    if(!email || !firstname || !lastname || !password) {
        return res.json({message: 'All fields are required'})
    }
    next()
}

export const emailVerification = async (req, res, next) => {
    const {email} = req.body
    const searchUserByEmail = await User.findOne({email : email})
    if(searchUserByEmail) {
        return res.status(400).json({message: 'Email already taken'})
    }
    next()
}

export const verifyToken = async (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(400).json({message: 'Token is missing'})
    }
    const token = req.headers.authorization.split(' ')[1]
    try {
        if(!token) {
            return res.status(400).json({message: 'Token is missing'})
        }

        const verify = jwt.verify(token, process.env.JWT_SECRET)

        if(verify) {
            next()
        }
        else {
            return res.status(400).json({message: 'Invalid token'})
        }
    }
    catch(err) {
        return res.status(400).json({message: 'Access denied'})
    }
}