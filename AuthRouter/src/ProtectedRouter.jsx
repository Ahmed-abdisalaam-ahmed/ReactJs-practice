import React, { useContext } from 'react'
import { AuthContext } from './Authcontext'
import { Navigate } from 'react-router-dom';

const ProtectedRouter = ({element}) => {

    const {isAuthenticated} = useContext(AuthContext);
    console.log(isAuthenticated); 
    
    if(!isAuthenticated){
      return <Navigate to={"/login"}/>;
    }
    return  element;
}

export default ProtectedRouter