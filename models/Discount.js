import mongoose, { Schema } from "mongoose";
import User from "./User.js";

const discountSchema = Schema({
    code: {
        type: String,
        required: true
    },
    action: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    limit_date: {
        type: Date
    },
    limit_number: {
        type: Number
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: User
    }
})

export default mongoose.model('Discount', discountSchema)