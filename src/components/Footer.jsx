import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="relative z-10 border-t border-[rgba(201,162,39,0.2)] py-8 text-center text-[0.85rem] text-[rgba(255,245,225,0.6)]"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 1.6 }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <p>© 2025 Royal Chai. All rights reserved. Crafted with tradition.</p>
      </div>
    </motion.footer>
  );
};

export default Footer;