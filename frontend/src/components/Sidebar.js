import React from "react";
import "./../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">

      {/* 🔥 LOGO WITH ICON */}
      <div className="sidebar-logo" onClick={() => navigate("/")}>
        <img src="/logo.jpeg" alt="logo" />
        <span>Nexcode</span>
      </div>

      <div className="menu">
        <div onClick={() => navigate("/dashboard")}>🏠 Dashboard</div>
        <div onClick={() => navigate("/editor")}>💻 Editor</div>
        <div>📁 Projects</div>
        <div>⚙️ Settings</div>
      </div>
    </div>
  );
}

export default Sidebar;