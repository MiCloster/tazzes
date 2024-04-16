import "../../styles/home.css"
import React from 'react'

export default function CardMenu({ title, description, imageUrl, buttonText }) {
    return (
      <div className="card card-menu" >
          <h4 className='card-title text-center'>{title}</h4>
          <div className="card-body d-flex flex-column align-items-center">
              <img src={imageUrl} className="card-img-top" alt="..."/>
              <div className="card-text-container">
                  <h6 className="card-text text-center">{description}</h6>
              </div>
              <a href="#" className="btn btn-primary bg-black border-0 w-75">
                  <h4>{buttonText}</h4>
              </a>
          </div>
      </div>
    )
  }
