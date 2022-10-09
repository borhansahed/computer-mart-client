import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import Loading from '../../Shared/Loading';

const CheckoutForm = ({ booking , isLoading , refetch }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [transaction, setTransaction] = useState('');
  const [processing, setProcessing] = useState(false);
  const [clientSecret, setClientSecret] = useState('');


  const {_id, price, customer, customerName, quantity } = booking;

  useEffect(() => {
   if(price){
    fetch('https://cryptic-retreat-01074.herokuapp.com/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ price })
    })
      .then(res => res.json())
      .then(data => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
   }

  }, [price])


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
      setSuccess('')
      setProcessing(true);
    }

    else {
      setCardError('');
    }

    const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: customerName,
            email: customer,
            
          },
        },
      },
    );
    if(intentError){
      setCardError(intentError?.message)
      setProcessing(false);
    }
    else{
      alert('ARE YOU SURE')
      console.log(paymentIntent)
      setTransaction(paymentIntent.id)
      setCardError('')
      setSuccess('Congrats! Your payment is done')
      // 
      //paymentdeatails 

      const payment ={
            booking: _id ,
            transactionId: paymentIntent.id
      }
      fetch(`https://cryptic-retreat-01074.herokuapp.com/booking/${_id}` , {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
          
      })
      .then(res=>res.json())
      .then(data=>{
 
        <Loading></Loading>
       refetch();

        
     
    

      })
    }
   
  

  
  }

    if(isLoading){
      return <Loading></Loading>
    }
 
  return (
    <>
    <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
       { !booking.paid ? <button classNameName='btn  btn-sm btn-warning text-base mt-4 font-medium text-white' type="submit" disabled={!stripe || !clientSecret}>
          Pay
        </button> : <button classNameName='btn  btn-sm btn-success text-base mt-4 font-medium text-white' >
          Paid
        </button>}

  {
        cardError && <p classNameName='text-red-600 text-xl'>{cardError}</p>
      }
      {
        success && <p classNameName='text-green-600 text-xl'>{success}</p>
      }
      {
        success && <p classNameName='text-green-600 text-xl'>Your transaction id :   <span classNameName='text-yellow-500'>{transaction}</span> </p>
      }
   

      </form>
   
    
    </>
  );
};

export default CheckoutForm;