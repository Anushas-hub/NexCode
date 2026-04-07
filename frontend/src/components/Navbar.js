import React from "react";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      
      <div className="logo">
        <img src="/logo.jpeg" alt="Nexcode Logo" />
        <span>Nexcode</span>
      </div>
     
      <ul className="nav-links">
        <li>Features</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

      <div className="buttons">
        <button className="login">Sign In</button>
        <button className="signup">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;