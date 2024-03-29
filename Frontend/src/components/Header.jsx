import React from "react";
import {Link} from 'react-router-dom'
import { saveCurrentUiModels } from '../api/uiModels'

function Header() {
   return(
    <div>
    {/* Header start */}
    <header id="header" className="header-one">
      <div className="site-navigation">
        <div className="container" style={{paddingLeft: "35px", paddingRight: "35px", minWidth: "100vw", margin: "0"}}>
          <div className="row">
            <div className="col-lg-12" style={{padding: "0"}}>
              <nav className="navbar navbar-expand-lg navbar-dark p-0">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-collapse" aria-controls="navbar-collapse" aria-expanded="false" aria-label="Toggle navigation" style={{backgroundColor: "#8231ff", borderRadius: "5px"}}>
                  <span className="navbar-toggler-icon" />
                </button>
                <div id="navbar-collapse" className="collapse navbar-collapse">
                  <p style={{color: "white", fontSize: '30px', textAlign: 'center', fontFamily: 'helvetica', margin: '0', fontWeight:'bold', marginRight: "50px"}}>MdRPA</p>
                  <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item" ><a className="nav-link" href="/">UI Modeler</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/robot">Robot Interface</a></li>
                    <li className="nav-item" ><a className="nav-link" href="/error">Error Overview</a></li>
                  </ul>
                </div>
                {/* <button onClick={() => {saveCurrentUiModels()}} style={{backgroundColor: "#8231ff", borderRadius: "5px", borderColor:"white", borderStyle: "solid", color: "white"}}>SAVE UI MODELS</button> */}
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