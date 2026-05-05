import React from "react";
import Sidebar from "../components/Sidebar";
import "./../styles/Dashboard.css";

function EditorPage() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Editor</h1>

        <div className="dashboard-card">
          <p>Editor coming soon 🔥</p>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;