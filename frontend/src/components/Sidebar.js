import React from "react";
import "./../styles/Sidebar.css";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, Code2, Folder, Settings } from "lucide-react";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "nav-item active" : "nav-item";

  return (
    <div className="sidebar">

      {/* BRAND */}
      <div className="brand-box" onClick={() => navigate("/")}>
        <img src="/logo.jpeg" alt="logo" className="brand-img" />
      </div>

      {/* NAV */}
      <div className="nav-menu">
        <div className={isActive("/dashboard")} onClick={() => navigate("/dashboard")}>
          <Home size={20} />
        </div>

        <div className={isActive("/editor")} onClick={() => navigate("/editor")}>
          <Code2 size={20} />
        </div>

        <div className="nav-item">
          <Folder size={20} />
        </div>

        <div className="nav-item">
          <Settings size={20} />
        </div>
      </div>

    </div>
  );
}

export default Sidebar;