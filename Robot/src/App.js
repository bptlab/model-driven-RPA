import logo from './logo.svg';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
         <Header/>  
           <Routes>
                <Route path="/" element={<Home/>} /> 

                <Route path="Contact" element={<Contact/>} />
           </Routes> 
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
