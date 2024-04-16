import '../styles/components.css'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      {products.length === 0 ? (
        <div className="no-products">
          <p>No products match the selected filters.</p>
        </div>) : 
        (<ul>
          {products.map(product => {
            const isProductInCart = checkProductInCart(product)
          return (
            <>
            <div className="product-container">
              <div className="product-grid">
              <li  key={product.id}>
              <img
                src={product.imageUrl}
                alt={product.name}
              />
              <div>
                <strong>{product.name}</strong> - ${product.price}
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                    isProductInCart
                      ? removeFromCart(product)
                      : addToCart(product)
                  }}
                >
                  {
                    isProductInCart
                      ? "Remove"
                      : "Add"
                  }
                </button>
                
              </div>
            
            </li>
              </div>
          
            </div>
            
            
            </>)
        })}
      </ul>
          ) }
      
    </main>

  )
}
