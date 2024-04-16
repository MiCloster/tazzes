import { useId } from 'react'
import '../styles/components.css'
import { useCart } from '../hooks/useCart'
import { CartIcon } from './Icons.jsx'

export default function Cart() {
    const cartCheckboxId = useId()
    const {cart,addToCart,clearCart, removeFromCart,removeOneFromCart} = useCart()
    function CartItem({name,price, quantity, addToCart, removeFromCart, removeOneFromCart}){
        return(
        <li className="cart-item" >
            <div className='cart-item-title'>
              <strong>{name}</strong> - ${price}
            </div>
            <div className='cart-options'>
              <strong className='cart-item-title'>
                  Qty: {quantity}
              </strong>
              <button className="button-cart-option" onClick={addToCart}>+</button>
              <button className="button-cart-option" onClick={removeOneFromCart}>-</button>

          </div>
            <button onClick={removeFromCart}>Remove</button>
        </li>
    )}

    return (
        <>
        <label className='cart-button' htmlFor={cartCheckboxId}><CartIcon/></label>
        <input id={cartCheckboxId} type="checkbox" hidden></input>
        <aside className='cart'>
            {cart.map(product =>(
            <CartItem key={product.id} 
            addToCart ={()=>addToCart(product)}
            removeOneFromCart = {()=>removeOneFromCart(product)}
            removeFromCart={()=>removeFromCart(product)}
            {...product} />
            
            ))}
            <button className='clear-button' onClick={clearCart}>Clear</button>
        </aside>
        
       
        </>
    )
    }
