import express from 'express';
import 'dotenv/config';
import movieRouter from './routes/movieRouter.js';
import userRouter from './routes/userRouter.js';
import mongoose from 'mongoose';
import carRouter from './routes/carRouter.js';
import cors from 'cors'
import authRouter from './routes/authRouter.js';

const app = express();
const PORT = process.env.PORT || 3002
const MONGO_URI = process.env.MONGO_URI

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(movieRouter, userRouter, carRouter, authRouter)

app.get('/', (req, res) => {
    res.send("Welcome to my API")
})

mongoose.connect(MONGO_URI)
const db = mongoose.connection
db.on('connected', () => {
    console.log('Connected to the database')
})
db.on("error" , console .error.bind(console , "MongoDB connection error:" ));

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))

