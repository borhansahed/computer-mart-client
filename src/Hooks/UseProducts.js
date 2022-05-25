import React, { useEffect, useState } from 'react';

const UseProducts = () => {
  const [products , setProducts] =useState([]);

    useEffect(() =>{
        fetch('https://cryptic-retreat-01074.herokuapp.com/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return [products , setProducts]
        


   
};

export default UseProducts;