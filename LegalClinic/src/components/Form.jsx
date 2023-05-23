import React from 'react'

const Form = () => {
    return (
        <div className="container" style={{marginTop: '1em'}}>
        {/* Sign up form */}
        <form>
          {/* Sign up card */}
          <div className="card person-card">
            <div className="card-body">
              {/* Sex image */}
              <img  className="person-img" src="img/hammer.png" />
              <h2 style={{color:"black"}} id="who_message" className="card-title">Who are you ?</h2>
              {/* First row (on medium screen) */}
              <div className="row">
                <div className="form-group col-md-2">
                  <select id="input_sex" className="form-control">
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                  </select>
                </div>
                <div className="form-group col-md-5">
                  <input id="first_name" type="text" className="form-control" placeholder="First name" />
                  <div id="first_name_feedback" className="invalid-feedback">
                  </div>
                </div>
                <div className="form-group col-md-5">
                  <input id="last_name" type="text" className="form-control" placeholder="Last name" />
                  <div id="last_name_feedback" className="invalid-feedback">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginBottom:50,borderColor:'black',borderRadius:5}} className="row">
            <div className="col-md-6" >
              <div className="card">
                <div className="card-body">
                  <h2 style={{color:"black"}} className="card-title">How to contact you ?</h2>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="email" className="col-form-label">Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter Your Email" required />
                    <div className="email-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="tel" className="col-form-label">Phone number</label>
                    <input type="text" className="form-control" id="tel" placeholder="Enter Your Contact" required />
                    <div className="phone-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="email" className="col-form-label">City</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Your Email" required />
                    <div className="email-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="email" className="col-form-label">Area</label>
                    <input type="text" className="form-control" id="email" placeholder="Enter Your Email" required />
                    <div className="email-feedback">
                    </div>
                  </div>
                </div>
              </div>
              <div style={{marginTop:20}}>
                  <p style={{color:"black"}}>We might want to make a move to thank you for visiting our site. 
                      We are focused on offering quality legitimate types of assistance 
                      and to deliver those administrations in a way steady with the poise
                       and honesty of the lawful calling.To be sure, you 
                          can be guaranteed that our obligation to offering quality lawful 
                          types of assistance, with the most extensive level of amazing skill 
                          and civilities, would be given to you assuming you offer us the 
                          chance to address you should the need emerge. Kindly don't spare 
                          a moment to get in touch with us assuming that there is anything
                           we can do to help.
                           </p>
              </div>
             
            </div>
            <div className="col-md-6">
              <div className="card"> 
                <div className="card-body">
                  <h2 style={{color:"black"}} className="card-title">Your Case !</h2>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="password" className="col-form-label">Case Type</label>
                    <input type="text" className="form-control" placeholder="Enter Case Type Here" required />
                    <div className="password-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="password" className="col-form-label">Subject / Title</label>
                    <input type="text" className="form-control"  placeholder="Enter title of your case" required />
                    <div className="password-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}} htmlFor="password_conf" className="col-form-label">Enter Information Here</label>
                    <textarea type="text" className="form-control" rows={6}  placeholder="Complete detail about your case and documents" required />
                    <div className="password_conf-feedback">
                    </div>
                  </div>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}}  className="col-form-label">Which Currency To Choose ?</label>
                  </div>
                  <div style={{marginLeft:8}} className='row'>
                  <div className="checkbox">
                      <label>
                        <input  type="checkbox" name="remember" id="remember" /> Rs.
                      </label>
                    </div>
                    <div style={{marginLeft:70}} className="checkbox">
                      <label>
                        <input type="checkbox" name="remember" id="remember" /> $
                      </label>
                    </div>
                 </div>
                  <div style={{marginLeft:8}} className='row'>
                  <div className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}}  className="col-form-label">Min Range</label>
                    <input type="number" className="form-control"  placeholder="-------" required />
                    <div className="password-feedback">
                    </div>
                  </div>
                  <div style={{marginLeft:70}} className="form-group">
                    <label style={{fontWeight:"bold",color:'#457778'}}  className="col-form-label">Max Range</label>
                    <input type="number" className="form-control"  placeholder="-------" required />
                    <div className="password-feedback">
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{marginTop: '1em',marginBottom:50,marginLeft:450,marginTop:40}}>
            <button style={{backgroundColor:"black",width:200,height:50}} type="button" className="btn btn-primary btn-lg btn-block">Submit !</button>
          </div>
        </form>
      </div>
    )
}

export default Form;
