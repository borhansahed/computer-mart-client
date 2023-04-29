import React, { useEffect, useState } from 'react';

const UseProducts = () => {
  const [products , setProducts] =useState([]);

    useEffect(() =>{
        fetch('https://computer-mart-server.vercel.app/product')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[])
    return [products , setProducts]
        


   
};

export default UseProducts;