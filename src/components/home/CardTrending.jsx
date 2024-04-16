import React, { useState } from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom"


export default function CardTrending({ title, description, imageUrl, link}) {
  return (
    <Link to={link} style={{ textDecoration: "none" }}>
    <div className="card card-trending">
      <div className="card-body">
        <div className="image-wrapped text-center">
          <img src={imageUrl} alt="Imagen de ejemplo" />
        </div>
        <h4 className="card-trending-title">
          {title}
        </h4>
      </div>
    </div>
    </Link>
  );
}