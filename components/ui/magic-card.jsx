import React from "react";

export function MagicCard({ children, gradientColor = "#D9D9D955", className = "" }) {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden p-[2px] ${className}`}
      style={{
        background: `linear-gradient(135deg, ${gradientColor}, #8a2be2 80%)`,
        boxShadow: "0 4px 32px 0 rgba(60, 60, 180, 0.15)",
      }}
    >
      <div
        className="rounded-2xl bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md w-full h-full"
      >
        {children}
      </div>
    </div>
  );
} 