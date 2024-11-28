import { Doctor } from "../models/doctor.models.js"

const registerDoctor = async(req,res)=>{
    const {name, email} = req.body
    const createdDoctor = await Doctor.create({name, email})
    
    return res.send(createdDoctor)
}


export { registerDoctor }