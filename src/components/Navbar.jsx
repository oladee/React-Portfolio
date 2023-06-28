import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <header>
          <h1>Momoh Oladimeji</h1>
        </header>
        <ul>
          <li>About</li>
          <li><Link to="">Projects</Link> </li>
          <li>Contact us</li>
        </ul>
      </nav>
  )
}

export default Navbar
