import React from "react";
import "./../styles/About.css";

function About() {
  return (
<section className="about" id="about">
          <h2>About Nexcode</h2>

      <p className="about-desc">
        Nexcode is a modern web-based code editor built to simplify development workflows. 
        Designed with performance, collaboration, and scalability in mind, it empowers developers 
        to write, test, and deploy code efficiently.
      </p>

      <div className="about-cards">

        <div className="about-card">
          <h3>Technologies</h3>
          <p>
            Built using React.js for frontend, Django for backend, and SQLite for database 
            management, ensuring speed, reliability, and seamless integration.
          </p>
        </div>

        <div className="about-card">
          <h3>Security</h3>
          <p>
            Nexcode follows secure coding practices with protected APIs, authentication systems, 
            and data handling to ensure user safety and privacy.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Team</h3>
          <p>
            Developed by two passionate engineers, Nexcode represents innovation, collaboration, 
            and a shared vision to build powerful developer tools.
          </p>
        </div>

      </div>
    </section>
  );
}

export default About;