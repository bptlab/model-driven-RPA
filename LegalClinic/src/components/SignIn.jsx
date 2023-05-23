import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignIn = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    type: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(
      {
        ...user,
        [name]: value
      }
    )
  }
  const signinLawyer = () => {
    const { email, password, type } = user
    let signuser = {
      email: email,
      password: password
    }
    if (email && password) {
      if (type === "Lawyer") {
        axios.post("http://localhost:5000/login/lawyers", signuser)
          .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)

          })
      } else if (type === "Student") {
        axios.post("http://localhost:5000/login/students", signuser)
          .then(res => {
            alert(res.data.message)
            setLoginUser(res.data.user)
          })
      } else {
        alert('Select Type ')
      }
    } else {
      alert("Please fill all the fields")
    }
  }

  const signIn = () =>{
    const { email, password, type } = user
    let signuser = {
      email: email,
      password: password
    }
    if (email && password) {
      if (type === "Lawyer") {
        navigate('/Caselist')
      } else if (type === "Student") {
        navigate('/news')
      } else {
        alert('Select Type ')
      }
    } else {
      alert("Please fill all the fields")
    }
  }

  return (
    <div >
      <div style={{ marginLeft: 200, marginRight: 200, marginBottom: 100, marginTop: 50 }}>
        <div className="modal-content" style={{ height: 400 }}>
          <div className='row'>
            <div className="modal-header">
              <h4 style={{ marginLeft: 300, color: "black" }} >Login to legalClinic.pk</h4>
            </div>
            <div style={{ marginLeft: 140, marginTop: 20 }} className="form-group">
              <div className="maxl">
                <label className="radio inline">
                  <input id='signInRadioLawyer' type="radio" name="type" value="Lawyer" onChange={handleChange} defaultValue="Lawyer" />
                  <span> Lawyer </span>
                </label>
                <label style={{ marginLeft: 23 }} className="radio inline">
                  <input id='signInRadioStudent' type="radio" name="type" value="Student" onChange={handleChange} defaultValue="Student" />
                  <span> Student </span>
                </label>
              </div>
            </div>
          </div>
          <div >
            <div style={{ padding: 20 }} className="row">
              <div style={{ marginLeft: 150 }} className="col-xs-6">
                <div className="well">

                  <div className="form-group">
                    <label style={{ fontWeight: "bold", fontSize: 15 }} ><u>Email</u></label>
                    <input type="text" className="form-control" id="usernameLogin" name="email" value={user.email} onChange={handleChange} placeholder="Enter Your Email" />
                    <span className="help-block" />
                  </div>
                  <div className="form-group">
                    <label style={{ fontWeight: "bold", fontSize: 15 }}><u>Password</u></label>
                    <input type="password" className="form-control" id="passwordLogin" name="password" value={user.password} onChange={handleChange} placeholder='Enter Your Password' />
                    <span className="help-block" />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" name="remember" id="rememberLogin" /> Remember login
                    </label>
                  </div>
                  <button id='loginButton' type="submit" onClick={signIn} style={{ backgroundColor: "black", borderColor: "white" }} className="btn btn-success btn-block">Login</button>
                </div>
              </div>
              <div style={{ marginLeft: 200 }} className="col-xs-6">
                <p className="lead">Register now for <span className="text-success">FREE</span></p>
                <ul className="list-unstyled" style={{ lineHeight: 2, marginTop: 15 }}>
                  <li><span className="fa fa-check text-success" /> See all our services.</li>
                  <li><span className="fa fa-check text-success" /> Contact us for any query.</li>
                  <li><span className="fa fa-check text-success" /> Get Cases Regularly</li>
                  <li><span className="fa fa-check text-success" /> Improve Your Skills</li>
                  <li><span className="fa fa-check text-success" /> Get Internships </li>
                </ul>
                <p ><Link to="/Register" style={{ backgroundColor: "#457778" }} className="btn btn-info btn-block">Yes please, register now!</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignIn
