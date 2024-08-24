import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import { register } from './ctrl/auth.js';
import { registerAdmin } from './ctrl/adminauth.js';
import authroute from './routes/auth.js';
import adminroute from './routes/adminauth.js';
dotenv.config();
const app =express();
app.use(express.json());


const PORT = process.env.PORT||3001

app.listen(PORT,()=>{
    console.log(`Listening on ${PORT} ` );
})
mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((err)=>{
    console.log(err);
})
app.use('/auth',authroute);
app.use('/admin',adminroute);
app.post("/reg", register );
app.post('/reg-admin',registerAdmin);