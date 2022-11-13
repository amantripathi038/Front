import React from 'react';
import Feature from '../../components/feature/Feature';
import './what.css';

const WhatDomestica = () => (
  <div className="gpt3__whatgpt3 section__margin" id="whatDomestica">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is DOMESTICA" text="Domestica is a brand, a name, and a faith you can rely on. 
We are the one-stop destination for all your domestic needs.
The platforms help service seekers to hire professionals for services such as domestic work ranging from housekeeping, washing clothes, utensils, cooking, a salon at home, etc. at dynamic pricing according to users' location." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>

    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="CUSTOMERS" text="Providing an interface to minimize the tailsome task of searching local workers." />
      <Feature title="SUPPORT" text="24*7 ~ Customer & Worker support to handle your queries in an effective way." />
      <Feature title="WORKERS" text="No hidden cost and brokerage lifetime. Get what you deserve!" />
    </div>
  </div>
);

export default WhatDomestica;
