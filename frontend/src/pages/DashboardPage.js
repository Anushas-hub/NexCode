import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/Dashboard.css";

function DashboardPage() {
  const username = "User"; // 🔥 later connect backend

  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Welcome back, {username} 👋</h1>

        <div className="dashboard-card">
          <h3>Start Coding 🚀</h3>
          <p>Create your first project or open the editor.</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;