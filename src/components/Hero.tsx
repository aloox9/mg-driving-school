"use client";

import React from "react";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import heroCar from "../../public/images/hero-car.png";

const basePath = "/mg-driving-school";

export default function Hero() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // 3D Card tilt motion values
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);

  // Smooth springs for fluid motion (Emil philosophy)
  const springX = useSpring(tiltX, { stiffness: 120, damping: 18 });
  const springY = useSpring(tiltY, { stiffness: 120, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Calculate mouse position relative to center of the card (-0.5 to 0.5)
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;
    
    // Map to maximum tilt degrees
    tiltX.set(mouseX * 12); // tilt horizontally up to 12 degrees
    tiltY.set(mouseY * -12); // tilt vertically up to 12 degrees (inverted for natural feel)
  };

  const handleMouseLeave = () => {
    // Reset back to center smoothly
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-20 pb-12 overflow-hidden bg-bg-dark">
      {/* Decorative background road texture or grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f1f23_1px,transparent_1px),linear-gradient(to_bottom,#1f1f23_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto w-full px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Left Column: Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <AnimatedSection direction="up" delay={0.1}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-bg-card text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-6">
              Mohammad Ghaddar School
            </span>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.2}>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] text-text-primary mb-6">
              Master the Road with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-amber-500">
                Saida&apos;s Elite School
              </span>
            </h1>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.3}>
            <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-[55ch] mb-8">
              Professional manual & automatic driving lessons in Saida, tailored to get you licensed safely, quickly, and with absolute confidence.
            </p>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={0.4}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <Button
                href="#contact"
                variant="primary"
                onClick={(e) => handleScrollToSection(e, "#contact")}
                id="hero-primary-cta"
              >
                Book Your First Lesson
              </Button>
              <Button
                href="#courses"
                variant="secondary"
                onClick={(e) => handleScrollToSection(e, "#courses")}
                id="hero-secondary-cta"
              >
                Explore Courses
              </Button>
            </div>
          </AnimatedSection>

          {/* Core metrics overlay (mobile-friendly) under CTAs */}
          <AnimatedSection direction="up" delay={0.5} className="mt-12 w-full">
            <div className="grid grid-cols-3 gap-6 border-t border-zinc-900 pt-8 w-full">
              <div>
                <span className="block font-display text-2xl md:text-3xl font-bold text-accent">10+</span>
                <span className="block text-[11px] uppercase tracking-wider text-text-secondary mt-1">Years Expert</span>
              </div>
              <div>
                <span className="block font-display text-2xl md:text-3xl font-bold text-text-primary">98%</span>
                <span className="block text-[11px] uppercase tracking-wider text-text-secondary mt-1">Pass Rate</span>
              </div>
              <div>
                <span className="block font-display text-2xl md:text-3xl font-bold text-text-primary">2,500+</span>
                <span className="block text-[11px] uppercase tracking-wider text-text-secondary mt-1">Licensed Students</span>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Right Column: Visual Asset with 3D Tilt Interaction */}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <AnimatedSection direction="left" delay={0.3} className="relative w-full max-w-[500px] aspect-[4/3] sm:aspect-square lg:aspect-[4/5] perspective-[1000px]">
            {/* Ambient amber glow behind the image frame */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-amber-600 rounded-2xl blur-xl opacity-20" />
            
            <motion.div
              className="relative w-full h-full rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900 shadow-2xl cursor-pointer select-none"
              style={{
                rotateY: springX,
                rotateX: springY,
                transformStyle: "preserve-3d",
              }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div 
                className="relative w-full h-full"
                style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} // Pop photo forward in 3D space
              >
                <video
                  src={`${basePath}/videos/hero-video.mp4`}
                  poster={heroCar.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover object-center"
                />
                {/* Sleek overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
