
import React from 'react';

import logo from '../../images/homeSection1.jpg'
import logo1 from '../../images/homeSection2.jpg'
import '../Css/SecondSection.css'

const SecondSection = () => {
    return (
        <>
        <div className='section-container lg:mt-20  '>

          <div>
             <img className='' src={logo1} alt="" />
          </div>
          <div className=''>
            <h3 className='text-3xl lg:text-5xl text-center banner-caption-header font-bold'> Best Coding Monitor <br /><span className='text-4xl lg:text-6xl text-yellow-400 font-bold'>2022</span>  </h3>
            <p className='text-base lg:text-3xl banner-caption-body'> <span className='text-yellow-400 lg:text-4xl font-bold mr-3'>40% OFF</span>   We've tested over 230 monitors, and below you'll find our recommendations for the best coding monitors for many needs and budgets.</p>
          </div>

        </div>
       </>
    );
};

export default SecondSection;