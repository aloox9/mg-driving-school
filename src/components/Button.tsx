"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<any>) => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export default function Button({
  children,
  onClick,
  href,
  variant = "primary",
  className = "",
  id,
  type = "button",
  target,
  rel,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-display text-sm font-semibold tracking-wide rounded-full px-6 py-3 transition-all duration-160 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-dark";

  const variants = {
    primary:
      "bg-accent text-bg-dark hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(245,158,11,0.25)] border border-transparent",
    secondary:
      "border border-border-dark text-text-primary hover:bg-bg-card-hover hover:border-zinc-700",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-bg-card-hover",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    if (href.startsWith("http") || href.startsWith("tel:") || href.startsWith("https://wa.me/")) {
      return (
        <motion.a
          id={id}
          href={href}
          onClick={onClick}
          className={combinedStyles}
          whileTap={{ scale: 0.97 }}
          target={target}
          rel={rel}
        >
          {children}
        </motion.a>
      );
    }
    return (
      <motion.div whileTap={{ scale: 0.97 }} className="inline-flex">
        <Link id={id} href={href} onClick={onClick} className={combinedStyles} target={target} rel={rel}>
          {children}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      id={id}
      type={type}
      onClick={onClick}
      className={combinedStyles}
      whileTap={{ scale: 0.97 }}
    >
      {children}
    </motion.button>
  );
}
