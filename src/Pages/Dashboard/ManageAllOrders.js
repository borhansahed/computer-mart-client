import React from 'react';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
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

      const deleteOrder = (id) =>{
        const url = `https://cryptic-retreat-01074.herokuapp.com/bookings/${id}`
        fetch(url, {
          method: 'DELETE',
        }).then(res => res.json())
        .then(value => {
          
         <Loading></Loading>
        toast.success("Cancel Order");
          refetch();
         
        })
    }

    const shipment = (id) =>{
    
      fetch(`https://cryptic-retreat-01074.herokuapp.com/bookings/${id}`,{
          method:'PUT',
          
      }).then(res =>{

        if(res.status === 403){
          toast.error("Pls Try again later")
        }
      return res.json() 
      }).then(data =>{

        <Loading></Loading>
         toast.success("Shipment done Successfully");
             refetch();
             
      
      })

  }
    return (
        <div>
         <h4 className=' text-2xl lg:text-3xl mt-3 mb-3 text-yellow-400  ml-16 lg:ml-0'>All Orders </h4>

         <div class="w-screen lg:w-full  overflow-x-auto">
  <table class="table w-screen lg:w-full">
    
    <thead>
      <tr>
        <th ></th>
        <th  className='text-base font-medium lg:text-xl  text-yellow-500' >Email</th>
        <th  className='text-base font-medium lg:text-xl  text-yellow-500' >Product</th>
        <th  className='text-base font-medium lg:text-xl  text-yellow-500' >Quantity</th>
        <th  className='text-base font-medium lg:text-xl  text-yellow-500' >Price</th>
        <th  className='text-base font-medium lg:text-xl  text-yellow-500  '>Phone</th>
        <th className=' text-base font-medium lg:text-xl  text-yellow-500'> Payment/ShippingStatus </th>
      </tr>
    </thead>
    <tbody>
      {
          bookings.map((booking , index)=><AllOrderRow booking={booking}
          key={booking._id}
          index={index}
          refetch={refetch}
          isLoading={isLoading}
          deleteOrder = {deleteOrder}
          shipment = {shipment}
          >

          </AllOrderRow>)
      }
     
      {/*  */}
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default ManageAllOrders;