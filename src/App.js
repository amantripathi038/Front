import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './containers/home/Home';
import Register from './containers/register/Register';
import Footer from './containers/footer/Footer';
import WhatDomestica from './containers/What is DOMESTICA/what';
import Contact from './containers/contact/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="gradient__bg">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>}/>
          </Routes>
          <WhatDomestica/>
          <Contact/>
          <Footer/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
