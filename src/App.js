
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Blogs from './Pages/Home/Blogs';
import Login from './Pages/Login/Login';
import Navber from './Pages/Home/Navber';
import Purchase from './Pages/Purchase/Purchase';

function App() {
  return (

    <>
    <Navber></Navber>
    <Routes>
    <Route path='/' element={ <Home />}></Route>
    <Route path='/purchase' element={ <Purchase/>}></Route>
  
    <Route path='/blogs' element={ <Blogs />}></Route>
    <Route path='/login' element={ <Login />}></Route>
    



    </Routes>
   
   
    
    </>
   
  );
}

export default App;
