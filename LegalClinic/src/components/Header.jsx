import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
    return (
       <div>
       {/* Header */} 
      <header className="header">
        {/* Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12">
                {/* Top Contact */}
                <div className="top-contact">
                  <div className="single-contact"><i className="fa fa-phone" />Phone: (+92) 3236896131</div> 
                  <div className="single-contact"><i className="fa fa-envelope-open" />Email: info@legalclinic.pk</div>	
                  <div className="single-contact"><i className="fa fa-clock-o" />Timings: 24 Hour</div> 
                </div>
                {/* End Top Contact */}
              </div>	
              <div className="col-lg-4 col-12">
                <div className="topbar-right">
                  {/* Social Icons */}
                  <ul className="social-icons">
                    <li><a href="#"><i className="fa fa-facebook" /></a></li>
                    <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
                    <li><a href="#"><i className="fa fa-linkedin" /></a></li>
                    <li><a href="#"><i className="fa fa-envelope-open" /></a></li>
                  </ul>															
                  <div className="button">
                    <Link id='signIn' to="/SignIn" className="bizwheel-btn">Sign In</Link>
                  </div>
                  <div id='register'  className="button">
                    <Link  to="/Register" className="bizwheel-btn">Register</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Topbar */}
        {/* Middle Header */}
        <div className="middle-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="middle-inner">
                  <div className="row">
                    <div className="col-lg-2 col-md-3 col-12">
                      {/* Logo */}
                      <div className="logo">
                        {/* Image Logo */}
                        <div className="img-logo">
                          <a href="/">
                              <img style={{maxWidth:220,marginBottom:10}} src='img/logoHeader.png'/>
                          </a>
                        </div>
                      </div>								
                      <div className="mobile-nav" />
                    </div>
                    <div className="col-lg-10 col-md-9 col-12">
                      <div className="menu-area">
                        {/* Main Menu */}
                        <nav className="navbar navbar-expand-lg">
                          <div className="navbar-collapse">	
                            <div className="nav-inner">	
                              <div className="menu-home-menu-container">
                                {/* Naviagiton */}
                                <ul id="nav" className="nav main-menu menu navbar-nav">
                                  <li className="icon-active"><a href="#">What We Do</a>
                                    <ul className="sub-menu sub-menu-right ">
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Registration</b></u></a>
                                      <ul  className="sub-menu " >
                                          <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Business</b></u></a>
                                              <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Proprietorship</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Partnership</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>One Person</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Company</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Limited Liability</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Partnership</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Private Limited</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Company</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Public Limited</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Company</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Producer</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Company</b></u></a></li>
                                             </ul>
                                          </li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Government</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Registration</b></u></a>
                                                  <ul  className="sub-menu" >
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>MSME / SSI</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Registration</b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Import Export Code</b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Professional Tax </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Registration</b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>PAN</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>TAN</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Digital Signature  </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Code</b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>EPF Registration</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>ISO Registration</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Employee Stock </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Option</b></u></a></li>
                                                  <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>ESI Registration</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                </ul>
                                              </li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>RBI &amp; SEBI</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Registration</b></u></a>
                                                    <ul  className="sub-menu" >
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>NBFC Registration</b></u> <u><b></b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>NBFC Takeover</b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>FFMC License </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Microfinance</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b> Company Registration</b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>NBFC Collaboration</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b></b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Alternative Investment  </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b> Fund Registration</b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Housing Finance </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Company Registration</b></u></a></li>
                                                    <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Peer to Peer </b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Lending License</b></u></a></li>
                                                  </ul>
                                              </li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>NGO &amp; Related</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Registration</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>GST</b></u></a></li>
                                            </ul>
                                      </li>
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Licenses</b></u></a>
                                      <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Government</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Licenses</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Fssai &amp; Eating</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Licenses</b></u></a></li>
                                              
                                            </ul>
                                      </li>
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Intellectual</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Property</b></u></a>
                                      <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Trademark</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Others</b></u></a></li>
                                        
                                            </ul>
                                      </li>
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Compliances</b></u></a>
                                      <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Annual</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Compliances</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Business Changes</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Business Conversion</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Business Closure</b></u></a></li>
                                            </ul>
                                      </li>
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Tax / Filling</b></u></a>
                                      <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>For Business</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Income Tax</b></u></a></li>
                                              
                                            </ul>
                                      </li>
                                      <li><i class="fa fa-angle-right"/><a href="">{`-> `}<u><b>Contracts</b></u></a>
                                      <ul  className="sub-menu" >
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Business Related</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Website Related</b></u></a></li>
                                              <li><i class="fa fa-angle-right"/><a href="#!">{`-> `}<u><b>Human Resource</b></u> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<u><b>Related</b></u></a></li>
                                            </ul>
                                      </li>                               
                                    </ul>
                                  </li>
                                  <li className="icon-active"><a href="#">Who We Are</a>
                                  </li>
                                  <li><Link to="/Caselist">Dashboard</Link></li>
                                  <li><Link to="/Contact">Contact Us</Link></li>
                                </ul>
                                {/*/ End Naviagiton */}
                              </div>
                            </div>
                          </div>
                        </nav>
                        {/*/ End Main Menu */}	
                        {/* Right Bar */}
                        <div className="right-bar">
                          {/* Search Bar */}
                          <ul className="right-nav">
                            <li className="top-search"><a href="#0"><i className="fa fa-search" /></a></li>
                            <li className="bar"><a className="fa fa-bars" /></li>
                          </ul>
                          {/*/ End Search Bar */}
                          {/* Search Form */}
                          <div className="search-top">
                            <form action="#" className="search-form" method="get">
                              <input type="text" name="s" placeholder="Search here" />
                              <button type="submit" id="searchsubmit"><i className="fa fa-search" /></button>
                            </form>
                          </div>
                          {/*/ End Search Form */}
                        </div>	
                        {/*/ End Right Bar */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Middle Header */}
        {/* Sidebar Popup */}
        <div className="sidebar-popup">
          <div className="cross">
            <a className="btn"><i className="fa fa-close" /></a>
          </div>
          <div className="single-content">
            <h4>About Legal Clinic</h4>
            <p>A Legal Clinic is a business element framed by at least one attorneys 
              to take part in the act of law. The essential assistance delivered 
              by a law office is to exhort customers about their lawful privileges</p>
            {/* Social Icons */}
            <ul className="social">
              <li><Link to="/Caselist"><i className="fa fa-facebook" /></Link></li>
              <li><a href="#"><i className="fa fa-whatsapp" /></a></li>
              <li><a href="#"><i className="fa fa-linkedin" /></a></li>
              <li><a href="#"><i className="fa fa-envelope-open" /></a></li>
            </ul>
          </div>
          <div className="single-content">
            <h4>Learn More About Us</h4>   
            <ul className="links">
              <li><a href="/">Home</a></li>
              <li><Link to="/Caselist">About Us</Link></li>
              <li><Link to="/News">Latest Posts</Link></li>
              <li><Link to="/Contact">Contact us</Link></li>
            </ul>
          </div>	
        </div>
        {/*/ Sidebar Popup */}	
      </header>
      {/*/ End Header */}
        </div>
    )
}

export default Header;
