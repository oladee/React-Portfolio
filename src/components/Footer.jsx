import React from 'react'
import insta from '../../src/assets/ph_instagram-logo-fill.svg'
import linkedin from '../assets/bi_linkedin.svg'
import messaging from '../assets/bi_envelope-fill.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <img src={insta} alt="" />
        <img src={linkedin} alt="" />
        <img src={messaging} alt="" />
      </ul>
      <div>
        <h2>Momoh Oladimeji {new Date().getFullYear()}</h2>
      </div>
    </div>
  )
}

export default Footer
