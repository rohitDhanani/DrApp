import mongoose, { Schema } from "mongoose";


const doctorSchema= new Schema(
    {
        clinic_id:[
            {
                type: Schema.Types.ObjectId,
                ref: "Clinic"
            }
        ],
        name:{
            type : String,
            require : true
        },
        speciality:{
            type: String,
            require: true
        },
        details:String,
        fees: {
            type : Number,
            require: true
        },
        validity_of_fees: {
            type : Number,
            require: true
        },
        status:{
            type:String   //needs to be discuss 
        },
        type:{
            type:String   // homeopathy or allopathy
        },
        email:{
            type : String,
            require : true,
            unique:true
        },
        phone_number: {
            type : String,
            require: true
        },
        alternate_phone_number: {
            type : String,
            
        },
        country: {
            type : String,
            default:"India"
            
        },
        state: {
            type : String, 
        },
        city: {
            type : String, 
        },
        pincode: {
            type : String, 
        },
        profile_pic: {
            type : String,   // cloudinary URL
        },
        


    },{ timestamps:true }
)

export const Doctor =new mongoose.model("Doctor", doctorSchema)