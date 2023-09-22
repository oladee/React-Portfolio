import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import linkedin from '../assets/bi_linkedin.svg'
import insta from '../assets/ph_instagram-logo-fill.svg'
import github from '../assets/icons8-github.svg'

const Navbar = () => {
  return (
    <nav>
        <header>
          <Link to='https://www.linkedin.com/in/oladimeji-momoh-b5484b156/' target='blank'><img src={linkedin} alt="linkedin Icon" /></Link>
          <Link to='https://www.instagram.com/dim_de3/'><img src={insta} alt="instagram icon" /></Link>
          <Link to='https://github.com/oladee'><img src={github} alt="github icon" /></Link>
        </header>
        <ul>
          <li> <NavLink to='/about'>About</NavLink> </li>
          <li>Projects </li>
          <li>Contact us</li>
        </ul>
      </nav>
  )
}

export default Navbar
