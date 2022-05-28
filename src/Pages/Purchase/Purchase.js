import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import auth from '../../Firebase-init';
import UseProducts from '../../Hooks/UseProducts';
import '../Css/Products.css'
import Footer from '../Home/Footer';
import BookingModal from './BookingModal';
import BookingProduct from './BookingProduct';
import {  toast } from 'react-toastify';
import Loading from '../../Shared/Loading';



const Purchase = () => {
    const navigate = useNavigate();
    const [user , loading] = useAuthState(auth)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { id } = useParams();
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://cryptic-retreat-01074.herokuapp.com/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [product])

    if(loading){

        return <Loading></Loading>
    }
    
    const {name , price , picture , description , AvailableQuantity , MinimumOrderQuantity , _id }= product;
    const handleOrder = event =>{
        event.preventDefault();
        const quantity = event.target.quantity.value;
        if(MinimumOrderQuantity > quantity){
            return toast.error('Pls select your quantity minimunOrderQuantity or above');
        }
        if(AvailableQuantity < quantity){
            return toast.error("Pls select your quantity below AvailableQuantity");
        }
       const booking ={

          productId: _id ,
          product:name,
          price: quantity * price,
          picture,
          quantity ,
          customer:user.email,
          customerName:user.displayName,
          phone: event.target.number.value
           
        
       }
       fetch('https://cryptic-retreat-01074.herokuapp.com/booking' , {
           method: 'POST',
           headers:{
               'content-type':'application/json'
            
           },
           body: JSON.stringify(booking)
       })
       .then(res => res.json())
       .then(data=>{
            toast.success('thanks for order')
            
       })
       
       navigate('/home')
      
    } 


    return (
        <div className='mt-8 lg:mt-16 '>
            <div className='lg:text-4xl text-center text-yellow-400'>
              
            <h1>{user.displayName}</h1>
            <h1>{user.email}</h1>
          
            </div>

            <div className=' flex flex-wrap justify-center gap-x-32 lg:gap-y-16 gap-y-10 lg:mt-12 mt-8 mb-16'>

                <div className='products-container flex flex-col lg:flex-row lg:gap-x-20 gap-y-7'>
                    <div className="card w-72  products-cards lg:w-96 bg-base-100">
                        <figure><img src={picture} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-xl lg:text-3xl">{name}</h2>
                            <h2 className='text-base lg:text-xl '>{description}</h2>

                            <p className=' text-base lg:text-2xl mb-0 '> <span className=''>AvailableQuantity : </span>{AvailableQuantity}</p>
                            <p className=' text-base lg:text-2xl mb-0 mt-0'> <span className=''>MinimumOrderQuantity : </span>{MinimumOrderQuantity}</p>
                            <p className=' text-2xl lg:text-4xl font-bold  mt-0 mt-2 lg:mt-0'> <span className=''>$</span>{price}</p>

                        </div>
                    </div>
                    <div>
                        <form onSubmit={handleOrder} className='w-72'>

                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Your Name</span>
                                </label>
                                <input className="input input-bordered" type="text" value={user.displayName} placeholder="Your name" disabled {...register("your name", { required: true, maxLength: 10 })} />
                            </div>
                           
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Email</span>
                                </label>
                                <input className='input input-bordered' type="email" disabled value={user.email} placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Equipment</span>
                                </label>
                                <input className="input input-bordered" type="text" value={name} disabled placeholder="Name" {...register("equipment", { required: true, maxLength: 10 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Quantity</span>
                                </label>
                                <input className="input input-bordered" type="text" placeholder="Quantity" {...register("quantity", { required: true, minLength: 30, maxLength: 500 })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Price</span>
                                </label>
                                <input className="input input-bordered" type="text" value={price} placeholder="Quantity" disabled {...register("price", { required: true, minLength: 30, maxLength: 500 })} />
                            </div>
                            <div className="form-control mb-4">
                                <label className="label">
                                    <span className="label-text text-base lg:text-xl">Mobile Number</span>
                                </label>
                                <input className="input input-bordered" type="tel" placeholder="Mobile number" {...register("number", { minLength: 6, maxLength: 12 })} />
                            </div>

                            <div className="form-control mt-6">
                                <input  className=" text-white lg:text-white  btn  btn-warning btn-sm lg:btn lg:btn-warning  lg:text-xl   w-full mt-2 lg:mt-0" type="submit" value='ORDER' />
                            </div>

                        </form>
                    </div>

                </div>



            </div>

            <Footer></Footer>
        </div>
    );
};

export default Purchase;