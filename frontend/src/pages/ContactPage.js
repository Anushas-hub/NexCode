import React from "react";

function ContactPage() {
  return (
    <div style={{ padding: "80px", background: "#020617", color: "white" }}>
      <h1>Contact Us</h1>

      <input placeholder="Name" /><br /><br />
      <input placeholder="Email" /><br /><br />
      <textarea placeholder="Message"></textarea><br /><br />

      <button>Send</button>
    </div>
  );
}

export default ContactPage;