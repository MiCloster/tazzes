import '../styles/components.css'
import { useCart } from '../hooks/useCart.js'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart(product)

          return (
            <li key={product.id}>
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
          )
        })}
      </ul>
    </main>
  )
}
