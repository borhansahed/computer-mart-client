import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
import '../Css/Products.css'
import Footer from '../Home/Footer';

const Purchase = () => {
    const [products] = UseProducts();
    return (
        <div className='mt-8 lg:mt-16 '>
        <h1 className='text-3xl lg:text-5xl text-center'> <span className='text-4xl lg:text-6xl text-yellow-400 font-bold'>Products</span> <br /> In Our Shop</h1>
        <div className=' flex flex-wrap justify-center gap-x-32 lg:gap-y-16 gap-y-10 lg:mt-12 mt-8 mb-16'>
       {
           products.reverse().slice(0,6).map(product=> <><div className='products-container'>
           <div class="card w-72 products-cards lg:w-96 bg-base-100 shadow-xl">
 <figure><img src={product.picture} alt="Shoes" /></figure>
 <div class="card-body">
   <h2 class="card-title text-xl lg:text-3xl">{product.name}</h2>
   <h2 className='text-base lg:text-xl '>{product.description.slice(0,200)} ...<span className='text-yellow-500'>See More</span></h2>
   
   <p className=' text-base lg:text-2xl mb-0 '> <span className=''>AvailableQuantity : </span>{product.AvailableQuantity}</p>
   <p className=' text-base lg:text-2xl  '> <span className=''>MinimumOrderQuantity : </span>{product.MinimumOrderQuantity}</p>
   <p className=' text-2xl lg:text-4xl font-bold  mt-2 lg:mt-0'> <span className=''>$</span>{product.price}</p>
   <div class="card-actions ">
     <button class="btn btn-outline btn-warning btn-sm lg:text-xl lg:btn lg:btn-outline w-full mt-2 lg:mt-0">Purchase</button>
   </div>
 </div>
</div>
       </div>
       </>
           

           )
       }

        </div>
        <Footer></Footer>
    </div>
    );
};

export default Purchase;