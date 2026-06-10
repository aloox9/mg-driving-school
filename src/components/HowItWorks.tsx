"use client";

import React, { useState, useEffect, useRef } from "react";
import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoCycle = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 4000); // Cycles every 4 seconds
  };

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleStepInteract = (index: number) => {
    setActiveStep(index);
    // Reset the interval timer so it stays on the selected step for a full 4 seconds
    startAutoCycle();
  };

  const steps = [
    {
      num: "01",
      title: "Register & Pick Package",
      description: "Select Manual or Automatic training. Secure your slot in seconds via WhatsApp or our call center.",
    },
    {
      num: "02",
      title: "Practice & Refine",
      description: "Work 1-on-1 with certified instructors. Schedule hours at your convenience and learn on local streets.",
    },
    {
      num: "03",
      title: "Pass the Test",
      description: "Take our realistic mock driving exam, enter the official test with confidence, and secure your license.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-[65ch] mb-20">
          <AnimatedSection direction="up">
            <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
              3-Step Roadmap
            </span>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Your Journey to a Driving License
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.2}>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              We have streamlined the training and licensing process into three simple stages so you can focus on building correct habits without bureaucratic stress.
            </p>
          </AnimatedSection>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Subtle horizontal timeline connector line for desktop */}
          <div className="hidden md:block absolute top-[48px] left-[16.66%] right-[16.66%] h-[2px] bg-zinc-800 z-0" />

          {/* Animated Car on Timeline for Desktop */}
          <motion.div
            className="hidden md:block absolute top-[36px] z-20 pointer-events-none"
            animate={{
              left: activeStep === 0 ? "calc(16.66% - 15px)" : activeStep === 1 ? "calc(50% - 15px)" : "calc(83.33% - 15px)",
              y: [0, -2, 0], // Subtle bounce when driving
            }}
            transition={{
              left: {
                type: "spring",
                stiffness: 90,
                damping: 12,
              },
              y: {
                type: "tween",
                duration: 0.4,
                ease: "easeInOut",
              }
            }}
          >
            <svg
              width="30"
              height="18"
              viewBox="0 0 30 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_8px_rgba(245,158,11,0.4)]"
            >
              {/* Car Cabin/Windows */}
              <path
                d="M9 7L11.5 2.5H19L21.5 7"
                stroke="#f59e0b"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Car Body */}
              <path
                d="M2.5 9.5C2.5 9.5 5 8 9 8H21C25 8 27.5 9.5 27.5 9.5C28.5 10 28.8 11 28.5 12L27.5 14C27 15 26 15 25 15H5C4 15 3 15 2.5 14L1.5 12C1.2 11 2 10 2.5 9.5Z"
                fill="#f59e0b"
              />
              {/* Wheels */}
              <circle
                cx="7"
                cy="14.5"
                r="3.5"
                fill="#09090b"
                stroke="#f59e0b"
                strokeWidth="1.8"
              />
              <circle
                cx="22"
                cy="14.5"
                r="3.5"
                fill="#09090b"
                stroke="#f59e0b"
                strokeWidth="1.8"
              />
              {/* Monogram L sign on top */}
              <rect
                x="14"
                y="0.5"
                width="4"
                height="4"
                fill="#ef4444"
                rx="0.5"
              />
              <path
                d="M15 1.5V3H16.5"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>

          {steps.map((step, index) => (
            <AnimatedSection
              key={step.num}
              direction="up"
              delay={index * 0.1}
              className="relative flex flex-col items-start z-10 cursor-pointer select-none group"
            >
              <div 
                className="w-full"
                onMouseEnter={() => handleStepInteract(index)}
                onClick={() => handleStepInteract(index)}
              >
                {/* Numeric indicator with premium border glow on hover */}
                <div 
                  className={`w-16 h-16 rounded-2xl border flex items-center justify-center font-display text-2xl font-bold shadow-lg transition-all duration-300 mb-8 z-10 relative ${
                    activeStep === index 
                      ? "border-accent bg-accent-muted text-accent shadow-[0_0_20px_rgba(245,158,11,0.2)] scale-105" 
                      : "border-zinc-800 bg-bg-card text-text-secondary group-hover:border-zinc-700"
                  }`}
                >
                  {step.num}
                </div>
                <h3 className={`font-display text-lg font-bold mb-3 transition-colors duration-300 ${
                  activeStep === index ? "text-accent" : "text-text-primary"
                }`}>
                  {step.title}
                </h3>
                <p className="font-sans text-sm text-text-secondary leading-relaxed max-w-[32ch]">
                  {step.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
