"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  direction = "up",
}: AnimatedSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const offsets = {
    up: 24,
    down: -24,
    left: 24,
    right: -24,
    none: 0,
  };

  const getInitialPosition = () => {
    if (shouldReduceMotion || direction === "none") return { opacity: 0 };
    
    if (direction === "up" || direction === "down") {
      return { opacity: 0, y: offsets[direction] };
    }
    return { opacity: 0, x: offsets[direction] };
  };

  const getTargetPosition = () => {
    if (shouldReduceMotion || direction === "none") return { opacity: 1 };
    
    if (direction === "up" || direction === "down") {
      return { opacity: 1, y: 0 };
    }
    return { opacity: 1, x: 0 };
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={getTargetPosition()}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.16, 1, 0.3, 1], // Custom strong ease-out
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
