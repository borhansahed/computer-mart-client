import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../Firebase-init';
import Loading from '../../Shared/Loading';

const RequireAuth = ({children}) => {

const [user , loading] = useAuthState(auth);
const location = useLocation();

if(!user){
    return <Navigate to="/login" state = {{from: location}} replace ></Navigate>
}
if(loading){
    return <Loading></Loading>
}

    return children;
};

export default RequireAuth;