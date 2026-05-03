import React from "react";
import "./../styles/Download.css";

function DownloadPage() {
  return (
    <div className="download-page">

      {/* HERO SECTION */}
      <section className="download-hero">
        <h1>Download Nexcode</h1>
        <p>
          A powerful, fast and collaborative development environment
          built for modern developers.
        </p>

        <button className="download-btn">
          Download for All Platforms
        </button>
      </section>

      {/* PREVIEW IMAGE */}
      <section className="preview">
        <img src="/NCdownload(1).png" alt="Editor Preview" />
      </section>

      {/* WHAT'S DIFFERENT */}
      <section className="different">
        <h2>What’s Different?</h2>

        <div className="different-cards">

          <div className="different-card">
            <h3>📊 Smart Dashboard</h3>
            <p>
              Manage your projects, track progress, and access recent
              work instantly from a powerful built-in dashboard.
            </p>
          </div>

          <div className="different-card">
            <h3>🤖 Built-in Download Agent</h3>
            <p>
              Nexcode comes with an integrated guidance agent —
              a smart assistant that helps you set up, configure,
              and optimize your development environment.
            </p>
          </div>

          <div className="different-card">
            <h3>🌐 Browser Storage</h3>
            <p>
              Your files are securely stored directly in your browser,
              allowing quick access and seamless continuation
              without unnecessary complexity.
            </p>
          </div>

          <div className="different-card">
            <h3>⚡ Performance Optimized</h3>
            <p>
              Built with speed in mind — minimal load times,
              responsive UI, and smooth performance even on
              large-scale projects.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default DownloadPage;