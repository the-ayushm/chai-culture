import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full bg-[#C9A227] opacity-10 blur-[80px]" />
      <div className="absolute -bottom-10 -right-10 w-96 h-96 rounded-full bg-[#C9A227] opacity-10 blur-[80px]" />

      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(201,162,39,0.03) 2px, rgba(201,162,39,0.03) 4px)",
        }}
      />
    </div>
  );
};

export default BackgroundEffects;