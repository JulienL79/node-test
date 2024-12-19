import mongoose, {Schema} from "mongoose";

const optionSchema = Schema ({
    name: {
        type: String,
        required: true
    },
    max_kilometers: {
        type: Number
    },
    coefficient_kilometers: {
        type: Number
    },
    price: {
        type: Number
    }
})

export default mongoose.model('Option', optionSchema)