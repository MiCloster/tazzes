import React from 'react';
import CardTrending from './CardTrending'
import "../../styles/home.css";
import { products as initialProducts } from '../../mocks/products.json';
import {ArrowToRight, ArrowToLeft,CoffeeIcon} from '../Icons.jsx'
const CarouselMenu = () => {
  const filteredProductsByTrending = initialProducts.filter(product => product.trending === 'Yes');

  return (
    <div className="row flex">
      <div className="col-12 flex column-carousel ">
        <div className="title-icon-container">
          <div className='icon'>
          <CoffeeIcon/>
          </div>
        
          <h4 className="name-options">Trending Cups</h4>
          <div style={{ marginLeft: 'auto' }}>
            <button className="button-carousel" href="#carouselExampleIndicators2" role="button" data-bs-slide="prev">
              <ArrowToLeft/>
            </button>
            <button className="button-carousel" href="#carouselExampleIndicators2" role="button" data-bs-slide="next">
              <ArrowToRight />
            </button>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div id="carouselExampleIndicators2" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
          <div className="carousel-item active">
          <div className='container-card-trending'>
            <div className="row flex text-center justify-content-center">
              {filteredProductsByTrending.slice(0, 3).map((product) => (
                  <div className="col" key={product.id}>
                    <CardTrending
                      title={product.name}
                      description={`Price US$${product.price}`}
                      imageUrl={product.imageUrl}
                      link={`/products/${product.id}`}
                    />
                  </div>
                ))}
                            
              </div>
            </div>
          </div>
            
            <div className="carousel-item">
            <div className='container-card-trending'>
              <div className="row flex text-center justify-content-center">
                {filteredProductsByTrending.slice(3, 6).map((product) => (
                  <div className="col" key={product.id}>
                    <CardTrending
                      title={product.name}
                      description={`Price US$${product.price}`}
                      imageUrl={product.imageUrl}
                      link={`/products/${product.id}`}
                    />
                  </div>
                ))}
                            
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselMenu;