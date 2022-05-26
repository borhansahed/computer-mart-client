import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Register from './Register';
import auth from '../../Firebase-init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import useToken from '../../Hooks/UseToken';




const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
 
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
] = useSignInWithEmailAndPassword(auth);

const [token] = useToken(user || gUser);

useEffect(()=>{
if(token){
   
      navigate(from , {replace : true})
    
  }


},[token , from , navigate])

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {
   
    signInWithEmailAndPassword(data.email, data.password);
  }
  

  if(loading || gLoading){
    return <><div className="flex items-center justify-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div></>
  }
  return (
    <>
      <div className=" flex h-screen w-72  lg:w-1/4 mx-auto mt-12 lg:mt-20">



        <div className="card-body">

          <div className='mb-4 lg:mb-8 font-bold'>
            <h3 className=' text-3xl lg:text-4xl text-center text-yellow-400 '>LOGIN YOUR ACCOUNT</h3>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control">
              <label className="label">
                <span className="label-text  text-base lg:text-xl">Email</span>
              </label>
              <input className='input input-bordered' type="email" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />

            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base lg:text-xl">Password</span>
              </label>
              <input className="input input-bordered" type="text" placeholder="Password" {...register("password", { required: true, minLength: 6, maxLength: 12 })} />
            </div>

            <div className="form-control mt-6">
              <input className='btn text-white btn-warning text-base lg:text-xl' type="submit" />
            </div>
            <div className='text-center mt-3'>

              <Link className='lg:text-xl ' to="/login">Not a member ?</Link>
              <Link className='lg:text-xl ml-2 text-yellow-500 link' to="/register" >Register</Link>


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

export default Login;