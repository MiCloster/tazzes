import React, { useEffect, useState } from 'react';
import { Transition } from 'react-transition-group';
import Cart from '../components/Cart';
import { Products } from '../components/Products';
import { products as initialProducts } from '../mocks/products.json';
import { Filters } from '../components/Filter';
import { useFilters } from '../hooks/useFilter';
import { Preloader } from '../components/Preloader';
import '../styles/animation.css'; // Asegúrate de tener tus estilos de animación CSS
import logo from '../styles/images/logo-cafe.png'
import MenuHome from '../components/home/MenuHome';

export const Home = () => {
    const { filterProducts } = useFilters();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [firstLoad, setFirstLoad] = useState(() => {
        const isFirstLoad = JSON.parse(localStorage.getItem('firstLoad'));
        return isFirstLoad !== null ? isFirstLoad : true;
    });

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
    useEffect(() => {
        const preloadDuration = firstLoad ? 4000 : 1500;
    
        setTimeout(() => {
            const filtered = filterProducts(initialProducts);
            setFilteredProducts(filtered);
            setIsLoading(false);
            if (firstLoad) {
                localStorage.setItem('firstLoad', JSON.stringify(false));
                setFirstLoad(false); 
            }
        }, preloadDuration);
        console.log(preloadDuration);
    }, [filterProducts, firstLoad]);
    

    function Menu(){
        return(
            <>
            <div className='promocion'> 
                        <p className='text-promocion'>FLASH SALE! SAVE 20% ON SELECT MUG DESIGNS TODAY ONLY</p>
                      </div>
                      <header>
                        <h1 className='header-title'>Discover the finest selection of coffee and tea cups</h1>
                        <div className='header-content'>
                        <img src={logo} alt="logo" className='header-logo' />
                        </div>
                      </header>

                      <div className="home-container">
                        <MenuHome></MenuHome>
                      </div>
                      </>
        )
    }

    
    return (
        <>
        {firstLoad && ( <div className={isLoading ? "preloader-container" : "preloader-container fade-out"}>
                <Preloader />
            </div>)}
           
            <div className='fade-in'>{Menu()} </div>
        </>
    );
};
