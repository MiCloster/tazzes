import React from 'react';
import CardTrending from '../components/home/CardTrending';
import '../styles/components.css'
import ProductCard from './ProductCard';
const ProductGrid = ({ products }) => {
    return (
        <div className="products-container">
          {products.length === 0 ? (
            <div className="no-products">
              <p>No products match the selected filters.</p>
            </div>
          ) : (
            <div className="product-grid">
              {products.map(product => (
                <ProductCard
                  key={product.id}
                  product={product} 
                />
              ))}
              
            </div>
          )}
        </div>
      );
  };

export default ProductGrid;