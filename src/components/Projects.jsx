import React from 'react'
import { data } from '../data'

const Projects = () => {
  return (
    <div className='myprojects' id='projects'>
        <header>
            <h2>Projects</h2>
            <hr />
        </header>
        {data.map(x => (<Card name={x.name} description={x.description} image={x.image}/>))}
    </div>
  )
}

export default Projects

export function Card({name, description, image}){
  return(<>
  <div className="cardSection" >
          <div className="card">
            <div className='leftpane'>
              <img src={image} alt="" />
            </div>
            <div className="rightpane">
              <h3>{name}</h3>
              <p>{description}</p>
              <button>View project</button>
            </div>
          </div>
        </div>
  </>)
}