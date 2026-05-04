import React from "react";

function Footer() {
  return (
    <footer
      style={{
        padding: "35px 20px",
        background: "#020617",
        color: "white",
        textAlign: "center",
        marginTop: "-10px", // 🔥 THIS FIXES FINAL GAP
      }}
    >
      <h2
        style={{
          color: "#C1FF00",
          marginBottom: "10px",
          fontSize: "24px",
          fontWeight: "700",
        }}
      >
        Nexcode
      </h2>

      <p
        style={{
          color: "#9ca3af",
          marginBottom: "18px",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        Crafted for developers who build the future.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "18px",
          fontSize: "14px",
          fontWeight: "500",
          color: "#d1d5db",
          flexWrap: "wrap",
        }}
      >
        <span>⚡ Fast</span>
        <span>🤝 Collaborative</span>
        <span>🧠 Smart</span>
        <span>🚀 Scalable</span>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "12px",
          fontSize: "13px",
          color: "#9ca3af",
        }}
      >
        © 2026 Nexcode — Built with precision & passion.
      </div>
    </footer>
  );
}

export default Footer;