import mongoose, {Schema} from "mongoose";

const categorySchema = Schema ({
    name: {
        type: String,
        required : true
    }
})

export default mongoose.model('Category', categorySchema)