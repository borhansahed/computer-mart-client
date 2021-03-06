import React from 'react';
import logo from '../../images/banner7.jpg'
import logo1 from '../../images/banner2.jpg'
import logo4 from '../../images/banner02.jpg'
import './Banner.css'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <>
   <div
  id="carouselDarkVariant"
  className="carousel slide carousel-fade carousel-dark relative"
  data-bs-ride="carousel"
>
 
  <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="1"
      aria-label="Slide 1"
    ></button>
    <button
      data-bs-target="#carouselDarkVariant"
      data-bs-slide-to="2"
      aria-label="Slide 1"
    ></button>
  </div>

 
  <div className="carousel-inner relative w-full overflow-hidden">
   
    <div className="carousel-item active relative float-left w-full">
      <img
        src={logo1}
        className="block w-full "
        alt="Motorbike Smoke"
      />
     <div className="carousel-caption hidden md:block absolute text-center mb-60 ">
        <h5 className="text-7xl mb-5 ">Up to <span className='text-yellow-500  font-bold'>15%</span> Off All<br /> Our Products </h5>
        <Link to="/purchase"><button   className='btn btn-outline btn-black  lg:text-xl  text-xs '>Shop Now</button></Link>
        <Link to="/purchase"><button className='btn btn-outline btn-warning text-xs lg:text-xl  ml-12'>See It All</button></Link>
       
      </div>
    </div>

   
    <div className="carousel-item relative float-left w-full">
      <img
        src={logo}
        className="block w-full"
        alt="Mountaintop"
      />
      <div className="carousel-caption hidden md:block absolute text-center mb-40 ">
        <h5 className="text-7xl mb-5 text-white  "><span className='text-yellow-500  text-8xl font-bold'>5% Off</span><br />For Everyday</h5>
        <Link to="/purchase"><button   className='btn btn-outline btn-black  lg:text-xl  text-xs '>Shop Now</button></Link>
        <Link to="/purchase"><button className='btn btn-outline btn-warning text-xs lg:text-xl  ml-12'>See It All</button></Link>
       
      </div>
    </div>

    
    <div className="carousel-item relative float-left w-full">
      <img
        src={logo4}
        className="block w-full "
        alt="Woman Reading a Book"
      />
      <div className="carousel-caption hidden md:block absolute text-center mb-60 mr-96 pr-60 ">
        <h5 className="text-7xl mb-4 text-white ">Beautiful <br /> <span className='text-yellow-400 font-bold'>moments</span> for you</h5>
        <Link to="/purchase"><button   className='btn btn-outline   lg:text-xl  text-xs '>Shop Now</button></Link>
        <Link to="/purchase"><button className='btn btn-outline btn-warning text-xs lg:text-xl  ml-12'>See It All</button></Link>
       
      </div>
    </div>
  </div>
  
  <button
    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselDarkVariant"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </>
      
    );
};

export default Banner;