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
            <label tabindex="1" for="my-drawer-2" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
           
            </div>
          
            <div class="drawer drawer-mobile">


                
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content ">
        <h2 className='lg:text-4xl text-2xl  font-medium'>Welcome To Your <span className=' text-3xl lg:text-5xl text-yellow-500'>Dashboard</span> </h2>
            <Outlet></Outlet>
  
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content text-xl">
     
      <li><Link to="/dashboard">My Profile</Link></li>
    { admin ? <li><Link to="/dashboard/manageallorders">Manage All Orders</Link></li> : <li><Link to="/dashboard/myorder">My Orders</Link></li>}

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