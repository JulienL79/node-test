import mongoose, {Schema} from "mongoose";
import Car from "./Car.js";

const priceSchema = Schema ({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    day_price: {
        type: Number,
        required: true
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId, ref : Car
    }
})

export default mongoose.model('Price', priceSchema)