import React from "react";
import "./../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate(); // ✅ yahan likhna hota hai (function ke andar)

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <Link to="/" className="logo">
        <img src="/logo.jpeg" alt="Nexcode Logo" />
        <span>Nexcode</span>
      </Link>
     
      {/* NAV LINKS */}
      <ul className="nav-links">
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
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