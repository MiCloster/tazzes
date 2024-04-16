import { useId } from 'react'
import '../styles/components.css'
import { useCart } from '../hooks/useCart'

export default function Cart() {
    const cartCheckboxId = useId()
    const {cart,addToCart,clearCart} = useCart()
    function CartItem({name,price, imageUrl, quantity, addToCart}){
        return(
        <li >
              <img
                src={imageUrl}
                alt={name}
              />
              <div>
                <strong>{name}</strong> - ${price}
              </div>
              <footer>
                <small >
                    qty: {quantity}
                </small>
            </footer>
            <button onClick={addToCart}>+</button>
            
            </li>
    )}

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckboxId}>CART</label>
        <input id={cartCheckboxId} type="checkbox" hidden></input>
        <aside className='cart'>
            {cart.map(product =>(
            <CartItem key={product.id} 
            addToCart ={()=>addToCart(product)}
            {...product} />
            
            ))}
            <button onClick={clearCart}>Borrar</button>
        </aside>
        
       
        </>
    )
    }
