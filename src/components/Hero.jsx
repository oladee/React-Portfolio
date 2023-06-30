import React from "react";
import mypic from '../assets/Snapchat-1659820388.jpg'
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <div className="maincontent">
      <Navbar/>
      <div className="writeup">
        <div className="stack">
          <h2>Front-end Developer</h2>
          <h3>Hello, my name is Momoh Oladimeji</h3>
          <p>
            Short text with details about you, what you do or your professional
            career. You can add more information on the about page.
          </p>
          <div className="buttonSec">
            <Button className="Projects button">
            Projects
            </Button>
            <Button className="linkedin button">
              <a href="https://www.linkedin.com/in/oladimeji-momoh-b5484b156/" target="_blank" rel="noopener noreferrer">Linkedin</a>
            </Button>
          </div>
        </div>
        <div className="imageSec">
          <img src={mypic} alt="" className="image"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;

export function Button({children, className, ...props}){
  return(<>
  <button className={className} {...props}>{children}</button>
  </>)
}
