import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase-init';

const MyProfile = () => {

    const [user] = useAuthState(auth);
    return (
        <div>
            <h3 className=' text-2xl'>{user.displayName ? user.displayName : 'Sorry'}</h3>
            <h3 className=' text-2xl'>{user.email ? user.email : 'Sorry'}</h3>
        </div>
    );
};

export default MyProfile;