"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  delay?: number;
  revealMode?: "scroll" | "static";
};

export function Section({
  id,
  children,
  className = "",
  contentClassName = "",
  delay = 0,
  revealMode = "scroll"
}: SectionProps) {
  const prefersReducedMotion = useReducedMotion();
  const initialMotion =
    prefersReducedMotion || revealMode === "static"
      ? false
      : { opacity: 0, y: 34, filter: "blur(12px)" };
  const revealMotion =
    prefersReducedMotion || revealMode === "static"
      ? undefined
      : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.section
      id={id}
      className={`scroll-mt-28 py-[var(--section-space)] ${className}`.trim()}
      initial={initialMotion}
      whileInView={revealMode === "scroll" ? revealMotion : undefined}
      viewport={revealMode === "scroll" ? { once: true, amount: 0.18 } : undefined}
      transition={{
        duration: 0.82,
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      <div className={`page-shell ${contentClassName}`.trim()}>{children}</div>
    </motion.section>
  );
}
