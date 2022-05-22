import React from 'react';
import { Link } from 'react-router-dom';
import './Navber.css'

const Navber = () => {
  const menu = <>

     <li><Link to='/'>Home</Link></li>
    <li ><Link to='/purchase'>Purchase</Link></li>
    <li ><Link to='/blogs'>Blogs</Link></li>
    <li ><Link to='/My Protfolio'>My Portfolio</Link></li>
    <li ><Link to='/login'>Login</Link></li>


  </>


  return (
    <>
      <div class="navbar lg:px-20  mt-5">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 w-52 ">
              {menu}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case ml-20 lg:ml-28 text-3xl  lg:text-5xl text-yellow-400">Computer Mart</Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal lg:pr-28 lg:text-xl ">
            {menu}
          </ul>
        </div>
        <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <img src="https://api.lorem.space/image/face?hash=33791" />
        </div>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>

      </div>
    </>
  );
};

export default Navber;