import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaHome } from "@react-icons/all-files/fa/FaHome";
import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FaBookOpen } from "@react-icons/all-files/fa/FaBookOpen";
import auth from '../../Firebase-init';


const MyUpdatedProfile = () => {
   const [profile, setProfile] = useState([]);
   const [user] = useAuthState(auth);

   useEffect(()=>{
    if(user){
          fetch(`https://cryptic-retreat-01074.herokuapp.com/profile/${user.email}` , {
                     method: 'GET',
                     headers:{
                         'content-type':'application/json'
                      
                     }
                 })
                 .then(res => res.json())
                 .then(data=>{
                     setProfile(data);
                      
                 })
    }
    
  
   },[user])


    return (
        
        <div >
            <h1 className='lg:text-3xl text-yellow-400 lg:mt-5 text-2xl lg:ml-0   ml-20'>My Profile</h1>
             <div className=' mt-10  ml-12 lg:ml-0 flex justify-center lg:mr-40'>

                <div>
                    <div>
                       {profile.picture ?<img className=' w-60 lg:w-72 rounded-3xl ' src={profile.picture} alt="" /> :<img className=' w-60 lg:w-72 rounded-3xl' src={user.photoURL} alt="" />} 
                    </div>
                       
                     
                <div className='flex items-center'>
                    {
                profile.name ?  <h1 className=' lg:text-3xl mt-3 lg:ml-8 text-2xl ml-4'>{profile.name}</h1> :  <h1 className='lg:text-3xl mt-3 lg:ml-8 text-2xl ml-12' >{user.displayName}</h1>
              }
               <a href={profile.linkdin} target="blank" className=' text-2xl lg:text-3xl mt-3 ml-1 text-yellow-500'><FaLinkedin> </FaLinkedin></a> 
                </div>
             
             <div className='flex '>

                <h2 className=' text-xl lg:text-2xl mt-3 text-yellow-500 lg:ml-0 ml-4'><MdEmail></MdEmail></h2>

                {profile.email ?    <h1 className='ml-2 text-xl lg:text-2xl mt-2'>{profile.email}</h1>:<h1 className='ml-2 text-xl lg:text-2xl mt-2'>{user.email}</h1>  }
             
               
             </div>
            <div className='flex'>
            <h2 className='text-xl lg:text-2xl mt-1 text-yellow-500 lg:ml-0 ml-4'><FaBookOpen></FaBookOpen></h2>
              {profile.about ? <h1 className='text-xl lg:text-2xl w-80 text-justify ml-2'>{profile.about}</h1>   : <h1 className='text-xl lg:text-2xl ml-2 text-yellow-500'> Write About Yourself</h1>} 
            </div>

            <div className='flex'>
            <h2 className='text-xl lg:text-2xl mt-1 text-yellow-500 lg:ml-0 ml-4'><FaHome></FaHome></h2>
            {profile.address ?  <h1 className='text-xl  lg:text-2xl w-96 ml-2'>{profile.address}</h1> : <h1 className='text-xl lg:text-2xl ml-2 text-yellow-500'>Update your Address</h1>}
                
            </div>
      
            <button className=' text-2xl mt-3 ml-7 lg:ml-16 underline lg:text-2xl text-yellow-500 '> <Link to='/dashboard/editProfile'>Edit your Profile</Link></button>
                </div>
               
            
             </div>
             
            
        </div>
    );
};

export default MyUpdatedProfile;