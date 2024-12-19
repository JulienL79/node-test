import mongoose, { Schema } from "mongoose"
import User from "./User.js"
import Car from "./Car.js"
import Option from "./Option.js"
import RentInsuranceContract from "./RentInsuranceContract.js"
import Discount from "./Discount.js"

const orderSchema = Schema({
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
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
    total_price_excluding_taxe: {
        type: Number,
        required: true
    },
    vat_rate: {
        type: Number,
        required: true
    },
    total_price_including_taxe: {
        type: Number,
        required: true
    },
    address_number: {
        type: String,
        required: true
    },
    address_street: {
        type: String,
        required: true
    },
    address_city: {
        type: String,
        required: true
    },
    address_zip_code: {
        type: String,
        required: true
    },
    address_country: {
        type: String,
        required: true
    },
    kilometers_travelled: {
        type: Number,
        required: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId, ref: User,
        required: true
    },
    car_id: {
        type: mongoose.Schema.Types.ObjectId, ref: Car,
        required: true
    },
    option_id: {
        type: mongoose.Schema.Types.ObjectId, ref: Option
    },
    rent_insurance_contract_id: {
        type: mongoose.Schema.Types.ObjectId, ref: RentInsuranceContract
    },
    discount_id: {
        type: mongoose.Schema.Types.ObjectId, ref: Discount
    },
})

export default mongoose.model('Order', orderSchema)