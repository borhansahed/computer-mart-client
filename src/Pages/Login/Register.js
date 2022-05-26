import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../Firebase-init';
import useToken from '../../Hooks/UseToken';

const Register = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    
 const { register, handleSubmit, formState: { errors } } = useForm();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [token] = useToken(user || gUser);

    if(token){
        navigate('/home')  ;
    }

      if(user || gUser){
      
      }
      if (loading || gLoading ) {
        return <><div className="flex items-center justify-center">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div></>
    }

    

   

    const onSubmit = async data =>{
        await createUserWithEmailAndPassword(data.email, data.password);
       
      
    } 
   
    return (
        <>
           
            <div className=" flex w-72  lg:w-1/4 mx-auto mt-10 lg:mt-20">

 

                <div className="card-body">

               <div className='mb-4 lg:mb-9 font-bold'>
                <h3 className=' text-3xl lg:text-4xl text-center text-yellow-400 '>REGISTER YOUR ACCOUNT</h3>
            </div>

                   <form   onSubmit={handleSubmit(onSubmit)}>

                   <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base lg:text-xl">First Name</span>
                        </label>
                         <input className="input input-bordered" type="text" placeholder="First name" {...register("First name", { required: true, maxLength: 80 })} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base lg:text-xl">Email</span>
                        </label>
                        <input className='input input-bordered' type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                        
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-base lg:text-xl">Password</span>
                        </label>
                         <input className="input input-bordered" type="text" placeholder="Password" {...register("password", { required: true, minLength: 6, maxLength: 12})} />
                    </div>
                    <div className="form-control mb-4">
                        <label className="label">
                            <span className="label-text text-base lg:text-xl">Mobile Number</span>
                        </label>
                        <input  className="input input-bordered" type="tel" placeholder="Mobile number" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
                    </div>
                  
                    <div className="form-control mt-6">
                    <input className='btn text-white btn-warning text-base lg:text-lg' type="submit" />
                    </div>
                    <div className='text-center mt-3'>
                       
                       <Link className='lg:text-xl ' to="/login">Already have an account ?</Link>
                                <Link className='lg:text-xl ml-3 text-yellow-500 link' to="/login" >Login</Link>
    
                            
                       </div>
                   </form>
                   <div className="divider">OR</div>
                    <button 
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline btn-warning btn-md text-base lg:btn lg:btn-outline lg:text-xl"
                    >Continue with Google</button>
                </div>
            </div>

        </>
    );
};

export default Register;