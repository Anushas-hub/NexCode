import React from "react";
import { motion } from "framer-motion";
import "./../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">

      {/* 🔥 BIG TITLE */}
      <motion.h1 
        className="main-title"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Build Faster with <span>Nexcode</span>
      </motion.h1>

      {/* 💡 SUBTITLE */}
      <motion.p 
        className="subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Elevate your workflow with a powerful coding platform
      </motion.p>

      {/* 🚀 CTA BUTTON */}
      <motion.button
        className="hero-btn"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        Explore Nexcode
      </motion.button>

    </section>
  );
}

export default Hero;  