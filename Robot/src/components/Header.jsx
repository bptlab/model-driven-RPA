import React from "react";
import {Link} from 'react-router-dom'

function Header() {
   return(
    <div>
    <div id="top-bar" className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="top-info text-center text-md-left">
              <li><i className="fas fa-map-marker-alt"/> <p className="info-text">Hasso Plattner Institue, Potsdam Germany</p>
              </li>
            </ul>
          </div>
          {/*/ Top info end */}
         
          {/*/ Top social end */}
        </div>
        {/*/ Content row end */}
      </div>
      {/*/ Container end */}
    </div>
    {/*/ Topbar end */}
    {/* Header start */}
    <header id="header" className="header-one">
      <div className="bg-white">
        <div className="container">
          <div className="logo-area">
            <div className="row align-items-center">
              <div className="logo col-lg-3 text-center text-lg-left mb-3 mb-md-5 mb-lg-0">
                <a className="d-block" href="/">
                  <img loading="lazy" src="images/logoRobot.png" alt="Mughals" style={{height:100,width:220}} />
                </a>
              </div>{/* logo end */}
              <div  className="header-right">
                <div style={{fontSize:32, fontWeight:'bold',marginLeft:60, marginTop:20}}>Master Project - Model-driven RPA Bot Development</div>
              </div>{/* header right end */}
             
            </div>{/* logo area end */}
          </div>{/* Row end */}
        </div>{/* Container end */}
      </div>
      <div className="site-navigation">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <ul className="nav navbar-nav mr-auto">
                  <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                  <li style={{marginTop:15}}><Link to="/Contact">Contact</Link></li>
                  </ul>
                </div>
              </nav>
            </div>
            {/*/ Col end */}
          </div>
          {/*/ Row end */}  
        </div>
        {/*/ Container end */}
      </div>
      {/*/ Navigation end */}
    </header>
  </div>
   )
}

export default Header;