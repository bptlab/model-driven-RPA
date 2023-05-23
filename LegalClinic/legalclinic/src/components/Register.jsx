import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

 const Register = () => {
   const navigate=useNavigate();
   const [user,setUser]=useState({
       firstName:"",
       lastName:"",
       password:"",
       confirmPassword:"",
       gender:"",
       email:"",
       contact:"",
       field:""
   })
 
   const handleChange = (e) =>{
     const {name,value}=e.target ;
     setUser(
       {
         ...user,
         [name]:value
       }
     )
   }
 
   const registerLawyer = () =>{
     const {firstName,lastName,password,confirmPassword,gender,email,contact,field} = user
     if(firstName && lastName && password && confirmPassword && gender && email && contact && field ){
       if (password===confirmPassword){
            axios.post("http://localhost:5000/register/lawyers",user)
            .then(res=>{
              alert(res.data.message)
              navigate('/Caselist')
            })
       }else{
        alert("Password Confirmation Failed")
       }
     } else{
       alert("Please fill all the fields")
     }   
   }

   const registerLaw= () =>{
    const {firstName,lastName,password,confirmPassword,gender,email,contact,field} = user
    if(firstName && lastName && password && confirmPassword && gender && email && contact && field ){
      if (password===confirmPassword){
             navigate('/SignIn')
      }else{
       alert("Password Confirmation Failed")
      }
    } else{
      alert("Please fill all the fields")
    }   
  }
   const registerStudent = () =>{
    const {firstName,lastName,password,confirmPassword,gender,email,contact,field} = user
    if(firstName && lastName && password && confirmPassword && gender && email && contact && field ){
       if (password===confirmPassword){
        axios.post("http://localhost:5000/register/students",user)
        .then(res=>{
          alert(res.data.message)
        })
       }else{
        alert("Password Confirmation Failed")
       }  
    } else{
      alert("Please fill all the fields")
    }   
  }
    return (
        <div className='container'>
        <div className="container register">
        <div className="row">
          <div className="col-md-3 register-left">
            <h3 style={{color:'black'}}>Welcome</h3>
            <p style={{color:'black'}}>We are fortunate enough to announce that you 
                are being welcomed as a Lawyer and student in Legal Clinic Pakistan.
                Our Clinic has dealt with a lot of lawyers but 
                your vast knowledge and experiences have captured our attention on you and so you got 
                appointed for the post.
            </p>
          </div>
          <div className="col-md-9 register-right">
            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Lawyer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Student</a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <h3 className="register-heading">Register as a Lawyer</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      {console.log("User",user)}
                      <input type="text" id='firstNameSignup' name="firstName" value={user.firstName} onChange={handleChange} className="form-control" placeholder="Enter First Name"  />
                    </div>
                    <div className="form-group">
                      <input type="text" id='lastNameSignup' name="lastName" value={user.lastName} onChange={handleChange} className="form-control" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group">
                      <input id='passwordSignup' type="password" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Enter Password" />
                    </div>
                    <div className="form-group">
                      <input id='confirmPasswordSignup' type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm Password" />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline"> 
                          <input id='maleSignup' type="radio" name="gender" value="male" onChange={handleChange} defaultValue="male"  />
                          <span> Male </span> 
                        </label>
                        <label style={{marginLeft:23}} className="radio inline"> 
                          <input id='femaleSignup' type="radio" name="gender" value="female" onChange={handleChange} defaultValue="female" />
                          <span> Female </span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input id='emailSignup' type="email" name="email" value={user.email} onChange={handleChange}  className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                      <input id='contactSignup' type="text" name="contact" value={user.contact} onChange={handleChange}  className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="form-group">
                      <select id='typeSignup' className="form-control" name="field" value={user.field} onChange={handleChange}>
                        <option className="hidden" selected disabled>Select Your Field</option>
                        <option id='criminalSignup' value="criminalLawyer">Criminal Lawyer</option>
                        <option id='propertySignup'  value="PropertyLawyer">Property Lawyer</option>
                        <option id='businessSignup'  value="BusinessLawyer">Business Lawyer</option>
                      </select>
                    </div>
                    <input id='submitSignup' type="submit" onClick={registerLaw} className="btnRegister" defaultValue="Register" />
                  </div>
                </div>
              </div>
              <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                <h3 className="register-heading">Register as a Student</h3>
                <div className="row register-form">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="text" name="firstName" value={user.firstName} onChange={handleChange} className="form-control" placeholder="Enter First Name "  />
                    </div>
                    <div className="form-group">
                      <input type="text"name="lastName" value={user.lastName} onChange={handleChange} className="form-control" placeholder="Enter Last Name" />
                    </div>
                    <div className="form-group">
                      <input type="email" name="email" value={user.email} onChange={handleChange} className="form-control" placeholder="Enter Email" />
                    </div>
                    <div className="form-group">
                      <input type="text" name="contact" value={user.contact} onChange={handleChange}  className="form-control" placeholder="Enter Phone" />
                    </div>
                    <div className="form-group">
                      <div className="maxl">
                        <label className="radio inline"> 
                          <input type="radio" name="gender" value="male" onChange={handleChange} defaultValue="male"  />
                          <span> Male </span> 
                        </label>
                        <label style={{marginLeft:23}} className="radio inline"> 
                          <input type="radio" name="gender"  value="female" onChange={handleChange} defaultValue="female" />
                          <span> Female </span> 
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="password" name="password" value={user.password} onChange={handleChange} className="form-control" placeholder="Enter Password "  />
                    </div>
                    <div className="form-group">
                      <input type="password" name="confirmPassword" value={user.confirmPassword} onChange={handleChange} className="form-control" placeholder="Confirm Password "  />
                    </div>
                    <div className="form-group">
                      <select className="form-control" name="field" value={user.field} onChange={handleChange}>
                        <option className="hidden" selected disabled>Select Your Field</option>
                        <option value="criminalLawyer">Criminal Lawyer</option>
                        <option value="PropertyLawyer">Property Lawyer</option>
                        <option value="BusinessLawyer">Business Lawyer</option>
                      </select>
                    </div>
                    <div className="form-group">
                    </div>
                    <input type="submit" onClick={registerLaw} className="btnRegister" defaultValue="Register" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
    )
}

export default Register;
