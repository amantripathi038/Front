import React from 'react';
import workers from './home.png';
import './home.css';

const Home = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Domestica <br /> The Home Service App</h1>
      <p>
        Get real customers on call just by making your identity visible on our app.
        List your services and cost and we will do the rest.
      </p>
      <p>
        Sign Up Today !
      </p>
    </div>

    <div className="gpt3__header-image">
      <img src={workers} alt="Workers" />
    </div>
  </div>
);

export default Home;
