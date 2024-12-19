import mongoose, {Schema} from "mongoose";
import Car from "../Car.js";
import Widget from "../Widget.js";

const carWidgetSchema = Schema ({
        car_id: {
            type: mongoose.Schema.Types.ObjectId, ref : Car
        },
        widget_id: {
            type: mongoose.Schema.Types.ObjectId, ref : Widget
        }
})

export default mongoose.model('CarWidget', carWidgetSchema)