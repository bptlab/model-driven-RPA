import React from 'react'

 const Footer = () => {
    return (
        <div>
               {/* Footer */}
      <footer className="footer" style={{backgroundColor:"black"}}>
        {/* Footer Top */}
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-12">
                {/* Footer About */}		
                <div className="single-widget footer-about widget">	
                  <div className="logo">
                    <div className="img-logo ">
                      <a className="logo" href="#">
                          <img style={{marginRight:40}} src='img/logoFooter.png' />
                      </a>
                    </div>
                  </div>
                  <div className="footer-widget-about-description">
                    <p>Legal Clinic is a full-administration law Firm to provide Legal Services
                    and also supports students in their professional Career</p>
                  </div>	
                  <div className="social">
                    {/* Social Icons */}
                    <ul className="social-icons">
                      <li><a className="facebook" href="#" target="_blank"><i style={{height:40,width:30}} className="fa fa-facebook" /></a></li>
                      <li><a className="twitter" href="#" target="_blank"><i style={{height:40,width:30}} className="fa fa-whatsapp" /></a></li>
                      <li><a className="linkedin" href="#" target="_blank"><i style={{height:40,width:30}} className="fa fa-linkedin" /></a></li>
                      <li><a className="pinterest" href="#" target="_blank"><i style={{height:40,width:30}} className="fa fa-envelope-open" /></a></li>
                      <li><a className="instagram" href="#" target="_blank"><i style={{height:40,width:30}} className="fa fa-instagram" /></a></li>
                    </ul>
                  </div>
                  <div className="button"><a href="#" className="bizwheel-btn">Contact Us</a></div>
                </div>		
                {/*/ End Footer About */}		
              </div>
              <div className="col-lg-2 col-md-6 col-12">
                {/* Footer Links */}		
                <div className="single-widget f-link widget">
                  <h3 className="widget-title">Company</h3>
                  <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Services</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact us</a></li>
                  </ul>
                </div>			
                {/*/ End Footer Links */}			
              </div>
              <div className="col-lg-4 col-md-6 col-12">
                {/* Footer News */}
                <div className="single-widget footer-news widget">	
                  <h3 className="widget-title">Blog Page</h3>
                  {/* Single News */}
                  <div className="single-f-news">
                    <div className="post-thumb"><a href="#"><img style={{height:70,width:70}} src="img/blog2.jpg" alt="#" /></a></div>
                    <div className="content">
                      <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />July 2021</time></p>
                      <h4 className="title"><a href="#">Amend Rule 702 To Clarify Expert  Witness Standards</a></h4>
                    </div>
                  </div>
                  {/*/ End Single News */}
                  {/* Single News */}
                  <div className="single-f-news">
                    <div className="post-thumb"><a href="#"><img style={{height:70,width:70}} src="img/blog3.jpg" alt="#" /></a></div>
                    <div className="content">
                      <p className="post-meta"><time className="post-date"><i className="fa fa-clock-o" />June 2021</time></p>
                      <h4 className="title"><a href="#">What COVID-19, Social Issues Mean For Pharma Case Juries </a></h4>
                    </div>
                  </div>
                  {/*/ End Single News */}
                </div>			
                {/*/ End Footer News */}			
              </div>
              <div className="col-lg-3 col-md-6 col-12">	
                {/* Footer Contact */}		
                <div className="single-widget footer_contact widget">	
                  <h3 className="widget-title">Contact</h3>
                  <p>Feel Free To Contact Us For Any Query</p>
                  <ul className="address-widget-list">
                    <li className="footer-mobile-number"><i className="fa fa-phone" />(+92) 3236896131</li>
                    <li className="footer-mobile-number"><i className="fa fa-envelope" />info@legalclinic.pk</li>
                    <li className="footer-mobile-number"><i className="fa fa-map-marker" />Khayaban-e-Ameen C Block</li>
                  </ul>
                </div>		
                {/*/ End Footer Contact */}						
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-12">
                {/* Footer Newsletter */}
                <div className="footer-newsletter">
                  <form action="#" method="post" className="newsletter-area">
                    <input type="email" placeholder="Your email address" />
                    <button type="submit">Submit</button>
                  </form>
                </div>
                {/*/ End Footer Newsletter */}
              </div>
            </div>
          </div>
        </div>
        {/* Copyright */}
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-content">
                  {/* Copyright Text */}
                  <p>© Copyright <a href="#">Legal Clinic</a>. Developed by <a target="_blank" href="https://thatsallsolutions.com/">That's All Solutions</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Copyright */}
      </footer>
 
        </div>
    )
}

export default Footer;
