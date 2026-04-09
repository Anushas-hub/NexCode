import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function SignupNavbar() {
  return (
    <nav className="navbar">
      
      <Link to="/" className="logo">
        <img src="/logo.jpeg" alt="Nexcode Logo" />
        <span>Nexcode</span>
      </Link>

    </nav>
  );
}

export default SignupNavbar;