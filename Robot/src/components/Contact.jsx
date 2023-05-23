import React, { useState } from "react";
import axios from 'axios';


function Contact() {
  const [name, setName] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("Hi my name is ")
  
  return (
    <div>
      <section className="section services-section" id="services">
        <div className="container">

          <div className="row">
            <div className="col-lg-6">
              <div className="section-title">
                <h2>Contact Us</h2>
                <p> We value your feedback and inquiries. If you have any questions, suggestions, or need assistance, please don't hesitate to reach out to us. Our dedicated support team is here to help you. Simply fill out the contact form below, and we will get back to you as soon as possible. Thank you for your interest in contacting us!"
                  Feel free to customize and personalize it based on your specific requirements and website context.
                </p>
              </div>
            </div>
          </div>

          <div className="row" >
            <div className="container">
              <div className="row text-center">
                <div className="col-12">


                </div>
              </div>
              {/*/ Title row end */}
              <div className="row">
                <div className="col-md-4">
                  <div className="ts-service-box-bg text-center h-100">
                    <span className="ts-service-icon icon-round">
                      <i className="fas fa-map-marker-alt mr-0" />
                    </span>
                    <div className="ts-service-box-content">
                      <h4>Location</h4>
                      <p>Hasso Plattner Institute, Potsdam Germany</p>
                    </div>
                  </div>
                </div>{/* Col 1 end */}

                <div className="col-md-4">
                  <div className="ts-service-box-bg text-center h-100">
                    <span className="ts-service-icon icon-round">
                      <i className="fa fa-envelope mr-0" />
                    </span>
                    <div className="ts-service-box-content">
                      <h4>Email Us</h4>
                      <p>ali.kazmi@student.hpi.uni-potsdam.de</p>
                    </div>
                  </div>
                </div>{/* Col 2 end */}
             
              </div>{/* 1st row end */}
              <div className="gap-60" />

            
              <div className="gap-40" />
              <div className="row">
                <div className="col-md-12">
                  <h3 className="column-title">We love to hear</h3>
                  {/* contact form works with formspree.io  */}
                  {/* contact form activation doc: https://docs.themefisher.com/constra/contact-form/ */}
                  <form id="contact-form">
                    <div className="error-container" />
                    <div className="row">
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Name</label>
                          <input onChange={e => setName(e.target.value)} className="form-control form-control-name" name="name" id="name" placeholder type="text" required />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Email</label>
                          <input onChange={e => setFrom(e.target.value)} className="form-control form-control-email" name="email" id="email" placeholder type="email" required />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Subject</label>
                          <input onChange={e => setSubject(e.target.value)} className="form-control form-control-subject" name="subject" id="subject" placeholder required />
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Message</label>
                      <textarea onChange={e => setBody(e.target.value)} className="form-control form-control-message" name="message" id="message" placeholder rows={10} required defaultValue={""} />
                    </div>
                  </form>
                  <div className="text-right"><br />
                    <a ><button className="btn btn-primary solid blank" type="submit">Send Message</button></a>
                  </div>
                </div>
              </div>{/* Content row */}
            </div>{/* Conatiner end */}
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact;