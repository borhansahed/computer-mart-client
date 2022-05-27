import React from 'react';
import {loadStripe} from '@stripe/stripe-js'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';

const stripePromise = loadStripe('pk_test_51L3zoGFafvgGReSn3aLTGokOiyJbR238rTsIZooarrxscgPn22x4Dkinedgg3OeAXmN34nZ2CDlOOXaWpockDS26007gj6u3x1');

const Payment = () => {
    const {id} = useParams();
    const url = `https://cryptic-retreat-01074.herokuapp.com/booking/${id}`
  
    const {data: booking  , isLoading} = useQuery(['booking' , id] , ()=> fetch(url , {
        method:'GET',
        headers:{

           authorization : `Bearer ${localStorage.getItem('accessToken')}`

        }

    }).then(res => res.json()))

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
          <h3  className=''> </h3>

          <div class="card w-96 bg-base-100 ">
  <div class="card-body">
    <h2 class=" text-xl text-yellow-500">Hello Dear   {booking.customerName ? booking.customerName  : <span className=''>Customer</span>} ,</h2>
    <h2 class=" text-2xl font-bold">Please pay for <span className=''>{booking.product}</span> </h2>
    <h2 class=" text-xl ">Your <span className='text-2xl'>{booking.quantity}</span> <span className='text-yellow-500'>{booking.product}</span> is waiting for you</h2>
    <p className='text-2xl font-bold'>Pay $ {booking.price}</p>
    
  </div>
</div>
          <div class="card w-96 bg-base-100 shadow-xl mt-12">
  <div class="card-body">
  <Elements stripe={stripePromise}>
    <CheckoutForm  booking={booking}/>
  </Elements>
  </div>
</div>
        </div>
    );
};

export default Payment;