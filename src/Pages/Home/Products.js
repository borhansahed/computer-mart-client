import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Products.css'

const Products = ({product}) => {
 

    const {name , price , description , picture , _id} =product;

    return (
        <div className='products-container group  mb-8'>
            <div className="card w-72  products-card lg:w-96 bg-base-100 shadow-xl">
  <figure><img className='transition ease-in group-hover:translate-y-44 ' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title text-xl lg:text-3xl">{name}</h2>
    <p className='text-base lg:text-xl'>{description?.slice(0,100)} ...<span className='text-yellow-500'>See More</span></p>
    <p className=' text-2xl lg:text-4xl font-bold '> <span className=''>$</span>{price}</p>
    <div className="card-actions justify-end">
    
        <Link className="btn btn-outline btn-warning btn-sm lg:text-xl lg:btn lg:btn-outline" to={`/purchase/${_id}`}>Purchase</Link>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default Products;