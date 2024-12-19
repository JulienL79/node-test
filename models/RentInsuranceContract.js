import mongoose, {Schema} from "mongoose";
import InsuranceCompany from "./InsuranceCompany.js";

const rentInsuranceContractSchema = Schema ({
    name: {
        type: String,
        required : true
    },
    description: {
        type: String,
        required : true
    },
    price_excluding_taxe: {
        type: Number,
        required : true
    },
    vat_rate: {
        type: Number,
        required : true
    },
    price_including_taxe: {
        type: Number,
        required : true
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    insurance_company_id: {
        type: mongoose.Schema.Types.ObjectId, ref : InsuranceCompany
    }
})

export default mongoose.model('RentInsuranceContract', rentInsuranceContractSchema)