import React from "react";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.header
      className="text-center py-6 mb-12"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
    >
      <motion.svg
        className="w-12 h-3 mx-auto mb-3"
        viewBox="0 0 100 20"
        fill="none"
        stroke="#C9A227"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      >
        <path d="M0 10 Q 25 0, 50 10 T 100 10" strokeWidth="1" />
      </motion.svg>

      <motion.h1
        className="font-heading text-[2.25rem] md:text-5xl tracking-[0.25em] text-[#C9A227] uppercase"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Royal{" "}
        <span className="text-[rgba(255,245,225,0.4)] align-middle">×</span>{" "}
        Chai
      </motion.h1>

      <motion.p
        className="mt-2 text-[0.75rem] tracking-[0.3em] uppercase text-[rgba(255,245,225,0.7)]"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
      >
        Est. 2025
      </motion.p>

      <motion.svg
        className="w-12 h-3 mx-auto mt-3"
        viewBox="0 0 100 20"
        fill="none"
        stroke="#C9A227"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.35 }}
      >
        <path d="M0 10 Q 25 20, 50 10 T 100 10" strokeWidth="1" />
      </motion.svg>
    </motion.header>
  );
};

export default Logo;