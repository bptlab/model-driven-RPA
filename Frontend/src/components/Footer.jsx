import React from "react";
import {Link} from 'react-router-dom'

function Footer(){
    return(
        <div>
          <footer id="footer" className="footer bg-overlay">
            <div className="copyright">
              <div className="container">
                    <div className="copyright-info text-center text-md-center">
                    HPI Master Project - Model-driven RPA Bot Development
                    </div> 
              </div>{/* Container end */}
            </div>{/* Copyright end */}
          </footer>
      </div>
    )
}
export default Footer;