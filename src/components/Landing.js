import React from 'react';
import CreateAccount from './CreateAccount'
import './Landing.css'

function Landing() {
  return (
    <div className="landing-container">
      <div className="left">
        <h1>Rooted</h1>
        <p>Get advice, get inspired, build your indoor jungle and watch your Roots grow</p>
      </div>
      <div className="right">
        <CreateAccount />
      </div>
    </div>
  
  )
}

export default Landing;