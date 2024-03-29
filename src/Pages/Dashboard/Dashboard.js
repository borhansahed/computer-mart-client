import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import UseAdmin from '../../Hooks/UseAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase-init'


const Dashboard = () => {
  const [user] = useAuthState(auth)

  const [admin]=UseAdmin(user)


  
    return (
        <div className='lg:px-40 lg:mt-14'>

            <div className='navbar-start pl-2'>
            <label tabIndex="1" htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
           
            </div>
          
            <div className="drawer drawer-mobile">


                
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
        {/* <h2 className='lg:text-4xl text-2xl  font-medium hidden lg:block'>Welcome To Your <span className=' text-3xl lg:text-5xl text-yellow-500'>Dashboard</span> </h2> */}
            <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-40 lg:w-80 bg-base-100 text-base-content text-base lg:text-xl">
     
      <li><Link to="/dashboard">My Profile</Link></li>
    { admin ? <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li> : <li><Link to="/dashboard/myorder">My Orders</Link></li>}

    {/* <li><Link to="/dashboard">My profile</Link></li> */}

    { admin ? <li><Link to="/dashboard/addproduct">Add a Product</Link></li> : <li><Link to="/dashboard/addreview">Add a Review</Link></li>}

    { admin && <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>}

      { admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
     
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboard;