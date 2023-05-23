import logo from './logo.svg';
import React,{useState} from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import SignIn from './components/SignIn';
import Contact from './components/Contact';
import About from './components/About';
import Form from './components/Form';
import Profile from './components/Profile';
import News from './components/News';
import Caselist from './components/Caselist';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
  const [user,setLoginUser] = useState({})

  return (
    <div className="App">
        <Router>
         <Header/>  
           <Routes>
                <Route path="/" element={<Home/>} /> 
                <Route path="Register" element={<Register/>} /> 
                <Route path="Contact" element={<Contact/>} />
                <Route path="About" element={<About/>} />
                <Route path="Form" element={<Form/>} />
                {/* {
                  user && user._id ? <Route path="Caselist" element={<Caselist />} /> :  */}
                  <Route  path="SignIn" element={<SignIn setLoginUser={setLoginUser} />} />
                  <Route  path="CaseList" element={<Caselist  />} />
                {/* } */}
                <Route path="News" element={<News/>} />
                <Route path="Profile" element={<Profile setLoginUser={setLoginUser} />} />
           </Routes> 
        <Footer/>
    </Router>
    </div>
  );
}

export default App;
