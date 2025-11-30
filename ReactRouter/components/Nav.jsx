import React from "react";
import { NavLink } from "react-router";


const Nav = () => {
  return (
    <div className="p-4 bg-rose-500 text-white">
      <header className="flex justify-around">
        <h1 className="text-2xl font-bold">My App</h1>
        <nav className="space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-bold text-blue-400" : undefined
            }
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  text-amber-400" : undefined
            }
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  text-green-400" : undefined
            }
            to="/Context"
          >
            Context
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "font-bold  text-green-400" : undefined
            }
            to="/Users"
          >
            Users
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Nav;
