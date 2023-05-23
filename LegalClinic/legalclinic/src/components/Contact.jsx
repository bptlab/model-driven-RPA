import React from 'react'
import {Link} from 'react-router-dom'

 const Contact = () => {
    return (
        <div>
          <div className="breadcrumbs overlay" style={{backgroundImage: 'url("img/contact1.jpg")',height:300,margin:30}}>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="bread-inner">
                  {/* Bread Menu */}
                  <div style={{marginTop:50}} className="bread-menu">
                    <ul>
                      <li><a style={{fontSize:25}} href="/">Home</a></li>
                      <li><Link style={{fontSize:25}} to="/Contact">Contact</Link></li>
                    </ul>
                  </div>
                  {/* Bread Title */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Breadcrumb */}
        {/* Contact Us */}
        <section className="contact-us section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-7 col-12">
                {/* Contact Form */}
                <div className="contact-form-area m-top-30">
                  <h4 style={{color:"#457778"}}>Get In Touch</h4>
                  <form className="form">
                    <div className="row">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <div className="icon"><i className="fa fa-user" /></div>
                          <input type="text" name="first_name" placeholder="First Name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <div className="icon"><i className="fa fa-user" /></div>
                          <input type="text" name="last_name" placeholder="Last Name" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <div className="icon"><i className="fa fa-envelope" /></div>
                          <input type="email" name="email" placeholder="Email" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-group">
                          <div className="icon"><i className="fa fa-tag" /></div>
                          <input type="text" name="subject" placeholder="Subject" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group textarea">
                          <div className="icon"><i className="fa fa-pencil" /></div>
                          <textarea type="textarea" name="message" rows={5} defaultValue={""} placeholder='Message' />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group button">
                          <button type="submit" className="bizwheel-btn theme-2">Send Now</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/*/ End contact Form */}
              </div>
              <div className="col-lg-5 col-md-5 col-12">
                <div className="contact-box-main m-top-30">
                  <div className="contact-title">
                    <h2 style={{color:"#457778"}}>Contact with us</h2>
                    <p> We prioritize our clients over the work and hence no 
                         matters what we give our best to solve their problems.</p>
                  </div>
                  {/* Single Contact */}
                  <div className="single-contact-box">
                    <div  className="c-icon"><i style={{backgroundColor:"black"}} className="fa fa-clock-o" /></div>
                    <div className="c-text">
                      <h4>Service Hours</h4>
                      <p>24/7<br />Everyday</p>
                    </div>
                  </div>
                  {/*/ End Single Contact */}
                  {/* Single Contact */}
                  <div className="single-contact-box">
                    <div className="c-icon"><i style={{backgroundColor:"black"}} className="fa fa-phone" /></div>
                    <div className="c-text">
                      <h4>Call Us Now</h4>
                      <p>Tel.: (+92) 3236896131 <br /> Mob.: (+92) 3236896131</p>
                    </div>
                  </div>
                  {/*/ End Single Contact */}
                  {/* Single Contact */}
                  <div className="single-contact-box">
                    <div className="c-icon"><i style={{backgroundColor:"black"}} className="fa fa-envelope-o" /></div>
                    <div className="c-text">
                      <h4>Email Us</h4>
                      <p>info@legalClinic.pk<br />ahmed@legalClinic.pk</p>
                    </div>
                  </div>
                  {/*/ End Single Contact */}
                  <div className="button">
                    <a href="#" style={{backgroundColor:"black",marginTop:14}} className="bizwheel-btn theme-1">Our Profile<i className="fa fa-angle-right" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="col-lg-6 wow slideInUp" data-wow-delay="0.6s"><iframe className="position-relative rounded w-100 h-100" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Khayaban%20e%20Amin%20P%20Block%20Flats,%20Block%20P%20Khayaban%20E%20Ameen,%20Lahore+(That's%20All%20Solutions%20)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" frameBorder={0} style={{minHeight: '350px',minWidth:'1200px', marginLeft:60,marginRight:60,marginBottom:100}} allowFullScreen aria-hidden="false" tabIndex={0}><a href="https://www.gps.ie/car-satnav-gps/">car gps</a></iframe>
              </div>	
        {/*/ End Contact Us */}
        </div>
    )
}

export default Contact;
