import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import DashboardNav from "../components/DashboardNav";
import { useNavigate } from "react-router-dom";
import "./../styles/Dashboard.css";

function DashboardPage() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("username");

    if (!storedName) {
      navigate("/login");
    } else {
      setUsername(storedName);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN */}
      <div className="dashboard-main-content">

        {/* NAVBAR */}
        <DashboardNav username={username} />

        {/* HEADER */}
        <header className="dash-header">

          <div className="welcome-text">
            <h1>
              Welcome back,{" "}
              <span className="user-highlight">
                {username}
              </span>{" "}
              👋
            </h1>

            <p className="subtext">
              Ready to continue building amazing things?
            </p>
          </div>

          <div className="header-controls">
            <button
              className="logout-btn"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

        </header>

        {/* CONTENT */}
        <div className="dashboard-content">

          <div className="stats-row">

            <div className="glass-card activity-card">
              <h3>Recent Activity</h3>

              <div className="chart-mock"></div>
            </div>

            <div className="glass-card health-card">
              <h3>System Status</h3>

              <div className="status-indicator">
                <span className="dot"></span>
                All systems operational
              </div>
            </div>

          </div>

          {/* PROJECTS */}
          <section className="recent-projects">

            <h2>Your Projects</h2>

            <div className="empty-project-placeholder">

              <p>
                No projects yet. Start your journey 🚀
              </p>

              <button className="outline-btn">
                Open Editor
              </button>

            </div>

          </section>

        </div>

      </div>

    </div>
  );
}

export default DashboardPage;