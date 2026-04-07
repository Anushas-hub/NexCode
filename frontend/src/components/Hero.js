import React from "react";
import { motion } from "framer-motion";
import "./../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      <motion.h1 
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The best place for <span>&lt;PROGRAMMERS/&gt;</span> <br />
        to build front-end code
      </motion.h1>

      <p className="explore">Explore Nexcode →</p>

      <div className="hero-container">
        <div className="left">
          <p>✔ Build entire projects</p>
          <p>✔ Live collaboration</p>
          <p>✔ Syntax highlighting</p>
          <p>✔ Customizable editor</p>
        </div>

        <motion.div 
          className="right"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <img src="https://via.placeholder.com/500x300" alt="editor" />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;