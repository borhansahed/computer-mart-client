import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase-init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [orders , setOrders] = useState([]);
    const[user , loading] = useAuthState(auth);

    

    useEffect(()=>{
    if(user){
        fetch(`https://cryptic-retreat-01074.herokuapp.com/booking?customer=${user.email}` , {
          method:'GET' ,
          headers :{
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
        .then(res=>res.json())
        .then(data => setOrders(data));
    }
    },[user])

    
    if(loading){
      return <Loading></Loading>
    };

    
    return (
        <div>
            <h3 className='text-2xl mt-4 text-yellow-500 mb-3'> Your Orders</h3>
            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr className='text-yellow-500'>
        <th></th>
        <th className='text-xl'>Name</th>
        <th className='text-xl'>Email</th>
        <th className='text-xl'>Product</th>
        <th className='text-xl'>Quantity</th>
        <th className='text-xl'> $ Price</th>
       
        <th className='text-xl'>Payment/DeliveryStatus</th>
       
      </tr>
    </thead>
    <tbody>

        {

      orders.map((order , index) => 
        <tr className='text-xl' key={order._id}>
        <th>{index +1}</th>
        <td>{order.customerName}</td>
        <td>{order.customer}</td>
        <td>{order.product}</td>
        <td>{order.quantity}</td>
        <td>$ {order.price ?   order.price :  10062}</td>
       <td>{(order.price && !order.paid ) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-outline btn-sm btn-warning text-base px-5'>Pay</button></Link> }
       { (order.price && order.paid ) && <button  className=' text-base px-5 btn-sm  btn btn-outline btn-success'>Paid</button>      }
      {!order.paid ? <button className='btn btn-outline btn-sm btn-error text-base ml-3'>Cancel</button> : <button className='btn btn-outline btn-sm btn-warning text-base ml-3'>Pending</button> }
       </td>
      
      </tr>
      
      )

        }
      
    
      
      
     
     
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyOrders;