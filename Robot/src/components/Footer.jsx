import React from "react";
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div>
            <footer id="footer" className="footer bg-overlay">
       
        <div className="copyright">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="copyright-info text-center text-md-left">
                  <span> Master Project - RPA </span>
                </div> 
              </div>
              <div className="col-md-6">
                <div className="footer-menu text-center text-md-right">
                  <ul className="list-unstyled">
                  <li style={{marginTop:15}}><a href="/">Home</a></li>
                  <li style={{marginTop:15}}><Link to="/Contact">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>{/* Row end */}
            <div id="back-to-top" data-spy="affix" data-offset-top={10} className="back-to-top position-fixed">
              <button className="btn btn-primary" title="Back to Top">
                <i className="fa fa-angle-double-up" />
              </button>
            </div>
          </div>{/* Container end */}
        </div>{/* Copyright end */}
      </footer>
        </div>
    )
}
export default Footer;