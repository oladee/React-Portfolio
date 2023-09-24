import React from 'react'
import Contact from './Contact'
import Hero from './Hero'
import Projects from './Projects'

const Landing = ({ref}) => {
  return (
    <div>
      <div>
      <Hero/>
      </div>
      <div>
      <Projects/>
      </div>
      <Contact/>
    </div>
  )
}

export default Landing
