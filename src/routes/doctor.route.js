import { Router } from "express";
import { registerDoctor } from "../controllers/doctor.controller.js";


const doctorRouter = Router()

doctorRouter.route("/").post(registerDoctor)

export {doctorRouter}