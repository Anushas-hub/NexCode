import React from "react";
import { motion } from "framer-motion";
import "./../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* 🔥 NEW MAIN TITLE */}
      <motion.h1 
        className="main-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Build Faster with <span>Nexcode</span>
      </motion.h1>

      {/* 💡 SUBTITLE */}
      <p className="subtitle">
        Elevate your workflow. Code smarter. Ship faster.
      </p>


      <p className="explore">Explore Nexcode →</p>

      <div className="hero-container">
        <div className="left">
          <p>✔ Build entire projects</p>
          <p>✔ Live collaboration</p>
          <p>✔ Syntax highlighting</p>
          <p>✔ Customizable editor</p>
        </div>

        {/* ❌ FIXED IMAGE ISSUE */}
        <motion.div 
          className="right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="/editor.png" alt="editor" />
        </motion.div>
      </div>

    </section>
  );
}

export default Hero;