import React from "react";
import "./../styles/Contact.css";

function Contact() {
  return (
<section className="contact" id="contact">
        <h2>Contact Us</h2>

      <p className="contact-desc">
        Have questions or want to collaborate? Reach out to us.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;