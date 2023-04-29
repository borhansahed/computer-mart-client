import React from 'react';
import Loading from '../../../Shared/Loading';

const AllOrderRow = ({booking , index , isLoading , deleteOrder, shipment}) => {

    if (isLoading){
        return <Loading></Loading>
    }


    return (
        <tr className='text-base lg:text-xl'>
              <th>{index + 1}</th>
              <td>{booking.customer}</td>
              <td>{booking.product}</td>
              <td>{booking.quantity}</td>
              <td>$ {booking.price}</td>
              <td>{booking.phone ? booking.phone : <p className='text-yellow-500'>No number</p>}</td>
              <td>
                {!booking.paid && <button className='text-base btn-xs lg:btn-sm btn btn-outline btn-error'>Unpaid</button> }
              {
                !booking.paid && <button onClick={() => deleteOrder(booking._id)} className='text-base btn-xs lg:btn-sm  btn btn-outline btn-error ml-3'>Cancel</button> 
              }

              {booking.paid && !booking.shipment && <button onClick={() => shipment(booking._id)} className='text-base btn-xs lg:btn-sm  btn btn-outline btn-warning ml-3'>Shipping</button>}
              {
                booking.shipment && <button   className=' text-base px-5 btn-sm  btn btn-outline btn-success'>Shipped</button>
              }
              </td>
              
            </tr>
    );
};

export default AllOrderRow;