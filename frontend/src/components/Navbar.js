import React from "react";
import "./../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="logo">
        <img src="/logo.jpeg" alt="Nexcode Logo" />
        <span>Nexcode</span>
      </Link>
     
      <ul className="nav-links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="buttons">
        <button className="login">Log In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;