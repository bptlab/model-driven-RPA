
import Register from "../models/register.js"
export const postStudents = (req,res)=>{
    const {firstName,lastName,password,confirmPassword,gender,email,contact,field} = req.body
    Register.findOne({email: email},(err,user) =>{
         if(user){
            res.send({message:"User Already Exist, Login Now"})
         }else{
          const register=new Register({
               firstName:firstName,
               lastName:lastName,
               password:password,
               confirmPassword:confirmPassword,
               gender:gender,
               email:email,
               contact:contact,
               field:field
              })
              register.save(err=>{
                 if(err){
                    res.send({Error:err})
                 }else{
                    res.send({message:"User Successfully Registered , Login Now"})
                 }
              })
         }
    }) 
}

 export const postLawyers = (req,res)=>{
    const {firstName,lastName,password,confirmPassword,gender,email,contact,field} = req.body
   Register.findOne({email: email},(err,user) =>{
        if(user){
         res.send({message:"User Already Exist"})
        }else{
         const register=new Register({
              firstName:firstName,
              lastName:lastName,
              password:password,
              confirmPassword:confirmPassword,
              gender:gender,
              email:email,
              contact:contact,
              field:field
             })
             register.save(err=>{
                if(err){
                   res.send({Error:err})
                }else{
                   res.send({message:"User Successfully Registered"})
                }
             })
        }
   })
}