import React from 'react';
import Loading from '../../Shared/Loading';

const AllOrderRow = ({booking , index , isLoading}) => {

    if (isLoading){
        return <Loading></Loading>
    }
    return (
        <tr className='text-xl'>
              <th>{index + 1}</th>
              <td>{booking.customer}</td>
              <td>{booking.product}</td>
              <td>{booking.quantity}</td>
              <td>$ {booking.price}</td>
              <td>{booking.phone ? booking.phone : <p className='text-yellow-500'>No number</p>}</td>
              <td>{booking.paid ? <button className='text-base px-4 btn-sm  btn btn-outline btn-success'>Paid</button> : <button className='text-base  btn-sm  btn btn-outline btn-error'>Unpaid</button> }
              {booking.paid ? <button className='text-base  btn-sm  btn btn-outline btn-warning ml-3'>Pending</button> : <button className='text-base  btn-sm  btn btn-outline btn-error ml-3'>Cancel</button> }
              </td>
              
            </tr>
    );
};

export default AllOrderRow;