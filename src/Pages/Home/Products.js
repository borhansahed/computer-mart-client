import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';
import Loading from '../../Shared/Loading';
import '../Css/Products.css'

const Products = ({product}) => {
 

    const {name , price , description , picture , _id} =product;

    const ProductDetail = () => {
      const path = `/inventory/${_id}`;
      Navigate(path);
    }
    return (
        <div className='products-container'>
            <div className="card w-72 products-card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
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