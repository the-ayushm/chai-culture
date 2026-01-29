import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="text-center max-w-3xl mx-auto mb-24">
      <motion.h2
        className="font-heading text-4xl md:text-6xl leading-tight mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        Brew the Royal
        <span className="relative block mt-4 text-[#C9A227]">
          Tradition
          <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-24 h-px bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />
        </span>
      </motion.h2>

      <motion.svg
        className="w-40 h-40 md:w-44 md:h-44 mx-auto my-12"
        viewBox="0 0 100 100"
        fill="none"
        stroke="#C9A227"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
      >
        <path d="M35 15 Q 35 10, 38 8" strokeWidth="1.5" opacity="0.6" />
        <path d="M45 12 Q 45 7, 48 5" strokeWidth="1.5" opacity="0.6" />
        <path d="M55 15 Q 55 10, 58 8" strokeWidth="1.5" opacity="0.6" />
        <path
          d="M 30 35 L 25 70 Q 25 75, 30 75 L 60 75 Q 65 75, 65 70 L 60 35"
          strokeWidth="2"
        />
        <line
          x1="28"
          y1="45"
          x2="62"
          y2="45"
          strokeWidth="1"
          opacity="0.8"
        />
        <line
          x1="27"
          y1="50"
          x2="63"
          y2="50"
          strokeWidth="1"
          opacity="0.8"
        />
        <path
          d="M 65 45 Q 75 50, 75 60 Q 75 65, 68 65"
          strokeWidth="2"
        />
        <path
          d="M 32 40 L 28 65 Q 28 70, 32 70 L 58 70 Q 62 70, 62 65 L 58 40 Z"
          fill="#C9A227"
          opacity="0.3"
        />
      </motion.svg>

      <motion.p
        className="text-[1.15rem] md:text-xl leading-relaxed text-[rgba(255,245,225,0.9)] mb-3"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
      >
        A premium instant chai premix inspired by the royal kitchens of India.
      </motion.p>

      <motion.p
        className="text-base md:text-lg text-[rgba(201,162,39,0.8)] italic"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
      >
        Rich aroma, authentic spices, effortless indulgence.
      </motion.p>
    </section>
  );
};

export default Hero;