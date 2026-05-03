import React from "react";
import "./../styles/About.css";

function About() {
  return (
    <section className="about">

      {/* HERO */}
      <div className="about-hero">
        <h1>
          About <span>Nexcode</span>
        </h1>
        <p>
          Nexcode is designed to redefine how developers write, test, and collaborate on code —
          combining performance, simplicity, and intelligent workflows into one seamless experience.
        </p>
      </div>

      {/* FEATURES GRID */}
      <div className="about-grid">

        <div className="about-box">
          <h3>⚡ Blazing Fast</h3>
          <p>
            Optimized architecture ensures smooth performance even in large-scale projects.
          </p>
        </div>

        <div className="about-box">
          <h3>🧠 Developer Focused</h3>
          <p>
            Clean UI and minimal distractions so you can stay focused on building great software.
          </p>
        </div>

        <div className="about-box">
          <h3>🔐 Secure</h3>
          <p>
            Built with secure APIs, authentication layers, and data protection practices.
          </p>
        </div>

        <div className="about-box">
          <h3>🤝 Collaboration</h3>
          <p>
            Real-time teamwork features to build faster and smarter together.
          </p>
        </div>

      </div>

      {/* EXTRA SECTION (NEW 🔥) */}
      <div className="about-highlight">
        <h2>Why Nexcode?</h2>
        <p>
          Because developers deserve tools that feel fast, intuitive, and powerful —
          without unnecessary complexity.
        </p>
      </div>

    </section>
  );
}

export default About;