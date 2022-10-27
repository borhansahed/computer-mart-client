import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import Products from '../Home/Products'

const Inventory = () => {
    const [product, setProduct] = UseProducts();
    return (
        <>
        <div className='mt-12 lg:mt-20 mb-10'>
            <h1 className='text-3xl lg:text-5xl text-center'>All <span className='text-4xl lg:text-6xl text-yellow-400 font-bold'>Products</span> <br /> In Our Shop</h1>
       
         <div className=' flex flex-col lg:flex-row items-center lg:flex-wrap justify-center lg:gap-x-32 lg:gap-y-16  lg:mt-12 mt-12 mb-16  '>
           {
               product.map(product=> <Products key={product._id}
               product={product}>

               </Products>)
           }
            </div>
        
        </div>
        </>
    );
};

export default Inventory;