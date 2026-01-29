import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

const createTargetDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 60);
  return d;
};

const getTimeDiff = (target) => {
  const now = new Date();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  return { days, hours, minutes, seconds };
};

const Countdown = () => {
  const targetDate = useMemo(() => createTargetDate(), []);
  const [timeLeft, setTimeLeft] = useState(() => getTimeDiff(targetDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getTimeDiff(targetDate));
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const format = (value) => String(value).padStart(2, "0");

  const timeBlocks = [
    { label: "Days", value: format(timeLeft.days) },
    { label: "Hours", value: format(timeLeft.hours) },
    { label: "Minutes", value: format(timeLeft.minutes) },
    { label: "Seconds", value: format(timeLeft.seconds) },
  ];

  return (
    <motion.section
      className="max-w-3xl mx-auto mb-24 text-center"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
    >
      <motion.div
        className="inline-block px-6 py-2 mb-12 rounded-full border border-[rgba(201,162,39,0.3)] text-[#C9A227] text-[0.78rem] tracking-[0.2em] uppercase bg-gradient-to-r from-[rgba(201,162,39,0.1)] to-[rgba(201,162,39,0.05)]"
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        ✦ Launching Soon ✦
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-6">
        {timeBlocks.map((block, idx) => (
          <motion.div
            key={block.label}
            className="text-center"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: 1.1 + idx * 0.08,
            }}
          >
            <div className="bg-[#2B1B17] border-2 border-[rgba(201,162,39,0.3)] rounded-lg px-6 py-6 md:px-8 md:py-7 transition-all hover:border-[rgba(201,162,39,0.5)] hover:shadow-[0_0_20px_rgba(201,162,39,0.3)]">
              <div className="font-heading text-3xl md:text-4xl text-[#C9A227]">
                {block.value}
              </div>
            </div>
            <div className="mt-3 text-[0.75rem] md:text-[0.8rem] uppercase tracking-[0.18em] text-[rgba(255,245,225,0.7)]">
              {block.label}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.p
        className="text-[0.85rem] text-[rgba(255,245,225,0.6)] italic"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 1.4 }}
      >
        The wait will be worth every sip
      </motion.p>
    </motion.section>
  );
};

export default Countdown;