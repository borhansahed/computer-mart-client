import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const navigate = useNavigate();
    const[error , setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    const handleAddReview = (event) =>{
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
         const picture = event.target.url.value;
         const MinimumOrderQuantity = event.target.minimumOrderQuantity.value;
         const AvailableQuantity = event.target.availableQuantity.value;
         const description = event.target.description.value;

        //   if(   AvailableQuantity > !MinimumOrderQuantity){
        //       return toast.error('Select MinimumQuantity is lower than AvailableQuantity');
        //   }

         console.log(name , price , picture , AvailableQuantity , MinimumOrderQuantity ,description)
         const products ={

           name,
           description,
           AvailableQuantity,
           MinimumOrderQuantity,
           price ,
          picture,
           
          
         
        }
        fetch('https://cryptic-retreat-01074.herokuapp.com/product' , {
            method: 'POST',
            headers:{
                'content-type':'application/json'
             
            },
            body: JSON.stringify(products)
        })
        .then(res => res.json())
        .then(data=>{
             toast.success('Successfully Add Your Product')
             
        })
        
       navigate('/home')
       
      
 

   }
       
    return (
        <>
        <div>
            <div className='mx-36 lg:mx-0'>
            <h2 className='text-2xl text-yellow-500 mt-3 mb-3 '>Add Your Product</h2>
            </div>

            <form  onSubmit={handleAddReview} className=" mx-auto w-60  lg:mx-0 lg:w-2/4">


            <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Product name</span>
                    </label>
                    <input className="input input-bordered" type="text" placeholder="name" {...register("name", { required: true, minLength: 3, maxLength: 10  })} />
                   
                </div> <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Description</span>
                    </label>
                    <input className="input input-bordered" type="text" placeholder="description" {...register("description", { required: true, minLength: 10, maxLength: 165  })} />
                   
                </div> <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Price</span>
                    </label>
                    <input className="input input-bordered" type="tel" placeholder="price" {...register("price", { required: true, minLength: 2, maxLength: 3  })} />
                   
                </div>

                <div className="form-control ">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">Photo Url</span>
                    </label>
                    <input className="input input-bordered" type='url' placeholder="Photo url" {...register("url", { required: true, maxLength: 80 })} />
                </div>
               
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">AvailableQuantity</span>
                    </label>
                    <input className="input input-bordered" type="tel" placeholder="availableQuantity" {...register("availableQuantity", { required: true, minLength: 1, maxLength: 3  })} />
                   
                </div>
                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text text-base lg:text-xl">MinimumOrderQuantity</span>
                    </label>
                    <input className="input input-bordered" type="tel" placeholder="minimumOrderQuantity" {...register("minimumOrderQuantity", { required: true, minLength: 1, maxLength:3 })} />
                    {error && <span className='text-red-500 text-xl'>{error}</span>}
                </div>

                <div className="form-control mt-6">
                    <input className='btn text-white btn-warning text-base lg:text-lg font-medium' type="submit" value="Add Your Product" />
                </div>
              
            </form>
        </div>


        
        </>
    );
};

export default AddProduct;