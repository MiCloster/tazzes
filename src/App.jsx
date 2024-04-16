import React, { useEffect, useState } from 'react';
import { Preloader } from './components/Preloader';
import { CartProvider } from './context/cart';
import { AppRouter } from './router/AppRouter';
import './App.css';
import './styles/animation.css'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <CartProvider>
      <div className='app-container'>
        <NavBar />
        <AppRouter/>
      </div>
      
    </CartProvider>
  );
}

export default App;
