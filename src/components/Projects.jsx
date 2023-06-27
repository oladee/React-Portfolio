import React from 'react'
import image from '../assets/image.png'

const Projects = () => {
  return (
    <div className='myprojects'>
        <header>
            <h2>Projects</h2>
            <hr />
        </header>
        <div className="cardSection">
          <div className="card">
            <div className="leftpane">
              <h3>Project Name</h3>
              <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
              <button>View project</button>
            </div>
            <div className="rightpane">
              <img src={image} alt="" width='300'/>
            </div>
          </div>
        </div>
        <div className="cardSection">
          <div className="card">
            <div className="leftpane">
              <h3>Project Name</h3>
              <p>I created this personal project in order to show how to create an interface in Figma using a portfolio as an example.</p>
              <button>View project</button>
            </div>
            <div className="rightpane">
              <img src={image} alt="" width='300'/>
            </div>
          </div>
        </div>
      
    </div>
  )
}

export default Projects
