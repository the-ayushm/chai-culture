import React from "react";
import { motion } from "framer-motion";

const EmailSignup = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for joining the Royal Circle! 👑");
    e.target.reset();
  };

  return (
    <motion.section
      className="max-w-xl mx-auto mb-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.2 }}
    >
      <h3 className="font-heading text-2xl md:text-3xl text-center mb-4">
        Join the Royal Circle
      </h3>

      <p className="text-center text-[rgba(255,245,225,0.7)] mb-8 text-sm md:text-base">
        Be the first to experience authentic royal indulgence.
        <br />
        Exclusive early access awaits.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row gap-3 mb-4"
      >
        <input
          type="email"
          required
          placeholder="Enter your royal email"
          className="flex-1 px-6 py-4 bg-[rgba(43,27,23,0.5)] border-2 border-[rgba(201,162,39,0.3)] rounded-lg text-[#FFF5E1] text-sm md:text-base font-body placeholder:text-[rgba(255,245,225,0.4)] outline-none transition-all focus:border-[#C9A227] focus:shadow-[0_0_0_3px_rgba(201,162,39,0.2)]"
        />
        <button
          type="submit"
          className="px-8 py-4 rounded-lg bg-gradient-to-r from-[#C9A227] to-[rgba(201,162,39,0.8)] text-[#2B1B17] font-body font-semibold text-sm md:text-base cursor-pointer transition-all hover:shadow-[0_4px_20px_rgba(201,162,39,0.5)] hover:-translate-y-[2px]"
        >
          Notify Me →
        </button>
      </form>

      <p className="text-center text-[rgba(255,245,225,0.5)] text-[0.75rem]">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </motion.section>
  );
};

export default EmailSignup;