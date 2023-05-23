import mongoose from 'mongoose'

const RegisterSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    },
    confirmPassword :{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    field:{
        type:String,
        required:true
    }
})

export default mongoose.model("Register", RegisterSchema)