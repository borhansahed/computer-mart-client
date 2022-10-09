import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase-init';
import Loading from '../../Shared/Loading';

const MyOrders = () => {
    const [orders , setOrders] = useState([]);
    const[user , loading] = useAuthState(auth);

  

    useEffect(()=>{
    if(user){
        fetch(`https://cryptic-retreat-01074.herokuapp.com/booking?customer=${user.email}`
         
        )
        .then(res=>res.json())

        .then(data =>{
          if(loading){
            return <Loading></Loading>
          }
          setOrders(data)
        } );
    }
    },[user])

    
    if(loading){
      return <Loading></Loading>
    };

    const payment = () => {
        toast.success("Your Payment Done")
    }
    const pending = () => {
      toast.success("We will reach you within 2 days ")
  }
  const addReview = () =>{
    toast.success("Add Your Review Thanks");
  }
  const cancelOrder = (id) => {
    const url = `https://cryptic-retreat-01074.herokuapp.com/bookings/${id}`
        fetch(url, {
          method: 'DELETE',
        }).then(res => res.json())
        .then(data => {
          
         <Loading></Loading>
        toast.success("Cancel Order");
          const remain = orders.filter(order => order._id !== id)
         setOrders(remain)
        })
}
    

    return (
        <div>
            <h3 className='text-2xl lg:text-3xl mt-4 text-yellow-500 mb-3'> Your Orders</h3>
            <div className="w-screen overflow-x-auto lg:w-full">
  <table className="table w-full">
   
    <thead>
      <tr className='text-yellow-500'>
        <th></th>
        <th className='text-base lg:text-xl font-medium'>Name</th>
        <th className='text-base lg:text-xl font-medium'>Product</th>
        <th className='text-base lg:text-xl font-medium'>Quantity</th>
        <th className='text-base lg:text-xl font-medium'> $ Price</th>
       
        <th className='text-base lg:text-xl font-medium'>Payment/ShippingStatus</th>
       
      </tr>
    </thead>
    <tbody>
         
        {
        
      orders.map((order , index) => 
       
        <tr className='text-xl' key={order._id}>
        <th>{index +1}</th>
       
        <td>{order?.customerName}</td>
       
        <td>{order?.product}</td>
        <td>{order.quantity}</td>
        <td>$ {order.price ?   order.price :  10062}</td>
       <td>{(order.price && !order.paid ) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-outline btn-sm btn-warning text-base px-5'>Pay</button></Link> }
       { (order.price && order.paid && !order.shipment ) && <button onClick={payment}  className=' text-base px-5 btn-sm  btn btn-outline btn-success'>Paid</button>      }
      {!order.paid &&  <button onClick={() => cancelOrder(order._id)} className='btn btn-outline btn-sm btn-error text-base ml-3'>Cancel</button> }
      {
        order.paid && !order.shipment && <button onClick={pending} className='btn btn-outline btn-sm btn-warning text-base ml-3'>Pending</button>
      }

      {
        
          order.shipment && <button  onClick={addReview} className=' text-base px-5 btn-sm  btn btn-outline btn-success'>Shipped</button>
        
      }
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