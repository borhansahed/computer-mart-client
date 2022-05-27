import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user , index , refetch}) => {
    const {email , role}=user;

    const handleAdmin = () =>{
        fetch(`https://cryptic-retreat-01074.herokuapp.com/user/admin/${email}`,{
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
           <td>{role !== 'admin' && <button onClick={handleAdmin} className='btn btn-outline btn-warning text-1xl btn-sm'>Make Admin</button>}</td>
           <td><button className='btn btn-outline  btn-sm btn-error'>Remove user</button></td>
           
         </tr>
       
    );
};

export default UserRow;