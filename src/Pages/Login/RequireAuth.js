import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase-init';

const RequireAuth = ({children}) => {

const [user , loading] = useAuthState(auth);
const location = useLocation();

if(!user){
    return <Navigate to="/login" state = {{from: location}} replace ></Navigate>
}
if(loading){
    return <><div className="flex items-center justify-center">
    <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div></>
}

    return children;
};

export default RequireAuth;