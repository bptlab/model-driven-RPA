import React from 'react'
import Header2 from './Header2'
import { useNavigate } from 'react-router-dom'

const Profile = ({setLoginUser}) => { 
  const navigate = useNavigate();
  const logout = () =>{
      setLoginUser({})
      alert("Logout Successfully")
      navigate('/Caselist')
  }
    return (
        <div>
            <Header2 />
      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">-=P[;.]
              <div className="profile-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog" alt="" />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>
                   Alishba Kazmi
                </h5>
                <h6>
                  Criminal Lawyer
                </h6>
                <p className="proile-rating">RANKINGS : <span>8/10</span></p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">About</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Timeline</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <input style={{marginTop:15,height:40,color:'white',backgroundColor:'black'}}  type="button" className="profile-edit-btn" name="btnAddMore" defaultValue="Edit Profile" />
              <input style={{marginTop:15,height:40,color:'white',backgroundColor:'black'}} type="button" onClick={logout} className="profile-edit-btn" name="btnAddMore" defaultValue="Sign Out" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href>Website Link</a><br />
                <a href>Instagram Link</a><br />
                <a href>Facebook Link</a>
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                  
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Alishba Kazmi</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>alishbakazmi@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>03029409126</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Criminal Lawyer</p>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="row">
                    <div className="col-md-6">
                      <label>Experience</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Hourly Rate</label>
                    </div>
                    <div className="col-md-6">
                      <p>10$/hr</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Total Solved Cases</label>
                    </div>
                    <div className="col-md-6">
                      <p>240</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>English Level</label>
                    </div>
                    <div className="col-md-6">
                      <p>Expert</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Availability</label>
                    </div>
                    <div className="col-md-6">
                      <p>6 months</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-12">
                      <label>Your Bio</label><br />
                      <p>Your detail description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>           
      </div>
        </div>
    )
}

export default Profile
