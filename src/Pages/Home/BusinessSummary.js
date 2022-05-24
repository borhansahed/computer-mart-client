import React from 'react';
import CountUp from 'react-countup';
import {GrGroup } from "@react-icons/all-files/gr/GrGroup";
import {GrFlag } from "@react-icons/all-files/gr/GrFlag";
import {VscFeedback } from "@react-icons/all-files/vsc/VscFeedback";
import {AiOutlineFundProjectionScreen } from "@react-icons/all-files/ai/AiOutlineFundProjectionScreen";



const BusinessSummary = () => {
    return (

        <>
        <div>
           <div className='text-center mt-14'>
           <h4 className='text-4xl lg:text-6xl text-yellow-500 font-bold'>MILLONS BUSINESS TRUST US</h4>
            <p className='text-xl lg:text-3xl'>TRY TO UNDERSTAND USERS EXPECTION</p>
           </div>
           <div className='flex flex-col items-center gap-6 mt-10  lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-52 lg:mt-20' >
               <div >
                    <GrFlag className='text-2xl ml-2 mb-3 lg:text-4xl lg:mb-6 lg:ml-3'/>
                   <p className='text-3xl ml-3 lg:text-5xl lg:ml-4 font-bold'>
                    <CountUp  end={72} duration="5" /> 
                   </p>
                   <p className=' text-xl lg:text-2xl text-yellow-500'>Countries</p>
               

               </div>
               <div>
               <AiOutlineFundProjectionScreen className='text-2xl ml-12 mb-3 lg:text-4xl lg:mb-6 lg:ml-10'/>
                   <p className='font-bold text-3xl ml-10 lg:text-5xl text-bold lg:ml-9'>   <CountUp  end={535} duration="5" /><span className='text-4xl'>+</span></p>
                   <p className='text-2xl text-yellow-500'>Compelete Projects</p>
                 

               </div>
               <div>
               <GrGroup className='text-2xl ml-7 mb-3 lg:text-4xl lg:mb-6 lg:ml-5'/>
               <p className='font-bold text-3xl ml-6 lg:text-5xl lg:ml-4'>   <CountUp  end={273} duration="5" /><span className='text-4xl'>+</span></p>
               <p className='text-2xl text-yellow-500'>Happy Clients</p>
               </div>
               <div className=''>
               <VscFeedback className= ' text-2xl ml-5 mb-3 lg:text-4xl lg:mb-6 lg:ml-3'/>
               <p className='text-3xl ml-3 lg:ml-1 lg:text-5xl font-bold' >   <CountUp  end={432} duration="5" /><span className='text-2xl lg:text-4xl'>+</span></p>
               <p className='text-2xl text-yellow-500'>Feedback</p>
               </div>
          
           </div>
                </div>
        </>
        
    );
};

export default BusinessSummary;