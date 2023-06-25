import React from "react";
import mypic from "../assets/Snapchat-1659820388.jpg";

const Hero = () => {
  return (
    <div className="maincontent">
      <nav>
        <header>
          <h1>Momoh Oladimeji</h1>
        </header>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>Contact us</li>
        </ul>
      </nav>
      <div className="writeup">
        <div className="stack">
          <h2>Front-end Developer</h2>
          <h3>Hello My Name is Momoh Oladimeji</h3>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
        </div>
        <div className="img">
        <img src={mypic} alt="dfvf" height='560px'/>
      </div>
      </div>
    </div>
  );
};

export default Hero;
