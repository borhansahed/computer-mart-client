import React from 'react';
import UseProducts from '../../Hooks/UseProducts';
const ManageProducts = () => {
    const [products ] =UseProducts()
    return (
        <div>
            <h2 className='lg:text-3xl text-2xl mx-36 lg:mx-0 text-yellow-500 mt-4 mb-3'> Managed Products</h2>

            <div class="overflow-x-auto">
  <table class="table  lg:w-full w-72">
  
    <thead>
      <tr>
        <th className=''> </th>

        <th className='text-base lg:text-xl text-yellow-500 font-medium'>Image</th>
        <th className='text-base lg:text-xl text-yellow-500 font-medium'>Name</th>
        <th className='text-base lg:text-xl text-yellow-500 font-medium'>Available</th>
        <th className='text-base lg:text-xl text-yellow-500 font-medium'>Minimum</th>
        <th className='text-base lg:text-xl text-yellow-500 font-medium'>Price</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
    {

        products.map((p , index) =>  <tr key={p._id} className='text-base lg:text-xl'>

        <th >{index + 1}</th>
        <td><img className='w-6 lg:w-12 rounded-full' src={p.picture} alt="" /></td>
        <td>{p.name}</td>
       <td>{p.AvailableQuantity}</td>
        <td>{p?.MinimumOrderQuantity}</td>
        <td>$ {p.price} 
        </td>
      <td><button className='btn btn-outline btn-xs lg:btn-sm btn-error lg:text-base lg:ml-4'>Delete</button></td>
        
      </tr>)

    }
     
    
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageProducts;