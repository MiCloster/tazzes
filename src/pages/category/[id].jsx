import React, { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Products } from '../../components/Products';
import {products as initialProducts} from  '../../mocks/products.json'
import {categories} from '../../mocks/categories.json'
import { Filters } from '../../components/Filter'
import { useFilters } from '../../hooks/useFilter'
import '../../styles/components.css'
import ProductGrid from '../../components/ProductGrid';


export default function CategoryPage() {
    const { id } = useParams();
    const category = categories.find(category => category.id === id);
    const {  setFilters } = useFilters();

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    useEffect(() => {
        if (id) {
            setFilters(prevState => ({
                ...prevState,
                category: id
            }));
        } 
    }, [id, setFilters]);

    const {filterProducts} = useFilters()
    const filteredProducts = filterProducts(initialProducts)
    
    return (
        <div className='fade-in'>
        <div className='category-page'>
        <div className="image-category">
            <img src={category.image} alt="" />
        </div>
        </div>
        <h1>{category.name} </h1>
        <Filters></Filters>
        <ProductGrid products={filteredProducts} />
                        
                        
        
    </div>
    )
    }


