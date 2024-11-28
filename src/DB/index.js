import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

export const connectDB=async()=>{

    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log('MongoDB connection successful');
    } catch (error) {
        console.log('MongoDB connection error');
        
    }
}