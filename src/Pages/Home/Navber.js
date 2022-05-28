import React from 'react';
import { Link } from 'react-router-dom';
import { RiComputerLine} from "@react-icons/all-files/ri/RiComputerLine";
import './Navber.css'

import auth from '../../Firebase-init';

import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../../Shared/Loading';



const Navber = () => {
 const [user , loading] =useAuthState(auth)
 
 if(loading){
   return <Loading></Loading>
 }

 const handleLogout = () =>{
  signOut(auth);
  localStorage.removeItem('accessToken');
}
 
 
// if(loading){
//   return <><div className="flex items-center justify-center">
//   <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
//     <span className="visually-hidden">Loading...</span>
//   </div>
// </div></>
// }
  // const menu = <>

  //    <li><Link to='/'>Home</Link></li>
  //   <li ><Link to='/purchase'>Purchase</Link></li>
  
  //   <li ><Link to='/blogs'>Blogs</Link></li>
  //   <li ><Link to='/My Protfolio'>My Portfolio</Link></li>
   


  // </>;

// console.log(menu)
  return (
    <>
      <div className="navbar lg:px-20  mt-5">
        <div className="navbar-start">
          <div className="dropdown ">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 w-52 shadow bg-base-100 rounded-box ">
           
              <li><Link to='/'>Home</Link></li>
             
             {user && <li ><Link to='/dashboard'>Dashboard</Link></li>}
             <li ><Link to='/blogs'>Blogs</Link></li>
             <li ><Link to='/myprotfolio'>My Portfolio</Link></li>
             {!user && <li ><Link to='/login'>Login</Link></li>}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case  lg:ml-28 text-4xl  lg:text-6xl font-bold text-yellow-400">Computer Mart <small className='text-xs lg:text-xl'><RiComputerLine></RiComputerLine></small> </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal lg:pr-28 lg:text-xl ">
          <li><Link to='/'>Home</Link></li>
         
         {user && <li ><Link to='/dashboard'>Dashboard</Link></li>}
        
          <li ><Link to='/blogs'>Blogs</Link></li>
          <li ><Link to='/myprotfolio'>My Portfolio</Link></li> 
          {!user && <li ><Link to='/login'>Login</Link></li>}
       </ul>
        </div>
       {user &&  <div className="dropdown dropdown-end ml-28 lg:ml-0 lg:mr-48">
      <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={user.photoURL} />
          
        </div>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between text-base lg:text-xl">
           {user.email}
            
          </a>
        </li>
        
        <button className='btn btn-outline w-14 lg:w-20 ml-2 lg:ml-3 btn-warning  btn-xs lg:btn-sm  text-base' onClick={handleLogout}>SignOut</button>
      </ul>
    </div> }

      </div>
 
          
        
    </>
  );
};

export default Navber;