import React from 'react'
import "./project.css"

const Card = (props) => {
    const {
        img,
        title,
        description,
        tech
    } = props

    return (
        <div className='card'>
            <img src={img} alt="image" className='card__img' />
            <p>{title}</p>
            <p>{description}</p>
            <p>{tech}</p>
        </div>
        
    )
}

const Project = () => {
  return (
    <div className='project'>
        <div class="project__title">Project</div>
        <  div class="project__items">
            <Card
                img="currency_converter.jpg"
                title="Currency Converter"
                description="This is a currency converter"
                tech="Javascript, React"
            />
        </div>
    </div>
      
    
  )
}

export default Project