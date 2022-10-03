import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Products from './Products';
import '../Css/Products.css'
const HomeProducts = () => {
    const [products] = UseProducts()
    return (
        <>
        <div className='mt-16 lg:mt-28 mb-10'>
            <h1 className='text-3xl lg:text-5xl text-center'>New <span className='text-4xl lg:text-6xl text-yellow-400 font-bold'>Products</span> <br /> In Our Shop</h1>
       
         <div className=' pl-96 lg:pl-0 flex lg:flex-wrap justify-center lg:gap-x-32 lg:gap-y-16  lg:mt-12 mt-12 mb-16 space-x-20 lg:space-x-0 overflow-x-scroll scrollbar-hide '>
           {
               products.slice(7).map(product=> <Products key={product._id}
               product={product}>

               </Products>)
           }
            </div>
        
        </div>
        </>
    );
};

export default HomeProducts;