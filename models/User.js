import mongoose, { Schema } from "mongoose"

const userSchema = Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname : {
        type: String,
        required: true
    },
    birthdate: {
        type: Date,
        required : true
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
    password: {
        type: String,
        required: true,
        minlength : 12
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
    driving_license_number : {
        type : String,
        // match: 
    },
})

export default mongoose.model('User', userSchema)