import React from 'react';
import logo from '../../images/footer1.jpg'
import './Footer.css'
import { HiDesktopComputer } from "@react-icons/all-files/hi/HiDesktopComputer";
import { HiOutlineMail } from "@react-icons/all-files/hi/HiOutlineMail";
import { HiOutlinePhone } from "@react-icons/all-files/hi/HiOutlinePhone";
import { GoClock } from "@react-icons/all-files/go/GoClock";
import {FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import {FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import {FaTwitter } from "@react-icons/all-files/fa/FaTwitter";

import { IoLogoFacebook } from "@react-icons/all-files/io/IoLogoFacebook";




const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${logo})` }} className=' mt-20 text-white   '>
            <div>
                <h1 className='text-3xl lg:text-4xl text-center  pt-20'>Join <span className='text-yellow-500'> To</span>  Newsletter</h1>
                <p className='text-base lg:text-xl text-center mt-5 '>By adding these at the beginning of your emails you will sound more friendly and social.</p>
                <div className='flex justify-center mt-8 lg:mt-14 '>
                    <input className='lg:w-2/6 lg:p-2 p-1 text-xl' type="email" name="email" placeholder='Your email address' id="" />
                    <input type="submit" className="bg-yellow-500 px-3 lg:px-10 text-xl" />
                </div>
            </div>
            <div className='mt-20   lg:flex lg:gap-36  lg:justify-center lg:items-center footer-section'>
                <div className='mb-4 lg:mb-0 lg:mt-10'>
                    <h3 className='text-2xl lg:text-3xl mb-1 lg:mb-3  '>Computer <HiDesktopComputer className='inline mr-2 text-xl' /></h3>
                    <p className='text-base lg:text-xl '>This is Computer Mart Choose your Product <br />
                        And stay with us
                        Trusted Computer Retail Store<br /> And Warehouse In the World.</p>
                  <div className='mt-3 social-media text-2xl lg:text-3xl '>
                  <IoLogoFacebook className='inline '/>
                    <FaInstagram className='inline ml-3 '/>
                    <FaTwitter className='inline ml-3 '/>
                    <FaYoutube className='inline ml-3 '/>
                  </div>
                </div>
                <div className='mb-4 lg:mb-0'>
                    <h4 className='text-2xl lg:text-3xl  mb-1 lg:mb-3 lg:mt-8'>Product</h4>
                    <div className='text-base lg:text-xl'>
                        <p>About App</p>
                        <p>Features</p>
                        <p>Technology</p>
                        <p>Store</p>
                        <p>Help and support</p>
                    </div>
                </div>
                <div className='mb-4 lg:mb-0'>
                    <h1 className=' mb-1 lg:mb-3 text-2xl lg:text-3xl '>Contact Details</h1>

                    <div className='
               text-base lg:text-xl'>
                        <p><GoClock className='inline mr-2' />Mon - Sat 8.00 - 18.00</p>
                        <p><GoClock className='inline mr-2' />Sunday CLOSED</p>
                        <p><HiOutlineMail className='inline mr-2' />sahed30@gmail.com</p>
                        <p><HiOutlinePhone className='inline mr-2 ' />+844 123 456 78</p>
                    </div>

                </div>

                <div className=' mb-1 lg:mb-3 text-2xl lg:text-3xl'>
                    <h3>Social</h3>
                    <div className='text-base lg:text-xl'>
                        <p>Twitter</p>
                        <p>Instagram</p>
                        <p>Facebook</p>
                        <p>Youtube</p>
                    </div>
                </div>
            </div>
            <p className='text-center  mt-7 copy-rights'>Copyright  2000-2022  by  <a href='#' className='text-yellow-400'>Computer Mart</a>  .  All Rights Reserved.</p>
        </div>
    );
};

export default Footer;