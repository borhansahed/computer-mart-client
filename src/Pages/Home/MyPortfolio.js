import React from 'react';
import logo from '../../images/270057582_337723584596508_5168236632417086324_n-removebg-preview.png'

const MyPortfolio = () => {
    return (
        <div className='flex justify-center mt-20 mb-20'>
        <div>
            <div className='w-60 rounded-full mb-10'>
                 <img className='' src={logo} alt="" />
            </div>
           
           <div>
               <h3 className='text-xl'>Name</h3>
               <h3 className='text-3xl text-yellow-500'>Mohammad Borhan Uddin Sahed</h3>
             <p className='w-96 text-2xl'>Goal <br />
           <span className='text-yellow-500 text-xl'>
           My mission is learn web development properly! And try to learn more about programming.This is year my vision is learn complete web development with Jhankar Mahbub! I want to intern this year.And i want to Develop my skills. My goals is want to be world className programmer. I want to learn full stack development ! I want create many apps and websites! Inshaallah i can do it!</span></p>
               <h3 className='text-2xl'>Education</h3>
               
               <p className='text-xl text-yellow-500'>
                 <span className='text-xl text-black'> School 2016-2018</span> <br />  
                   Halishahar BegumJan High school </p>
               <p className='text-xl text-yellow-500'>
                 <span className='text-xl text-black'> College 2018-2019</span> <br />  
                  Chittagong City Corporation Commerce College </p>
               <p className='text-xl text-yellow-500'>
                 <span className='text-xl text-black'> College 2019-2020</span> <br />  
                   Barrister Sultan Ahamed University College </p>
               <p className='text-xl text-yellow-500'>
                 <span className='text-xl text-black'> University 2021-2022</span> <br />  
                   Islamia University , Chittagong </p>
         
               <p className='text-xl text-yellow-500'>
                 <span className='text-xl text-black'> Projects</span> <br />  
                 <a href="https://warehouse-25088.web.app/" target='_blank'> https://warehouse-25088.web.app/</a> <br />
                 <a href="https://wahi-dental-studio.web.app/" target='_blank'> https://wahi-dental-studio.web.app/</a> <br />
                 <a href="https://harmonious-kringle-27909d.netlify.app/" target='_blank'> https://harmonious-kringle-27909d.netlify.app/</a> <br />
               
                 
                   </p>
         
         
           </div>

        </div>
       
        </div>
    );
};

export default MyPortfolio;