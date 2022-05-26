import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
   

    const {data: users , isLoading , refetch}  =useQuery('users' , () => fetch('http://localhost:5000/user').then(res=>res.json()))
 
    if(isLoading){
        return <Loading></Loading>
    }

    
    return (
        <div>
            <h3 className='text-2xl text-yellow-400'>All Users {users.length}</h3>

            <div class="overflow-x-auto">
  <table class="table w-full">
   
    <thead>
      <tr>
        <th></th>
        
        <th>Email</th>
        <th>Admin</th>
        <th></th>
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