import React, { useState } from "react";
import { Link } from 'react-router-dom'
import axios from 'axios';
import Screenshot from '../images/screenshot_1.png'
function Home() {
  const [link, setLink] = useState("");
  const [from, setFrom] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [message, setMessage] = useState("Hi my name is ")
  const handleRobot = () => {
    const object_JSON = {
      Link: link,
      pages:{
         Home:{
          elements:[
              {
                name:"Button",
                id:"register123",
                path:'//*[@id="register"]/a',
                // image:Screenshot,
                // path:'register',
                image:'register23',
                pixel:{
                  x:195,
                  y:0
                },
                currentMode:'ID'
              }
          ]
         }
        
      }
     
    };

    axios.post('http://localhost:8000/run-robot',object_JSON)
      .then(response => {
        console.log(response.data.message);

      })
      .catch(error => {
        console.error(error);

      });
  }
  return (
    <div>

      <section className="call-to-action-box no-padding">
        <div className="container">
          <div style={{ marginTop: 100 }} className="action-style-box">
            <div className="row align-items-center">
              <div className="col-md-8 text-center text-md-left">
                <div className="call-to-action-text">
                  <h3 className="action-title">We understand your needs</h3>
                </div>
              </div>{/* Col end */}
              <div className="col-md-4 text-center text-md-right mt-3 mt-md-0">
                <div className="call-to-action-btn">
                  <Link className="btn btn-dark" to="/Contact">Help?</Link>
                </div>
              </div>{/* col end */}
            </div>{/* row end */}
          </div>{/* Action style box */}
        </div>{/* Container end */}
      </section>{/* Action end */}
      <section id="ts-features" className="ts-features">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="ts-intro">
                <h2 className="into-title">How to use?</h2>
                <h3 className="into-sub-title">We provide Robot Process Automation Services</h3>
                <p>Introducing our web automation tool! Simplify and streamline your web processes with ease. Automate repetitive tasks, navigate through pages, and interact with elements effortlessly. Provide the website URL, process details, and let our tool handle the rest. Experience efficient and time-saving automation at your fingertips. Get started today and enjoy the benefits of seamless web automation</p>
              </div>{/* Intro box end */}
              <div className="gap-20" />
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-trophy" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Excellence in RPA</h3>
                    </div>
                  </div>{/* Service 1 end */}
                </div>{/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-sliders-h" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Process Optimization</h3>
                    </div>
                  </div>{/* Service 2 end */}
                </div>{/* col end */}
              </div>{/* Content row 1 end */}
              <div className="row">
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-thumbs-up" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">Efficieny</h3>
                    </div>
                  </div>{/* Service 1 end */}
                </div>{/* col end */}
                <div className="col-md-6">
                  <div className="ts-service-box">
                    <span className="ts-service-icon">
                      <i className="fas fa-users" />
                    </span>
                    <div className="ts-service-box-content">
                      <h3 className="service-box-title">A Team of Professionals</h3>
                    </div>
                  </div>{/* Service 2 end */}
                </div>{/* col end */}
              </div>{/* Content row 1 end */}
            </div>{/* Col end */}
            <div className="col-lg-6 mt-4 mt-lg-0">
              <h3 className="into-sub-title1">Steps to do?</h3>
              <p style={{ marginTop: 45 }}>"Welcome to our automation web tool! With our user-friendly interface, automating your web processes has never been easier. To get started, follow these simple steps:</p>
              <div className="accordion accordion-group" id="our-values-accordion">
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingOne">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Step:1
                      </button>
                    </h2>
                  </div>
                  <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Provide the Website URL: Enter the URL of the website you want to automate. Make sure to include the complete URL, starting with 'http://' or 'https://'.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingTwo">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Step:2
                      </button>
                    </h2>
                  </div>
                  <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Specify Process Details: Describe the process you want to automate in detail. Include the specific actions you want the tool to perform, such as filling out forms, clicking buttons, or navigating through pages. Additionally, provide the necessary locators for identifying elements on the web page, such as CSS selectors, XPath expressions, or other relevant identifiers.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header p-0 bg-transparent" id="headingThree">
                    <h2 className="mb-0">
                      <button className="btn btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Step:3
                      </button>
                    </h2>
                  </div>
                  <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#our-values-accordion">
                    <div className="card-body">
                      Run the Automation: Once you have provided the website URL, process details, and customized the options, click on the 'Run Automation' button to start the automation process. Sit back and relax while our tool performs the specified actions automatically.
                    </div>
                  </div>
                </div>

              </div>
              {/*/ Accordion end */}


            </div>{/* Col end */}

          </div>{/* Row end */}
        </div>{/* Container end */}
      </section>{/* Feature are end */}

      <section>
        <div className="container">
          <form id="contact-form">
            <div className="error-container" />
            <div className="row">
              <div className="col-md-4">
                <div className="form-group">
                  <label>Link</label>
                  <input onChange={e => setLink(e.target.value)} className="form-control form-control-name" name="name" id="name" placeholder type="text" required />
                </div>
              </div>
              
          
            </div>
            <div className="form-group">
              <label>Detail of Process</label>
              <textarea onChange={e => setBody(e.target.value)} className="form-control form-control-message" name="message" id="message" placeholder rows={10} required defaultValue={""} />
            </div>
          </form>
          <div className="text-right"><br />
            <a onClick={handleRobot}><button className="btn btn-primary solid blank" type="submit">Run Automation</button></a>
          </div>
        </div>
      </section>



      {/*/ subscribe end */}
    </div>
  )
}
export default Home;