import React from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="p-4 space-x-2">
      <nav className="mb-4 space-x-4">
        <Link to={"/"} className="border p-2 bg-rose-200">Home</Link>
        <Link to={"/login"}className="border p-2 bg-blue-200">Login</Link>
        <Link to={"/dashboard"}className="border p-2 bg-yellow-200">Dashboard</Link>
      </nav>
      <h1>Protected pages</h1>
      <Outlet />
    </div>
  );
};

export default App;
