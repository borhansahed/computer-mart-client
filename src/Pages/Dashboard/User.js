import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const User = () => {
   

    const {data: users , isLoading}  =useQuery('users' , () => fetch('http://localhost:5000/user').then(res=>res.json()))
 
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
        <th>Name</th>
        <th>Email</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
    {

       users.map((u , index)=>  <tr>
        <th>{index + 1}</th>
        <td>{u.email}</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
      </tr>
      ) 
    }
    
     
    </tbody>
  </table>
</div>

        </div>
    );
};

export default User;