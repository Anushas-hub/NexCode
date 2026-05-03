import React from "react";
import "./../styles/Download.css";

function DownloadPage() {
  return (
    <div className="download-page">

      {/* HERO SECTION */}
      <section className="download-hero">
        <h1>Download Nexcode</h1>
        <p>
          A powerful, fast and collaborative code editor built for modern developers.
        </p>

        <button className="download-btn">
          Download for All Platforms
        </button>
      </section>

      {/* PREVIEW IMAGE */}
      <section className="preview">
        <img src="/Code Editor.jpeg" alt="Editor Preview" />
      </section>

      {/* WHY NEXCODE */}
      <section className="why">
        <h2>Why Nexcode?</h2>

        <div className="why-cards">
          <div className="why-card">
            ⚡ Blazing Fast Performance
          </div>

          <div className="why-card">
            🤝 Real-time Collaboration
          </div>

          <div className="why-card">
            🎨 Fully Customizable UI
          </div>
        </div>
      </section>

    </div>
  );
}

export default DownloadPage;