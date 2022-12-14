import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Navbar = () => {
  const [ toggleMenu, setToggleMenu ] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        {/* <div className="gpt3__navbar-links_logo">
          <img src={logo} />
        </div> */}
        <div className="gpt3__navbar-links_container">
          <p><a href="/">Home</a></p>
          <p><a href="#whatDomestica">What is DOMESTICA</a></p>
          <p><a href="#contactus">Contact Us</a></p>
          <p><a href="#app">Download App</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <p>Sign in</p>
        <a href="/register">
          <button type="button" >Sign up</button>
        </a>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="/">Home</a></p>
              <p><a href="#whatDomestica">What is DOMESTICA</a></p>
              <p><a href="#contactus">Contact Us</a></p>
              <p><a href="#app">Download App</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <a href="/register">
                <button type="button" >Sign up</button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
