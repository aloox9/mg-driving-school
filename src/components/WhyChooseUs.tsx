"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { ShieldCheck, SteeringWheel, Trophy, IdentificationCard } from "@phosphor-icons/react";

export default function WhyChooseUs() {
  const trustSignals = [
    {
      icon: <ShieldCheck size={32} className="text-accent" />,
      title: "Certified Safety",
      description: "Fully licensed by the Ministry of Interior. We teach with state-of-the-art dual-control safety vehicles.",
    },
    {
      icon: <SteeringWheel size={32} className="text-accent" />,
      title: "Modern Vehicle Fleet",
      description: "Learn in clean, modern manual or automatic cars fitted with dual brakes to ensure you're always protected.",
    },
    {
      icon: <Trophy size={32} className="text-accent" />,
      title: "98% First-Try Pass Rate",
      description: "Our structured curriculum is built directly around Lebanese licensing standards for maximum exam readiness.",
    },
    {
      icon: <IdentificationCard size={32} className="text-accent" />,
      title: "Bilingual Instructors",
      description: "Learn comfortably with patient, professional, and certified instructors speaking Arabic & English.",
    },
  ];

  return (
    <section id="why-mg" className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header: stacked vertically, max-width 65ch (Split-Header is banned by default) */}
        <div className="flex flex-col items-start text-left max-w-[65ch] mb-16">
          <AnimatedSection direction="up">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Built on High Standards and Student Trust
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              We don&apos;t just prepare you to pass your license test. We train you with the practical defensive driving habits needed to navigate Lebanese roads safely for life.
            </p>
          </AnimatedSection>
        </div>

        {/* Trust Signals Grid (Visual Density 6: comfortable grid with background cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustSignals.map((signal, index) => (
            <AnimatedSection
              key={signal.title}
              direction="up"
              delay={index * 0.1}
              className="flex flex-col p-6 rounded-xl border border-zinc-800/80 bg-bg-card hover:bg-bg-card-hover hover:border-zinc-700 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-muted flex items-center justify-center mb-6">
                {signal.icon}
              </div>
              <h3 className="font-display text-lg font-semibold text-text-primary mb-3">
                {signal.title}
              </h3>
              <p className="font-sans text-sm text-text-secondary leading-relaxed">
                {signal.description}
              </p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
