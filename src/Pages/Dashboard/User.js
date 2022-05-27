import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
   

    const {data: users , isLoading , refetch}  =useQuery('users' , () => fetch('https://cryptic-retreat-01074.herokuapp.com/user' , {
      method: 'GET',
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
 
    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div>
            <h3 className='text-3xl mt-3 mb-3 text-yellow-500'>All Users</h3>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr className='text-xl'>
        <th></th>
        
        <th className='text-xl text-yellow-500'>User</th>
        <th className='text-xl text-yellow-500'>Make Admin</th>
        <th className='text-xl text-yellow-500'> Remove User </th>
      </tr>
    </thead>
    <tbody>
    {

       users.map((user , index)=> <UserRow 
        user={user}
        key={user._id}
       index={index}
       refetch={refetch}
       >


       </UserRow> 
      ) 
    }
    
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default User;