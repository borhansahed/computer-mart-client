
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Navber from './Pages/Home/Navber';
import Purchase from './Pages/Purchase/Purchase';
import NotFound from './Pages/NotFound/NotFound';
import Register from './Pages/Login/Register';
import RequireAuth from './Pages/Login/RequireAuth'
import Dashboard from './Pages/Dashboard/Dashboard';
import AddReview from './Pages/Dashboard/AddReview';
import MyPortfolio from './Pages/Home/MyPortfolio';

function App() {
  return (

    <>
    <Navber></Navber>
    <Routes>
    <Route path='/' element={ <Home />}></Route>
    <Route path='/home' element={ <Home />}></Route>
    <Route path='/purchase' element={ <RequireAuth>
      <Purchase/>
    </RequireAuth>
  
  }></Route>
    <Route path='/addreview' element={ <RequireAuth>
     <AddReview/>
    </RequireAuth>
  
  }></Route>
  
    <Route path='/blogs' element={ <Blogs />}></Route>
    <Route path='/login' element={ <Login />}></Route>
    <Route path='/register' element={<Register/>}></Route>
    <Route path='/myprotfolio' element={ <MyPortfolio />}></Route>
    <Route path='/dashboard' element={<Dashboard/>}></Route>
   
    <Route path='*' element={ <NotFound/>}></Route>
    



    </Routes>
   
   
    
    </>
   
  );
}

export default App;
