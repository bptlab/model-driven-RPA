import React from 'react'
import {Link} from 'react-router-dom'

 const About = () => {
    return (
     <div>
        <div className="breadcrumbs overlay" style={{backgroundImage: 'url("img/about1.jpg")',height:300,margin:30}}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="bread-inner">
                        {/* Bread Menu */}
                        <div style={{marginTop:50}} className="bread-menu">
                            <ul>
                            <li><a style={{fontSize:25}} href="/">Home</a></li>
                            <li><Link style={{fontSize:25}} to="/About">About</Link></li>
                            </ul>
                        </div>
                        {/* Bread Title */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
     
     </div>
    )
}

export default About;
