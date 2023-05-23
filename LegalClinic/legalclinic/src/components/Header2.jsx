import React from 'react'
import {Link} from 'react-router-dom'
const Header2 = () => {
    return (
       <div style={{marginTop:10}}>
       {/* Header */} 
      <header className="header">
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
                        <div >
                          <h3  style={{color:'black',marginTop:30}}>Dashboard</h3>
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
                                <ul id="nav" className="nav main-menu menu navbar-nav" >
                                  <li><Link style={{color:"black",fontSize:18}} to="/Caselist">Cases</Link></li>
                                  <li><Link  style={{color:"black",fontSize:18}} to="/Caselist/News">LegalBook</Link></li>
                                  <li><Link  style={{color:"black",fontSize:18}} to="#">Jobs</Link></li>
                                  <li><Link  style={{color:"black",fontSize:18}} to="#">Events</Link></li>
                                  <li><Link  style={{color:"black",fontSize:18}} to="/Caselist/Profile">Profile</Link></li>
                                </ul>
                                
                                {/*/ End Naviagiton */}
                              </div>
                                
                            </div>
                          </div>
                        </nav>
                        {/*/ End Main Menu */}	
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/ End Middle Header */}
      </header>
      {/*/ End Header */}
        </div>
    )
}

export default Header2;
