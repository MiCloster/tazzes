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

    useEffect(() => {
        setTimeout(() => {
            const filtered = filterProducts(initialProducts);
            setFilteredProducts(filtered);
            setIsLoading(false);
        }, 4000);
    }, [filterProducts]);

    return (
        <div className='container-home-page'>
            <div className={isLoading ? "preloader-container" : "preloader-container fade-out"}>
                <Preloader />
            </div>
            <Transition in={!isLoading} timeout={100}>
                {state => (
                    <div className={`content-container ${state}`}>
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
                      
                        {/* <Filters></Filters>
                        <Products products={filteredProducts}></Products>
                        <Cart></Cart> */}
                    </div>
                )}
            </Transition>
            
        </div>
    );
};
