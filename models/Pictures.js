import mongoose, {Schema} from "mongoose";
import Car from "./Car.js";
import User from "./User.js";

const pictureSchema = Schema ({
    alt: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId, ref : Car
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref : User
    }
})

export default mongoose.model('Picture', pictureSchema)