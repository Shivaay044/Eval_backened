import React from "react";
import {NavLink} from "react-router-dom"
import "../Style/Navbar.css"

function Navbar() {
  return <div className="navbar-main">
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/register">Regsiter</NavLink>
  </div>;
}

export default Navbar;
