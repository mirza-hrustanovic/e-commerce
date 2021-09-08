import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="left-side">
        <li>
          <NavLink exact to="/women">
            Women
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/men">
            Men
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sale">
            Sale
          </NavLink>
        </li>
      </ul>
      <ul className="center">
        <li>
          <NavLink exact to="/">
            COS
          </NavLink>
        </li>
      </ul>
      <ul className="right-side">
        <li>
          <NavLink exact to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/signIn">
            Sign In
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/cart">
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
