import mongoose, {Schema} from "mongoose";
import User from "./User.js";
import Order from './Order.js';

const paymentSchema = Schema ({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    method: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref : User,
        required: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId, ref : Order,
        required: true
    }
})

export default mongoose.model('Payment', paymentSchema)