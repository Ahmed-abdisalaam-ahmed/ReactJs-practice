import React, { useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "./Authcontext";

const App = () => {

const {isAuthenticated , logout} = useContext(AuthContext);
 const navigate = useNavigate();
const handleLogout = () =>{
  logout();
  navigate('/');
}

  return (
    <div className="p-4 space-x-2">
      <nav className="mb-4 space-x-4">
        <Link to={"/"} className="border p-2 bg-rose-200">Home</Link>
        <Link to={"/login"}className="border p-2 bg-blue-200">Login</Link>
        <Link to={"/courses"}className="border p-2 bg-blue-200">Course</Link>
        

        {
          isAuthenticated &&
          <>
            <Link to={"/dashboard"} className="border p-2 bg-yellow-200">Dashboard</Link>
            <Link to={"/Courses"} className="border p-2 bg-yellow-200">Courses</Link>
            <button className="bg-red-600 text-white border p-2 cursor-pointer" onClick={handleLogout}> Logout</button>
          </>
        }
       
      </nav>
      <h1>Protected pages</h1>
      <Outlet />
    </div>
  );
};

export default App;
