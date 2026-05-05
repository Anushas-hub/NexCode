import React, { useEffect } from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";
  const isNewUser = localStorage.getItem("isNewUser") === "true";

  const projects = JSON.parse(localStorage.getItem("projects")) || [];

  useEffect(() => {
    if (isNewUser) {
      localStorage.setItem("isNewUser", "false");
    }
  }, []);

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">

        {/* 🔥 TOP BAR (NO LOGO NOW) */}
        <div className="dashboard-navbar">
          <div></div>

          <div className="nav-right">
            <input type="text" placeholder="Search..." className="search" />

            <div className="profile">
              <div className="avatar">
                {username.charAt(0).toUpperCase()}
              </div>
              <span className="username">{username}</span>
            </div>
          </div>
        </div>

        {/* GREETING */}
        <h1>
          {isNewUser
            ? `Welcome, ${username} 🚀`
            : `Welcome back, ${username} 👋`}
        </h1>

        <p className="subtext">
          {isNewUser
            ? "Let’s get you started with your first project."
            : "Continue where you left off."}
        </p>

        {/* FIRST TIME USER */}
        {isNewUser ? (
          <div className="first-user-box">
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>🚀 Create First Project</h3>
                <p>Start building your first project now.</p>
                <button onClick={() => navigate("/editor")}>
                  Get Started
                </button>
              </div>

              <div className="dashboard-card">
                <h3>📺 Watch Guide</h3>
                <p>Quick walkthrough of Nexcode.</p>
                <button>Watch</button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="dashboard-grid">
              <div className="dashboard-card">
                <h3>🚀 New Project</h3>
                <button>Create</button>
              </div>

              <div className="dashboard-card">
                <h3>💻 Open Editor</h3>
                <button onClick={() => navigate("/editor")}>Open</button>
              </div>

              <div className="dashboard-card">
                <h3>📁 Projects</h3>
                <button>View</button>
              </div>
            </div>

            {projects.length > 0 ? (
              <div className="recent-section">
                <h2>Recent Projects</h2>
                <div className="recent-list">
                  {projects.map((proj, index) => (
                    <div key={index} className="recent-item">
                      {proj}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="empty-state">
                <p>No projects yet. Start building 🚀</p>
              </div>
            )}
          </>
        )}

      </div>
    </div>
  );
}

export default DashboardPage;