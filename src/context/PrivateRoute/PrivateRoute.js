import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { loading, user } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        return <div>loading, please wait...!</div>
    }
    else if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate >
};

export default PrivateRoute; 