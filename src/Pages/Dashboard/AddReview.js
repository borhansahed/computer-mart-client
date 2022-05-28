import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddReview = () => {
    const navigate = useNavigate();
    const[error , setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();


    const handleAddReview = (event) =>{
         event.preventDefault();
         const review = event.target.review.value;
         const ratings = event.target.rating.value;
          const picture = event.target.url.value;
          console.log(review , ratings , picture)
          const reviews ={

            review, 
            ratings,
           picture,
            
           
          
         }
         fetch('http://localhost:5000/review' , {
             method: 'POST',
             headers:{
                 'content-type':'application/json'
              
             },
             body: JSON.stringify(reviews)
         })
         .then(res => res.json())
         .then(data=>{
              toast.success('Thanks for your Review')
              
         })
         
        navigate('/home')
        
       
  

    }
    return (
        <div>
            <h1>add your review</h1>

            <form  onSubmit={handleAddReview} className="w-2/4">

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Photo Url</span>
                    </label>
                    <input className="input input-bordered" type='url' placeholder="Photo url" {...register("url", { required: true, maxLength: 80 })} />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Your Review</span>
                    </label>
                    <input className="input input-bordered" type="text" placeholder="Your review" {...register("review", { required: true, minLength: 10, maxLength: 165 , message: 'pls inter' })} />
                   
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Rating</span>
                    </label>
                    <input className="input input-bordered" type="tel" placeholder="Rating" {...register("rating", { required: true, minLength: 1, maxLength:5 })} />
                    {error && <span className='text-red-500 text-xl'>{error}</span>}
                </div>

                <div className="form-control mt-6">
                    <input className='btn text-white btn-warning text-base lg:text-lg font-medium' type="submit" value="Add Your Review" />
                </div>
              
            </form>
        </div>
    );
};

export default AddReview;