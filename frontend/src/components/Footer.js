import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "60px 20px",
        background: "#020617",
        color: "white",
        textAlign: "center",
      }}
    >
      {/* 🔥 Brand Name */}
      <h2
        style={{
          color: "#C1FF00",
          marginBottom: "12px",
          fontSize: "28px",
          fontWeight: "700",
        }}
      >
        Nexcode
      </h2>

      {/* 🔥 Tagline */}
      <p
        style={{
          color: "#9ca3af",
          marginBottom: "25px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        Crafted for developers who build the future.
      </p>

      {/* 🔥 Feature Tags */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "30px",
          marginBottom: "25px",
          fontSize: "16px",
          fontWeight: "600",
          color: "#d1d5db",
          flexWrap: "wrap",
        }}
      >
        <span>⚡ Fast</span>
        <span>🤝 Collaborative</span>
        <span>🧠 Smart</span>
        <span>🚀 Scalable</span>
      </div>

      {/* 🔥 Bottom Line */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.1)",
          paddingTop: "18px",
          fontSize: "15px",
          fontWeight: "600",
          color: "#9ca3af",
        }}
      >
        © 2026 Nexcode — Built with precision & passion.
      </div>
    </footer>
  );
}

export default Footer;