import React from "react";
import BackgroundEffects from "./components/BackgroundEffects";
import Logo from "./components/Logo";
import Hero from "./components/Hero";
import Countdown from "./components/Countdown";
import EmailSignup from "./components/EmailSignup";
import SocialIcons from "./components/SocialIcons";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#2B1B17] text-[#FFF5E1] overflow-x-hidden font-body">
      <BackgroundEffects />

      <div className="fixed inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-30" />
      <div className="fixed inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#C9A227] to-transparent z-30" />

      <motion.main
        className="relative z-10 py-12 md:py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <Logo />
          <Hero />
          <Countdown />
          <EmailSignup />
          <SocialIcons />
        </div>
      </motion.main>

      <Footer />
    </div>
  );
};

export default App;