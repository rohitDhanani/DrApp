import express from "express";
import cors from 'cors';
import { doctorRouter } from "./routes/doctor.route.js";
import { Doctor } from "./models/doctor.models.js";
// import { json } from "body-parser";


const app = express()

app.use(cors())
app.use(express.json())
app.use('/doctor',doctorRouter)

app.get('/',async (req,res)=>{
    console.log("req received");
    const docs = await Doctor.find()
    
   return res.json({hello:docs})
})


export { app }