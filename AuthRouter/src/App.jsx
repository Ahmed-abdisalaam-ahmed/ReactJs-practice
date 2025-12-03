import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/login"}>Login</Link>
        <Link to={"/dashboard"}>Dashboard</Link>
      </nav>
      <h1>Protected pages</h1>
      <Outlet />
    </div>
  );
};

export default App;
