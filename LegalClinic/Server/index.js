import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import loginRoutes from './routes/login.js'
import registerRoutes from './routes/register.js'


const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())

const DB_CONNECTION="mongodb+srv://legalclinic123:Alikazmi123@legalclinic.fnvth.mongodb.net/Legalclinicpakistan?retryWrites=true&w=majority"
mongoose.connect(DB_CONNECTION,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to db")
})

app.use("/login",loginRoutes)
app.use("/register",registerRoutes)


app.listen("5000",()=>{
    console.log("Server Running on Port 5000");
})