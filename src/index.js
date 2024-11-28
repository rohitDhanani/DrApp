import dotenv from 'dotenv';
import { app } from "./app.js";
import { connectDB } from './DB/index.js';

dotenv.config({
    path : "./src/.env"
});

const PORT = process.env.PORT

connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server started at port ${PORT}`);
        
    })

}).catch((error)=>{
    console.log('MongoDB connection error', error);
    
})

