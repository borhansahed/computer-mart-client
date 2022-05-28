import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Products from './Products';

const HomeProducts = () => {
    const [products] = UseProducts()
    return (
        <>
        <div className='mt-16 lg:mt-28 '>
            <h1 className='text-3xl lg:text-5xl text-center'>New <span className='text-4xl lg:text-6xl text-yellow-400 font-bold'>Products</span> <br /> In Our Shop</h1>
            <div className=' flex flex-wrap justify-center gap-x-32 lg:gap-y-16 gap-y-10 lg:mt-12 mt-8 mb-9'>
           {
               products.reverse().slice(6).map(product=> <Products key={product._id}
               product={product}>

               </Products>)
           }
            </div>
        </div>
        </>
    );
};

export default HomeProducts;