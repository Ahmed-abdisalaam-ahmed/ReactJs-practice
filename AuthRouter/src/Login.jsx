import React, { useContext } from 'react'
import { AuthContext } from './Authcontext';
import { Navigate, useNavigate } from 'react-router-dom';

const Login = () => {

    const {login , isAuthenticated} = useContext(AuthContext);
    const navigate = useNavigate();

    if(isAuthenticated){
      return <Navigate to={"/dashboard"} replace/>;
    }
    const handlelogin = () =>{
      login();
      navigate('/dashboard');
    }


  return (
    <div className='border p-4 w-40'>
      <h1 className='text-2xl pb-2'>Login page</h1>
      <button className='bg-green-400 cursor-pointer text-white p-2 rounded-lg transition' onClick={handlelogin}> Login
      </button>
    </div>
  )
}

export default Login