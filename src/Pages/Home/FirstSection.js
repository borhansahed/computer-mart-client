import React from 'react';
import logo from '../../images/section4.jpg'
import './FirstSection.css'

const FirstSection = () => {
    return (
        <>
            <div className='lg:flex justify-center items-center gap-10 mt-12 lg:mt-32'>
                <div className=''>
                   <h1 className='text-5xl '>Experience with <br />Macbook <span className='text-yellow-300'>Pro</span></h1>
                   <p className='text-2xl mb-6'>The most powerful MacBook Pro ever is here. <br /> With the blazing-fast M1 Pro or M1 Max chip — <br /> the first Apple silicon designed for pros — <br /> you get groundbreaking performance and amazing battery life.</p>
                   <button   className='btn btn-outline btn-black text-xl '>Shop Now</button>
        <button className='btn btn-outline btn-warning text-xl ml-12'>See It All</button>
                </div>
                <div className='section '>
                    <img className='' src={logo} alt="" />
                </div>
            </div>

        </>
    );
};

export default FirstSection;