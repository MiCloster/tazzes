import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { FiltersProvider } from './context/filter.jsx'
import { BrowserRouter } from 'react-router-dom'
import { CartProvider } from './context/cart.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <CartProvider>
    <FiltersProvider>
    <App />
  </FiltersProvider>
  </CartProvider>
  </BrowserRouter>
  
)
