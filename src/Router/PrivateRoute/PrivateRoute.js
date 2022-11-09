import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthContextProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        <progress className="progress text-center w-56"></progress>
    }
    if(user){ 
        return children;
    }
    return <Navigate state={{from: location}} replace></Navigate>
}; 

export default PrivateRoute;