import React from "react";
import "./../styles/DashboardNav.css";
import {
  Search,
  PanelLeftClose,
  Rows3
} from "lucide-react";

function DashboardNav({ username }) {
  return (
    <div className="dashboard-nav">

      {/* LEFT */}
      <div className="nav-left">
        <span className="nav-item">File</span>
        <span className="nav-item">Edit</span>
        <span className="nav-item">Run</span>
        <span className="nav-item">Terminal</span>
      </div>

      {/* CENTER */}
      <div className="nav-center">

        <div className="dashboard-search">
          <Search size={14} className="search-icon" />

          <input
            type="text"
            placeholder="Search files, projects..."
            className="search-input"
          />
        </div>

      </div>

      {/* RIGHT */}
      <div className="nav-right">

        <div className="toggle-btn active-toggle">
          <PanelLeftClose size={16} />
        </div>

        <div className="toggle-btn">
          <Rows3 size={16} />
        </div>

        {/* PROFILE */}
        <div className="nav-profile">
          {username ? username.charAt(0).toUpperCase() : "U"}
        </div>

      </div>

    </div>
  )
}

export default DashboardNav;