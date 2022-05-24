import React from 'react';
import { Link } from 'react-router-dom';
import { RiComputerLine} from "@react-icons/all-files/ri/RiComputerLine";
import './Navber.css'


const Navber = () => {
  const user = false;
  const menu = <>

     <li><Link to='/'>Home</Link></li>
    <li ><Link to='/purchase'>Purchase</Link></li>
    {user && <li ><Link to='/dashboard'>Dashboard</Link></li>}
    <li ><Link to='/blogs'>Blogs</Link></li>
    <li ><Link to='/My Protfolio'>My Portfolio</Link></li>
    {user || <li ><Link to='/login'>Login</Link></li>}


  </>


  return (
    <>
      <div class="navbar lg:px-20  mt-5">
        <div class="navbar-start">
          <div class="dropdown ">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 w-52 shadow bg-base-100 rounded-box ">
              {menu}
            </ul>
          </div>
          <Link to="/" class="btn btn-ghost normal-case  lg:ml-28 text-4xl  lg:text-6xl font-bold text-yellow-400">Computer Mart <small className='text-xs lg:text-xl'><RiComputerLine></RiComputerLine></small> </Link>
        </div>
        <div class="navbar-end hidden lg:flex">
          <ul class="menu menu-horizontal lg:pr-28 lg:text-xl ">
            {menu}
          </ul>
        </div>
       {user &&  <div class="dropdown dropdown-end ml-36 lg:ml-0 lg:mr-20">
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
        
        <li><a>Logout</a></li>
      </ul>
    </div>}

      </div>
    </>
  );
};

export default Navber;