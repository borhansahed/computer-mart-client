import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import AllOrderRow from './AllOrderRow';

const ManageAllOrders = () => {

    const {data: bookings , isLoading , refetch}  =useQuery('users' , () => fetch('https://cryptic-retreat-01074.herokuapp.com/bookings' , {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      }).then(res=>res.json()))
   
      if(isLoading){
          return <Loading></Loading>
      }
    return (
        <div>
         <h4 className='text-3xl mt-3 mb-3 text-yellow-500'>All Orders </h4>

         <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th ></th>
        <th  className='text-xl  text-yellow-500' >Email</th>
        <th  className='text-xl  text-yellow-500' >Product</th>
        <th  className='text-xl  text-yellow-500' >Quantity</th>
        <th  className='text-xl  text-yellow-500' >Price</th>
        <th  className='text-xl  text-yellow-500  '>Phone</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
          bookings.map((booking , index)=><AllOrderRow booking={booking}
          key={booking._id}
          index={index}
          refetch={refetch}
          isLoading={isLoading}
          >

          </AllOrderRow>)
      }
     
      
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageAllOrders;