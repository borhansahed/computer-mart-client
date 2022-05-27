import React, { useState } from 'react';
import { CardElement  , useElements, useStripe} from '@stripe/react-stripe-js';
import { async } from '@firebase/util';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError , setCardError] = useState('');


    const handleSubmit =  async (event) => {
        event.preventDefault();
      
        if(!stripe || !elements){
          return;
        }
        const card = elements.getElement(CardElement);
        if(card === null){
          return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card,
        });
        
        if(error){
         setCardError(error.message);
        }

       else{
         setCardError('');
       }



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
        <button className='btn  btn-sm btn-warning text-base mt-4 font-medium text-white' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>

      {
        cardError && <p className='text-red-600 text-xl'>{cardError}</p> 
      }
       
       </>
    );
};

export default CheckoutForm;