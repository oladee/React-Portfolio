import React from 'react'
import { data } from '../data'
import { Link } from 'react-router-dom'

const Projects = () => {
  return (
    <div className='myprojects' id='projects'>
        <header>
            <h2>Projects</h2>
            <hr />
        </header>
        {data.map(x => (<Card name={x.name} description={x.description} image={x.image} link={x.url}/>))}
    </div>
  )
}

export default Projects

export function Card({name, description, image,link}){
  return(<>
  <div className="cardSection"  >
          <div className="card">
            <div className='leftpane'>
              <img src={image} alt="" />
            </div>
            <div className="rightpane">
              <h3>{name}</h3>
              <p>{description}</p>
              <Link to={link} target='blank'>View project</Link>
            </div>
          </div>
        </div>
  </>)
}