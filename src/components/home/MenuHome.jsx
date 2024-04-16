import React from 'react'
import CardMenu from './CardMenu'
import CardCategory from './CardCategory'
import cupOff from '../../styles/images/cup-20-off.png'
import cupArrival from '../../styles/images/cups-arrivals.png'
import CarouselMenu from './CarouselMenu'
import {CoffeeIcon, PopularIcon} from '../Icons.jsx'



export default function MenuHome() {
  return (
    <div className='flex'>
    <div className="container container-menu p-4 flex">
    <div className="table-container">
    <div className="big-table-column">
    <table className='tabla-offers flex' >
        <tbody>
        <tr>
                <td className='table-column'>
                    <div className="title-icon-container">
                    <div className='icon'>
                      <CoffeeIcon/>
                    </div>
                        <h4 className='name-options'>Special Offers</h4>
                    </div>  
                </td>
            </tr>
            <tr>
                <td className='table-column'>
                <CardMenu
                        title="Coffee Cup"
                        description="Upgrade your morning routine! Enjoy 20% off our premium coffee mug collection"
                        imageUrl={cupOff}
                        buttonText="Shop now"
                        />  
                </td>
            </tr>
            <tr>
                <td className='table-column'>
                <CardMenu
                        title="New Arrivals!"
                        description="Discover our freshest mugs yet! Elevate your beverage game with our latest arrivals"
                        imageUrl={cupArrival}
                        buttonText="Shop now"
                        />
                </td>
            </tr>

        </tbody>
            
        </table>
    </div>
  
    <div className="big-table-column">
    <table className='table-trending' >
        <tbody>
        <tr>
                <td >
                <CarouselMenu />
                </td>
            </tr>
            <tr className=''>
                <td className='table-column popular-table'>
                  <div className="title-icon-container">
                    <div className='icon'>
                    <PopularIcon/>
                    </div>
                    <h4 className='name-options'>Popular Categories</h4>
                    </div>  
                </td>
            </tr>
            <tr>
                <td>
                    <div className='container-card-popular'>
                        <div className="row flex text-center justify-content-center">
                            <div className="col">
                                <CardCategory
                            title="Coffee Cups"
                            description="Explore a wide range of coffee mugs"
                            imageUrl= "https://gardenandgun.com/wp-content/uploads/2020/03/190405-Evergreen1926-6-Mugs-Web-960x1200.jpg"
                            link="/categories/coffee-cup"
                            />
                            </div>
                            <div className="col">
                                <CardCategory
                            title="Tea Cups"
                            description="Discover our collection of tea cups"
                            imageUrl="https://nestasia.in/cdn/shop/products/96.3_5953f7ec-dded-4dff-a37f-2a865512a155.jpg?v=1652159099&width=600"
                            buttonText="Shop now"
                            link="/categories/tea-cup"
                            />
                            </div>
                        </div>
                    </div>
                
                </td>
            </tr>
        </tbody>
        </table>
    </div>
  
  <div className="clearfix"></div>
</div>





        
        
    
   
    </div>

    </div>
  )
}
