import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="maincontent">
      <Navbar/>
      <div className="writeup">
        <div className="stack">
          <h2>Front-end Developer</h2>
          <h3>Hello, my name is Momoh Oladimeji</h3>
          <p>
          Front-end engineer with 3+ years of experience in building and maintaining high-traffic web applications. Proven ability to use HTML, CSS, and JavaScript to create user-friendly and visually appealing interfaces with expertise in React.
          </p>
          <div className="buttonSec">
            <Button className="Projects button">
            <Link to="#projects">Projects</Link>
            </Button>
            <Button className="linkedin button">
              <Link to="https://www.linkedin.com/in/oladimeji-momoh-b5484b156/" target="_blank" rel="noopener noreferrer">Linkedin</Link>
            </Button>
          </div>
        </div>
        <div className="imageSec">
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
