import '../styles/components.css'
import { useCart } from '../hooks/useCart.js'
import { Link } from "react-router-dom"
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'

export default function ProductCard({ product}) {
    const { addToCart, removeFromCart, cart } = useCart()

    const checkProductInCart = product => {
      return cart.some(item => item.id === product.id)
    }
    const isProductInCart = checkProductInCart(product)
  return (
   
    <div className="card card-product">
      <div className="card-body card-body-product">
      <div className='button-container'>
            <button className='button-cart-product'
                style={{ backgroundColor: isProductInCart ? '#BF3131' : '#B4C3DA' }} onClick={() => {
                isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
            >
                {
                isProductInCart
                    ? <RemoveFromCartIcon/>
                    : <AddToCartIcon/>
                }
            </button>        
        </div>
      <Link to={`/products/${product.id}`} className="link">
        <div className="image-wrapped text-center">
          <img src={product.imageUrl} alt="Imagen de ejemplo" />
        </div>
        <h4 className="card-product-title">
          {product.name}
        </h4> 
        <p  className="card-product-title">US${product.price}</p>
        </Link>
      </div>
     
      
    </div>

  );
}