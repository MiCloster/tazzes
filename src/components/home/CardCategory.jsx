import "../../styles/components.css"
import React from 'react'
import { Link } from "react-router-dom"

export default function CardCategory({ title, description, imageUrl, link }) {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <div className="card card-categories" style={{ backgroundImage: `linear-gradient(to right, rgba(128, 128, 128, 0.7), rgba(128, 128, 128, 0.7)), url(${imageUrl})` }}>
                <h2 className='card-title-categorie text-center'>{title}</h2>
                    <div className="card-text-container">
                        <h6 className="card-text justify-start card-description-categories">{description}</h6>
                    </div>
            </div>
        </Link>
      
    )
  }


