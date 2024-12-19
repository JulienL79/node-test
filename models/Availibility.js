import mongoose, {Schema} from "mongoose";
import Car from "./Car.js";

const availabilitySchema = Schema ({
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId, ref : Car
    }
})

export default mongoose.model('Availability', availabilitySchema)