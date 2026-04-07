import React from "react";
import { FaCode, FaBolt, FaUsers, FaCogs } from "react-icons/fa";
import "./../styles/Features.css";

function Features() {
  return (
    <section className="features">
      <h2>Features</h2>

      <div className="cards">
        <div className="card">
          <FaCode />
          <h3>Code Editor</h3>
          <p>Powerful in-browser coding</p>
        </div>

        <div className="card">
          <FaUsers />
          <h3>Collaboration</h3>
          <p>Work with your team live</p>
        </div>

        <div className="card">
          <FaBolt />
          <h3>Fast Execution</h3>
          <p>Instant preview & run</p>
        </div>

        <div className="card">
          <FaCogs />
          <h3>Customizable</h3>
          <p>Adjust your workflow</p>
        </div>
      </div>
    </section>
  );
}

export default Features;