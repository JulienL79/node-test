import mongoose, {Schema} from "mongoose";
import User from "./User.js";

const favouriteListSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref : User
    }
})

export default mongoose.model('FavouriteList', favouriteListSchema)