
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Navber from './Pages/Home/Navber';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth'
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import MyProfile from './Pages/Dashboard/MyProfile';
import MyOrders from './Pages/Dashboard/MyOrders';
import User from './Pages/Dashboard/Admin/User';
import ManageAllOrders from './Pages/Dashboard/Admin/ManageAllOrders';
import AddProduct from './Pages/Dashboard/Admin/AddProduct';
import ManageProducts from './Pages/Dashboard/Admin/ManageProducts';
import Payment from './Pages/Dashboard/Payment';
import About from './Pages/Home/About';
import MyUpdatedProfile from './Pages/Dashboard/MyUpdatedProfile';
import Inventory from './Pages/Inventory/Inventory';
import AdminDashboard from './Pages/Dashboard/Admin/AdminDashboard';

function App() {
  return (

    <>
    <Navber></Navber>
    <Routes>
    <Route path='/' element={ <Home />}></Route>
    <Route path='/home' element={ <Home />}></Route>
    <Route path='/inventory' element={ <RequireAuth>
       <Inventory />
    </RequireAuth>
   }>  </Route>
   

    <Route path='/purchase/:id' element={ <RequireAuth>
      <Purchase/>
    </RequireAuth>
  
  }></Route>
    
    <Route path='dashboard' element={ <RequireAuth>
    <Dashboard/>
    </RequireAuth>
  
  }>
    <Route index element={<MyUpdatedProfile></MyUpdatedProfile>}>
    </Route>
    <Route path="myorder" element={<MyOrders></MyOrders>}></Route>
    <Route path="addreview" element={<AddReview/>}></Route>
    <Route path="payment/:id" element={<Payment/>}></Route>
    <Route path="users" element={<User/>}></Route>
    <Route path="manageallorders" element={<ManageAllOrders/>}></Route>
    <Route path="addproduct" element={<AddProduct/>}></Route>
    <Route path="manageproducts" element={<ManageProducts/>}></Route>
    <Route path='editProfile' element={<MyProfile></MyProfile>}></Route>
  </Route>
  
    <Route path='/blogs' element={ <Blogs />}></Route>
    <Route path='/login' element={ <Login />}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/about'element={<About></About>}></Route>
    
   
    <Route path='*' element={ <NotFound/>}></Route>
    



    </Routes>
   
   
    <ToastContainer />
    </>
   
  );
}

export default App;
