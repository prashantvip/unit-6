import React from "react";
import {NavLink} from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="container">
      <NavLink to="/">
        <h4>Table</h4>
      </NavLink>
      <NavLink to="/add-country">
        <h4>Add-Country</h4>
      </NavLink>
      <NavLink to="/add-city">
        <h4>Add-City</h4>
      </NavLink>
    </div>
  );
};

export default Navbar;
