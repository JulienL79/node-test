import mongoose, {Schema} from "mongoose";
import Car from "../Car.js";
import Option from "../Option.js";

const carOptionSchema = Schema ({
        car_id: {
            type: mongoose.Schema.Types.ObjectId, ref : Car
        },
        option_id: {
            type: mongoose.Schema.Types.ObjectId, ref : Option
        }
})

export default mongoose.model('CarOption', carOptionSchema)