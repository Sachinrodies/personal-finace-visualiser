"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

const RainbowButton = React.forwardRef(({ className, variant = "default", children, ...props }, ref) => {
  if (variant === "outline") {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
          className
        )}
        {...props}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-white px-6 py-2 text-sm font-medium text-slate-900 backdrop-blur-3xl">
          {children}
        </span>
      </button>
    );
  }

  return (
    <button
      ref={ref}
      className={cn(
        "relative inline-flex h-10 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50",
        className
      )}
      {...props}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#ff0000_0%,#ff8000_16.666%,#ffff00_33.333%,#00ff00_50%,#0080ff_66.666%,#8000ff_83.333%,#ff0080_100%)]" />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-md bg-slate-950 px-6 py-2 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";

export { RainbowButton }; 