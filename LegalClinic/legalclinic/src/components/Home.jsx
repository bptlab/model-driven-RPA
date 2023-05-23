import React from 'react'
import {Link} from 'react-router-dom'

 const Home = () => {
    return (
        <div >
              {/* Hero Slider */}
        <section className="hero-slider style1">
          <div className="home-slider">
            {/* Single Slider */}
            <div className="single-slider" style={{backgroundImage: 'url("img/slider2.jpg")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text"> 
                      <div className="hero-text"> 
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}>We aim to deliver Justice in  </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> every District, working  </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> tirelessly to make our Country </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> a better place </h2>
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop:300,marginLeft:70}}>
                  <div className="button">
                     <Link to="/Form" style={{backgroundColor:'black',borderRadius:5}} className="bizwheel-btn theme-1 effect">Query Form <i className="fa fa-angle-right" /></Link>     
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Single Slider */}
            {/* Single Slider */}
            <div className="single-slider" style={{backgroundImage: 'url("img/slider3.jpg")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text"> 
                      <div className="hero-text"> 
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}>Are you a Fan </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> of Speedy Justice ?</h2>
                       
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop:260,marginLeft:140}}>
                  <div  className="button">
                          <Link to="/SignIn" style={{backgroundColor:"black",borderRadius:5,marginTop:25}} className="bizwheel-btn theme-1 effect">Let's Shake Hands <i className="fa fa-angle-right" /></Link>
                  </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Single Slider */}
            {/* Single Slider */}
            <div className="single-slider" style={{backgroundImage: 'url("img/slider1.jpg")'}}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-7 col-md-8 col-12">
                    <div className="welcome-text"> 
                      <div className="hero-text"> 
                      <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}>Let us walk you through </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> the , Legal Walk   </h2>
                        <h2 style={{color:"black",backgroundColor:"white",marginBottom:5,padding:15,fontWeight:'bold',width:'fit-content'}}> of life</h2>
                      
                      </div>
                    </div>
                  </div>
                  <div style={{marginTop:260,marginLeft:140}}>
                  <div className="button">
                          <Link to="/SignIn" style={{backgroundColor:"black",borderRadius:5,marginTop:25}} className="bizwheel-btn theme-2 effect">Enter The Future <i className="fa fa-angle-right" /></Link>
                        </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/ End Single Slider */}
          </div>
        </section>
        {/*/ End Hero Slider */}
        {/* Features Area */}
        <section className="features-area section-bg">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i style={{backgroundColor:"black",color:"white"}} className="fa fa-podcast" /></div>
                  <h4><a href="#">Secure Case Fee</a></h4>
                  <p>Strong oral and written communication skills are crucial for our team 
                     to carry out the duties of a solicitor effectively. Excellent listening
                     ability is also important for us when working with our clients</p>
                  <div className="button">
                    <a href="#" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i style={{backgroundColor:"black",color:"white"}} className="fa fa-podcast" /></div>
                  <h4><a href="#">Time Saver</a></h4>
                  <p> Expertise and access to others with different disciplines. 
                    Use of highly trained associates, legal assistants and support staff.
                     A brand name or firm reputation that makes marketing easier.</p>
                  <div className="button">
                    <a href="#" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature ">
                  <div className="icon-head"><i style={{backgroundColor:"black",color:"white"}} className="fa fa-podcast" /></div>
                  <h4><a href="#">Privacy</a></h4>
                  <p> Our Firm anticipates that employees should showcase their administrations to imminent
                      customers. Attorneys should see the value of fulfilling time constraints and data security</p>
                  <div className="button">
                    <a href="#" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
              <div className="col-lg-3 col-md-6 col-12">
                {/* Single Feature */}
                <div className="single-feature">
                  <div className="icon-head"><i style={{backgroundColor:"black",color:"white"}} className="fa fa-podcast" /></div>
                  <h4><a href="#">24/7 support</a></h4>
                  <p>The thing is, our clients don't restrict their exercises to our business hours. 
                    Clients coul look for our administrations whenever of the
                     day or week, and expect help at whatever point they need it.</p>
                  <div className="button">
                    <a href="#" className="bizwheel-btn"><i className="fa fa-arrow-circle-o-right" />Learn More</a>
                  </div>
                </div>
                {/*/ End Single Feature */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Features Area */}
        {/* Call To Action */}
          <section style={{height:240}} className='hero-slider'>
             <div className='home-slider'>
               <div className='single-slider' >
               <h1 style={{color:"black",marginLeft:500,marginBottom:30}}><u><b> Punjab</b></u></h1>
               <div class="row text-center">
                  <div class="col">
                     <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}} >49728</h2>
                         <p class="count-text "> Solved Cases</p>
                     </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                        <i class="fas fa-balance-scale-right"/>
                        <h2 style={{color:'black'}}>98728</h2>
                        <p class="count-text">Pending Cases</p>
                    </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}}>728</h2>
                         <p class="count-text ">Dismissed cases</p>
                         </div>
                 </div>                  
                </div>
                </div>
                <div className='single-slider' >
               <h1 style={{color:"black",marginLeft:500,marginBottom:30}}><u><b> Sindh </b></u></h1>
               <div class="row text-center">
                  <div class="col">
                     <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}} >68728</h2>
                         <p class="count-text "> Solved Cases</p>
                     </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                        <i class="fas fa-balance-scale-right"/>
                        <h2 style={{color:'black'}} >28928</h2>
                        <p class="count-text">Pending Cases</p>
                    </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}} >328</h2>
                         <p class="count-text ">Dismissed Cases</p>
                         </div>
                 </div>                  
                </div>
                </div>
                <div className='single-slider' >
               <h1 style={{color:"black",marginLeft:380,marginBottom:30}}><u><b>Khyber Pakhtunkhwa</b></u></h1>
               <div class="row text-center">
                  <div class="col">
                     <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}} >11728</h2>
                         <p class="count-text "> Solved Cases</p>
                     </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                        <i class="fas fa-balance-scale-right"/>
                        <h2 style={{color:'black'}} >1728</h2>
                        <p class="count-text">Pending Cases</p>
                    </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}}>728</h2>
                         <p class="count-text ">Dismissed Cases</p>
                         </div>
                 </div>                  
                </div>
                </div>
                <div className='single-slider' >
               <h1 style={{color:"black",marginLeft:440,marginBottom:30}}><u><b>Balochistan</b></u></h1>
               <div class="row text-center">
                  <div class="col">
                     <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}}>21728</h2>
                         <p class="count-text "> Solved Cases</p>
                     </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                        <i class="fas fa-balance-scale-right"/>
                        <h2 style={{color:'black'}} >61738</h2>
                        <p class="count-text">Pending Cases</p>
                    </div>
                 </div>
                 <div class="col">
                    <div class="counter">
                         <i class="fas fa-balance-scale-right"/>
                         <h2 style={{color:'black'}}>1749</h2>
                         <p class="count-text ">Dismissed Cases</p>
                         </div>
                 </div>                  
                </div>
                </div>
              </div>
              </section>
       
        {/*/ End Call to action */}
        {/* Services */}
        <section className="services section-bg section-space">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title style2 text-center">
                  <div className="section-top">
                    <h1 style={{color:"#457778"}}><b>Service We Provide</b></h1><h4>We provide quality service &amp; support..</h4>
                  </div>
                  <div className="section-bottom">
                    <div className="text-style-two">
                      <p>Firms in this industry provide the services of lawyers and other legal
                         practitioners to individuals, businesses, government agencies, and nonprofits.  <a href="#"><u>Contact us</u></a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-12">
                {/* Single Service */}
                <div className="single-service">
                  <div className="service-head">
                    <img src="img/services1.jpg" alt="#" />
                    <div className="icon-bg"><i className="fa fa-handshake-o" /></div>
                  </div>
                  <div className="service-content">
                    <h4 ><a style={{color:"#457778"}} href="#">Lawyers</a></h4>
                    <p>We provide  Lawyers for Consultation for legal information and advice.
                       They are representing clients in court, arbitration, administrative and 
                       legislative hearings</p>
                    <a className="btn" href="#"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                  </div>
                </div>
                {/*/ End Single Service */}
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                {/* Single Service */}
                <div className="single-service">
                  <div className="service-head">
                    <img style={{height:240,width:410}} src="img/services2.jpg" alt="#" />
                    <div className="icon-bg"><i className="fa fa-handshake-o" /></div>
                  </div>
                  <div className="service-content">
                    <h4><a style={{color:"#457778"}} href="#">Internships</a></h4>
                    <p>The LegalClinic's Internships Program offers understudies and ongoing
                       alumni the chance to acquire direct commonsense involvement in
                      Legal Industries.</p>
                    <a className="btn" href="#"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                  </div>
                </div>
                {/*/ End Single Service */}
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                {/* Single Service */}
                <div className="single-service">
                  <div className="service-head">
                    <img src="img/services3.jpg" alt="#" />
                    <div className="icon-bg"><i className="fa fa-handshake-o" /></div>
                  </div>
                  <div className="service-content">
                    <h4><a style={{color:"#457778"}} href="#">Legal Advisory</a></h4>
                    <p>We provide legal advisors who can assist with day-to-day
                       activities, as well as corporate life events. They 
                       use leading technologies to deliver efficient 
                       support for the legal advices</p>
                    <a className="btn" href="#"><i className="fa fa-arrow-circle-o-right" />View Service</a>
                  </div>
                </div>
                {/*/ End Single Service */}
              </div>
            </div>
          </div>
        </section>
        {/*/ End Services */}
        {/* Latest Blog */}
        <section className="latest-blog section-space">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                <div className="section-title default text-center">
                  <div className="section-top">
                    <h1 style={{color:"#457778"}}><b> Published</b></h1>
                  </div>
                  <div className="section-bottom">
                    <div className="text">
                      <p>Here Our some lawful blog's . All things being equal, 
                        contributing to a blog on legitimate issues will likewise build up your ability 
                        in the law. Our blog will assist users</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="blog-latest blog-latest-slider">
                  <div className="single-slider">
                    {/* Single Blog */}
                    <div className="single-news ">
                      <div className="news-head overlay">
                        <span className="news-img" style={{backgroundImage: 'url("img/blog1.png")'}} />
                        <a href="#" className="bizwheel-btn theme-2">Read more</a>
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <h3 className="news-title"><a style={{color:"#457778"}} href="#">Pandemic <br/>Era<br/> Lessons In <br/>Jury Selection,<br/> Court Dynamics<br/></a></h3>
                          <div className="news-text"><p>When the coronavirus pandemic forced courts to shut down and, in some places, eventually shift to remote proceedings in 2020, many trial lawyers learned on the fly how to conduct trials remotely, including handling jury selection by videoconference.</p></div>
                          <ul className="news-meta">
                            <li className="date"><i className="fa fa-calendar" />December 2021</li>
                            <li className="view"><i className="fa fa-comments" />0</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Blog */}
                  </div>
                  <div className="single-slider">
                    {/* Single Blog */}
                    <div className="single-news ">
                      <div className="news-head overlay">
                        <span className="news-img" style={{backgroundImage: 'url("img/blog2.jpg")'}} />
                        <a href="#" className="bizwheel-btn theme-2">Read more</a>
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <h3 className="news-title"><a style={{color:"#457778"}} href="#">Amend<br/> Rule 702<br/> To Clarify<br/> Expert <br/> Witness Standards</a></h3>
                          <div className="news-text"><p>Any discussion about expert testimony admissibility is bound to include at least two different pronunciations of the case name "Daubert," shorthand for the U.S. Supreme Court's 1993 decision in Daubert v. Merrell Dow Pharmaceuticals Inc. </p></div>
                          <ul className="news-meta">
                            <li className="date"><i className="fa fa-calendar" />July 2021</li>
                            <li className="view"><i className="fa fa-comments" />0</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Blog */}
                  </div>
                  <div className="single-slider">
                    {/* Single Blog */}
                    <div className="single-news ">
                      <div className="news-head overlay">
                        <span className="news-img" style={{backgroundImage: 'url("img/blog3.jpg")'}} />
                        <a href="#" className="bizwheel-btn theme-2">Read more</a>
                      </div>
                      <div className="news-body">
                        <div className="news-content">
                          <h3 className="news-title"><a style={{color:"#457778"}} href="#">What COVID-19, Social Issues Mean For Pharma Case Juries</a></h3>
                          <div className="news-text"><p>Since the World Health Organization declared that we were in the midst of a global pandemic on March 11, 2020, Americans have faced health challenges that have not been seen in a century. What's more, Americans have experienced myriad other challenges, from isolation to economic hardship.</p></div>
                          <ul className="news-meta">
                            <li className="date"><i className="fa fa-calendar" />June 2021</li>
                            <li className="view"><i className="fa fa-comments" />0</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    {/*/ End Single Blog */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*/ End Latest Blog */}
         {/* Client Area */}
      <div className="clients section-bg">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="partner-slider">
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-1.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-2.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-3.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-4.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-5.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
                {/* Single client */}
                <div className="single-slider">
                  <div className="single-client">
                    <a href="#" target="_blank"><img src="img/client/client-6.png" alt="#" /></a>
                  </div>
                </div>
                {/*/ End Single client */}
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* Client Area */}
        </div>
    )
}

export default Home;
