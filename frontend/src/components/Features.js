import React from "react";
import "./../styles/Features.css";

function Features() {
  return (
    <section className="features" id="features">
      <h2>Platform Highlights</h2>

      <div className="cards">

        <div className="card">
          <img src="/Code Editor.jpeg" alt="Code Editor" />
        </div>

        <div className="card">
          <img src="/Collab.png" alt="Collaboration" />
        </div>

        <div className="card">
          <img src="/FastExecution.jpeg" alt="Fast Execution" />
        </div>

        <div className="card">
          <img src="/Customizable.jpeg" alt="Customizable" />
        </div>

      </div>
    </section>
  );
}

export default Features;