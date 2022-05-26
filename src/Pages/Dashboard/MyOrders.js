import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase-init';

const MyOrders = () => {
    const [orders , setOrders] = useState([]);
    const[user] = useAuthState(auth);
     
    useEffect(()=>{
    if(user){
        fetch(`http://localhost:5000/booking?customer=${user.email}`)
        .then(res=>res.json())
        .then(data => setOrders(data));
    }
    },[user])
    return (
        <div>
            <h3>order {orders.length}  </h3>
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
       
      </tr>
    </thead>
    <tbody>

        {

      orders.map((order , index) => 
        <tr className='text-xl'>
        <th>{index +1}</th>
        <td>{order.customerName}</td>
        <td>{order.customer}</td>
        <td>{order.product}</td>
        <td>{order.quantity}</td>
        <td>{order.price ?   order.price :  <p className='text-yellow-400 text-xl '>Paid</p>}</td>
      
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