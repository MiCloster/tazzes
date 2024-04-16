import React, { useEffect, useLayoutEffect } from 'react';
import { AppRouter } from './router/AppRouter';
import './App.css';
import './styles/animation.css'
import Cart from './components/Cart';
import NavBar from './components/NavBar'

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    
    
      <div className='app-container'>
        <NavBar />
        <Cart />
        <AppRouter/>
        
      </div>
      
    
  );
}

export default App;
