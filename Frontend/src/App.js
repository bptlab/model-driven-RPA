import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import UiModeler from './components/uiModeler/UiModeler';
import RobotInterface from './components/robotInterface/RobotCockpit';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
         <Header/>  
           <Routes>
                <Route path="/" element={<UiModeler/>} /> 
                <Route path="/robot" element={<RobotInterface/>} /> 
           </Routes> 
        {/* <Footer/> */}
    </Router>
    </div>
  );
}

export default App;
