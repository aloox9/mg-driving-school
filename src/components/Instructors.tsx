"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";
import { Globe } from "@phosphor-icons/react";

export default function Instructors() {
  const staff = [
    {
      name: "Mohammad Ghaddar",
      role: "Founder & Head Instructor",
      experience: "12+ Years Experience",
      languages: "Arabic, English",
    },
    {
      name: "Kassem Mahdi",
      role: "Certified Instructor",
      experience: "6+ Years Experience",
      languages: "Arabic, English",
    },
  ];

  return (
    <section id="instructors" className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-[65ch] mb-16">
          <AnimatedSection direction="up">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Learn From Certified Professionals
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Our instructors are patient, highly experienced, and certified by the Lebanese traffic authorities to provide safe and effective training.
            </p>
          </AnimatedSection>
        </div>

        {/* Instructors Row (Visual Density 6: 2 columns on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
          {staff.map((person, index) => (
            <AnimatedSection
              key={person.name}
              direction="up"
              delay={index * 0.1}
              className="flex flex-col p-6 rounded-2xl border border-zinc-800 bg-bg-card hover:border-zinc-700/80 transition-all duration-300"
            >
              {/* Info Block */}
              <div className="flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display text-lg font-bold text-text-primary">
                    {person.name}
                  </h3>
                  <span className="block text-xs text-accent font-mono uppercase tracking-wider mt-1 mb-4">
                    {person.role}
                  </span>
                  <span className="block text-sm text-text-primary font-medium">
                    {person.experience}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-xs text-text-secondary mt-6 font-sans">
                  <Globe size={16} className="text-zinc-500" />
                  <span>Languages: {person.languages}</span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
