import React from "react";
import "./../styles/Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className="sidebar">
      <h2 className="logo">NexCode</h2>

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