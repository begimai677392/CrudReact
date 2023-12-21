import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="add">ADD PRODUCT</NavLink>
      <NavLink to="product">PRODUCT</NavLink>
    </div>
  );
};

export default Navbar;
