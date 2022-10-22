import React from 'react';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading';

const UserRow = ({user , index , refetch, removeUser}) => {
    const {email , role}=user;

    const handleAdmin = () =>{
        fetch(`https://computer-mart2.onrender.com/user/admin/${email}`,{
            method:'PUT',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`

            }

        })
        .then(res=>{

            if(res.status === 403 ){
                toast.error('failed to make an admin');
            }
        
            
           return res.json()})
        .then(data=>{

            if(data.modifiedCount > 0){
            refetch();
            toast.success('Congrats you are Admin ')

            }
            
        })
    }

   
    return (
       
              <tr>
           
           <th>{index + 1}</th>
           <td>{email}</td>
           <td>{role !== 'admin' && <button onClick={handleAdmin} className='btn btn-outline btn-sm btn-warning text-base'>Make Admin</button>}</td>
           <td><button  onClick={() => removeUser(user._id)} className='btn btn-outline btn-sm btn-error text-base'>Remove user</button></td>
           
         </tr>
       
    );
};

export default UserRow;