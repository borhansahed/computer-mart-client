import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../Firebase-init';
import Loading from '../../Shared/Loading';
import MyOrders from './MyOrders';

const MyProfile = () => {
    const [user , loading] = useAuthState(auth);
   
   
    const[error , setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();


    if(loading){
        return <Loading></Loading>
       
    } 
    const handleProfile = event =>{
               event.preventDefault();
               const name = event.target.name.value;
               const address = event.target.address.value;
                const linkdin = event.target.linkurl.value;
                const facebook = event.target.fburl.value;
                const about = event.target.about.value;
                const picture = event.target.url.value;
                console.log(name , address , linkdin , facebook , about)



                const profile ={
                    email: user.email,
                    name,
                    about,
                   facebook,
                   linkdin,
                  facebook ,
                   picture,
                    
                   
                  
                 }
                 fetch('https://cryptic-retreat-01074.herokuapp.com/profile' , {
                     method: 'PUT',
                     headers:{
                         'content-type':'application/json'
                      
                     },
                     body: JSON.stringify(profile)
                 })
                 .then(res => res.json())
                 .then(data=>{
                      toast.success('Successfully Update your profile')
                      
                 })
                 
        }



    return (
        <div>
           

            <div>
            <div class="card lg:card-side bg-base-100 shadow-xl">
       <div>
      

 <h3 className=' text-2xl'>{user.displayName ? user.displayName : ''}</h3>
            <h3 className=' text-2xl'>{user.email ? user.email : 'Sorry'}</h3>

       </div>
  <div class="card-body">
  <form  onSubmit={handleProfile} className=" mx-auto w-60  lg:mx-0 lg:w-2/4">


<div className="form-control">
        <label className="label">
            <span className="label-text text-base lg:text-xl">Name</span>
        </label>
        <input className="input input-bordered" type="text" placeholder="name" {...register("name", { required: true, minLength: 3, maxLength: 10  })} />
       
    </div> 
     <div className="form-control">
        <label className="label">
            <span className="label-text text-base lg:text-xl">Address</span>
        </label>
        <input className="input input-bordered" type="text" placeholder="address" {...register("address", { required: true, minLength: 2, maxLength: 20  })} />
       
    </div>

    <div className="form-control ">
        <label className="label">
            <span className="label-text text-base lg:text-xl">Your Photo</span>
        </label>
        <input className="input input-bordered" type='url' placeholder="your photo url" {...register("url", { required: true, maxLength: 40 })} />
    </div>
    <div className="form-control ">
        <label className="label">
            <span className="label-text text-base lg:text-xl">Linkdin Profile</span>
        </label>
        <input className="input input-bordered" type='url' placeholder="linkdin profile url" {...register("linkurl", { required: true, maxLength: 40 })} />
    </div>
   
    <div className="form-control">
        <label className="label">
            <span className="label-text text-base lg:text-xl">Facebook Profile</span>
        </label>
        <input className="input input-bordered" type="url" placeholder="facebook profile url" {...register("fburl", { required: true, minLength: 1, maxLength: 40  })} />
       
    </div>
    <div className="form-control">
        <label className="label">
            <span className="label-text text-base lg:text-xl">About you</span>
        </label>
        <input className="input input-bordered" type="text" placeholder="tell about yourself " {...register("about", { required: true, minLength: 1, maxLength: 100  })} />
       
    </div>
   

    <div className="form-control mt-6">
        <input className='btn text-white btn-warning text-base lg:text-lg font-medium' type="submit" value="Edit Your profile" />
    </div>
  
</form>
  </div>
</div>
           
            </div>
            
        </div>
    );
};

export default MyProfile;