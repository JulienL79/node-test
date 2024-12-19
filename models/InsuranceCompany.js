import mongoose, { Schema } from "mongoose"

const insuranceCompanySchema = Schema({
    name: {
        type: String,
        required: true
    },
    email : {
        type : String,
        required: true,
        unique: true
        // match: '/^[^\s@]+@[^\s@]+\.[^\s@]+$/'
    },
    phone_number : {
        type : String,
        required: true,
        unique: true
        // match: 
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    address_number : {
        type : String,
        // match: 
    },
    address_street : {
        type : String,
        // match: 
    },
    address_city : {
        type : String,
        // match: 
    },
    address_zip_code: {
        type : String,
        // match: 
    },
    address_country : {
        type : String,
        // match: 
    },
})

export default mongoose.model('InsuranceCompany', insuranceCompanySchema)