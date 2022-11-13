import React from 'react';
import './footer.css';

const date = new Date()
const year = date.getFullYear()

const Footer = () => (
  <div className="gpt3__footer section__padding" id="app">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Download our android application for complete access.</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Download App</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <h2 style={{color: "white"}}>ⒹDOMESTICA</h2>
        <h6 style={{color: "white"}}> The Home Service App</h6>
        <p style={{color: "white"}}>All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p>Download App</p>
        <p>Social Media</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Domestica - The Home Service App</p>
        <p>+91-8840172612</p>
        <p>DomesticaTheHomeServiceApp@gmail.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@{year} Domestica. All rights reserved.</p>
      <p>Created with ❤️ by Aman Srivastava</p>
    </div>
  </div>
);

export default Footer;
