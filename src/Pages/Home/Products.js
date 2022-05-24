import React from 'react';
import { Link } from 'react-router-dom';
import '../Css/Products.css'

const Products = ({product}) => {
    const {name , price , description , picture} =product;
    return (
        <div className='products-container'>
            <div class="card w-72 products-card lg:w-96 bg-base-100 shadow-xl">
  <figure><img src={picture} alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title lg:text-3xl">{name}</h2>
    <p className='lg:text-xl'>{description.slice(0,100)} ...<span className='text-yellow-500'>See More</span></p>
    <p className='lg:text-4xl font-bold'>${price}</p>
    <div class="card-actions justify-end">
      <Link class="btn btn-outline btn-warning btn-sm lg:text-xl lg:btn lg:btn-outline" to="/purchase">Purchase</Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Products;