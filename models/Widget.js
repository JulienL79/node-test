import mongoose, {Schema} from "mongoose";

const widgetSchema = Schema ({
    name: {
        type: String,
        required : true
    },
    icon: {
        type: String,
        required : true
    },
    type: {
        type: String,
        required : true
    },
})

export default mongoose.model('Widget', widgetSchema)