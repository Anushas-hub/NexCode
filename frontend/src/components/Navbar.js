import React from "react";
import "./../styles/Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <NavLink to="/" className="logo">
        <img src="/logo.jpeg" alt="Nexcode Logo" />
        <span>Nexcode</span>
      </NavLink>
     
      {/* NAV LINKS */}
      <ul className="nav-links">

        <li>
          <NavLink 
            to="/download" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Download
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>

        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? "active-link" : ""}
          >
            Contact
          </NavLink>
        </li>

      </ul>

      {/* BUTTONS */}
      <div className="buttons">
        <button className="login" onClick={() => navigate("/login")}>
          Log In
        </button>

        <button className="signup" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>

    </nav>
  );
}

export default Navbar;