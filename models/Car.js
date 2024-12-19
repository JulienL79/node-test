import mongoose, {Schema} from "mongoose";
import User from "./User.js";
import Category from "./Category.js";
import RentInsuranceContract from "./RentInsuranceContract.js";

const carSchema = Schema ({
    brand: {
        type: String,
        required : true
    },
    model: {
        type: String,
        required : true
    },
    registration_date: {
        type: Date,
        required: true
    },
    // registration_number: {
    //     type: String,
    //     required : true,
    //     unique: true
    // },
    // added_date: {
    //     type: Date,
    //     default: Date.now
    // },
    // status: {
    //     type: String,
    //     required : true
    // },
    // description: {
    //     type: String,
    //     required : true
    // },
    // seat_number: {
    //     type: Number,
    //     required : true
    // },
    // sleep_number: {
    //     type: Number,
    //     required : true
    // },
    // width: {
    //     type: Number,
    //     required : true
    // },
    // height: {
    //     type: Number,
    //     required : true
    // },
    // weight: {
    //     type: Number,
    //     required : true
    // },
    // fuel_type: {
    //     type: String,
    //     required : true
    // },
    // gearbox_type: {
    //     type: String,
    //     required : true
    // },
    // consumption: {
    //     type: Number,
    //     required : true
    // },
    // city: {
    //     type: String,
    //     required : true
    // },
    // insurance_number: {
    //     type: String,
    //     required : true
    // },
    // rent_insurance_contract_id: {
    //     type: mongoose.Schema.Types.ObjectId, ref : RentInsuranceContract
    // },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref : User
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId, ref : Category
    }
})

export default mongoose.model('Car', carSchema)