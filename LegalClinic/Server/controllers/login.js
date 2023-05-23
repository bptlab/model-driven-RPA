import Register from '../models/register.js'

export const loginStudents = (req,res)=>{
    const {email,password} =req.body;
    Register.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfully",user:user})
            }else{
               res.send({message:"Incorrect Password"})
            }
        }else{
           res.send({message:"Incorrect Email and Password"})
        }
    })
}

export const loginLawyers = (req,res)=>{
    const {email,password} =req.body;
    Register.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                res.send({message:"Login Successfully",user:user })
            }else{
               res.send({message:"Incorrect Password"})
            }
        }else{
           res.send({message:"Incorrect Email and Password"})
        }
    })
}