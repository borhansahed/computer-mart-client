import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const User = () => {
   

    const {data: users , isLoading , refetch}  =useQuery('users' , () => fetch('https://computer-mart2.onrender.com/user' , {
      method: 'GET',
      headers:{
          authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    }).then(res=>res.json()))
 
    if(isLoading){
        return <Loading></Loading>
    }

    const removeUser = (id) =>{
  
      const url = `https://computer-mart2.onrender.com/user/${id}`
      fetch(url, {
        method: 'DELETE',
      }).then(res => res.json())
      .then(value => {
        
       <Loading></Loading>
      toast.success("User Deleted");
        refetch();
       
      })
  }

    
    return (
        <div>
            <h3 className=' lg:text-3xl text-2xl mx-20 lg:mx-0 text-yellow-400 mt-4 mb-5'>All Users</h3>

            <div className="overflow-x-auto">
  <table className="table w-full">
   
    <thead>
      <tr className='text-xl'>
        <th></th>
        
        <th className='text-base lg:text-xl text-yellow-500'>User</th>
        <th className='text-base lg:text-xl text-yellow-500'>Make Admin</th>
        <th className='text-base lg:text-xl text-yellow-500'> Remove User </th>
      </tr>
    </thead>
    <tbody>
    {

       users.map((user , index)=> <UserRow 
        user={user}
        key={user._id}
       index={index}
       refetch={refetch}
       removeUser = {removeUser}
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