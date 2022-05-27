import React from 'react';

const AllOrderRow = ({booking , index}) => {
    return (
        <tr className='text-xl'>
              <th>{index + 1}</th>
              <td>{booking.customer}</td>
              <td>{booking.product}</td>
              <td>{booking.quantity}</td>
              <td>$ {booking.price}</td>
              <td>{booking.phone ? booking.phone : <p className='text-yellow-500'>No number</p>}</td>
            </tr>
    );
};

export default AllOrderRow;