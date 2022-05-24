import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/section4.jpg'
import './FirstSection.css'

const FirstSection = () => {
    return (
        <>
            <div className='lg:flex justify-center items-center gap-10 mt-12 lg:mt-32   lg:px-0'>
                <div className='mb-10 px-20 lg:mb-0 lg:px-0'>
                   <h1 className=' text-3xl lg:text-5xl mb-3'>Experience with <br />Macbook <span className='text-yellow-300 font-bold'>Pro</span></h1>
                   <p className='text-xl  mb-2 lg:text-2xl lg:mb-5  leading-6 '>The most powerful MacBook Pro ever is here. <br /> With the blazing-fast M1 Pro or M1 Max chip — <br /> the first Apple silicon designed for pros — <br /> you get groundbreaking performance and amazing battery life.</p>
                  <div className='order-1'>
                  <Link to="/purchase"><button   className='btn btn-outline btn-black  lg:btn lg:btn-outline  btn-sm  lg:text-xl'>Shop Now</button></Link>
                  <Link to="/purchase"><button className='btn btn-outline btn-warning btn-sm lg:btn lg:btn-outline lg:text-xl ml-10'>See It All</button></Link>
      
                  </div>
                </div>
                <div className='section  px-20 lg:px-0'>
                    <img className='' src={logo} alt="" />
                </div>
            </div>

        </>
    );
};

export default FirstSection;