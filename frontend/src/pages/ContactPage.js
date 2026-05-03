import React from "react";
import "./../styles/Contact.css";

function Contact() {
  return (
    <section className="contact">

      {/* HERO */}
      <div className="contact-hero">
        <h1>
          Get in <span>Touch</span>
        </h1>
        <p>
          Have an idea, feedback, or question? We'd love to hear from you.
        </p>
      </div>

      {/* MAIN WRAPPER */}
      <div className="contact-container">

        {/* FORM */}
        <form className="contact-form">
          <h3>Send a Message</h3>

          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* SIDE INFO */}
        <div className="contact-info">
          <h3>Contact Info</h3>

          <p>📧 nexcode.team@gmail.com</p>
          <p>🌍 India</p>
          <p>⏱ Reply within 24 hours</p>

          <div className="contact-note">
            We usually respond quickly. Your feedback helps us improve Nexcode.
          </div>
        </div>

      </div>

    </section>
  );
}

export default Contact;