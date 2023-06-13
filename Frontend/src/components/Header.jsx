import React from "react";
import {Link} from 'react-router-dom'

function Header() {
   return(
    <div>
    {/* Header start */}
    <header id="header" className="header-one">
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
                  <li className="nav-item"><a className="nav-link" href="/">UI Modeler</a></li>
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