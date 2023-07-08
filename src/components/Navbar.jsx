import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <header>
          <h1>Momoh Oladimeji</h1>
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
