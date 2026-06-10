"use client";

import React from "react";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";
import { Check } from "@phosphor-icons/react";

export default function Courses() {
  const packages = [
    {
      id: "manual",
      title: "Manual Transmission",
      price: "$300",
      duration: "3-4 Weeks",
      features: [
        "12 Individual Practical Sessions",
        "Clutch Control & Hill Start Mastery",
        "Official Lebanese Theory Guide",
        "Dual-Control Safety Vehicles",
        "Mock Driving Test Simulation",
      ],
      ctaText: "Select Manual",
    },
    {
      id: "automatic",
      title: "Automatic Transmission",
      price: "$300",
      duration: "3-4 Weeks",
      features: [
        "12 Individual Practical Sessions",
        "Urban Navigation & Parking Mastery",
        "Official Lebanese Theory Guide",
        "Dual-Control Safety Vehicles",
        "Mock Driving Test Simulation",
      ],
      ctaText: "Select Automatic",
      popular: true,
    },
    {
      id: "refresher",
      title: "Refresher & Test Prep",
      price: "$300",
      duration: "1-2 Weeks",
      features: [
        "5 Individual Custom Sessions",
        "Traffic Fear & Confidence Rebuilding",
        "Exam Route Practice & Mock Tests",
        "Parallel Parking & Reversing",
        "Instructor Assessment Report",
      ],
      ctaText: "Select Refresher",
    },
  ];

  const handleSelectPackage = (packageId: string) => {
    // Scroll to contact form
    const contactForm = document.querySelector("#contact");
    if (contactForm) {
      const offset = 80;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      // Find the select element in the form and set its value
      const selectElement = document.querySelector("#package-select") as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = packageId;
        // Trigger change event to notify React state if needed
        const event = new Event("change", { bubbles: true });
        selectElement.dispatchEvent(event);
      }
    }
  };

  return (
    <section id="courses" className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-[65ch] mb-16">
          <AnimatedSection direction="up">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Structured Packages Built for Results
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              Whether you are getting behind the wheel for the first time or need a refresher to pass your next test, we have a package tailored to your skill level.
            </p>
          </AnimatedSection>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {packages.map((pkg, index) => (
            <AnimatedSection
              key={pkg.id}
              direction="up"
              delay={index * 0.1}
              className={`relative flex flex-col justify-between p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? "border-accent/60 bg-zinc-900/40 shadow-xl shadow-accent/5"
                  : "border-zinc-800/80 bg-zinc-950/40 hover:border-zinc-700/80"
              }`}
            >
              {pkg.popular && (
                <span className="absolute -top-3.5 left-8 px-3 py-1 bg-accent text-bg-dark font-mono text-[10px] font-bold uppercase tracking-widest rounded-full">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">
                  {pkg.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-3xl font-bold text-text-primary">
                    Starting from {pkg.price}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-8 border-b border-zinc-900 pb-6 text-xs text-text-secondary font-mono uppercase tracking-wider">
                  <span>Duration:</span>
                  <span className="text-accent font-semibold">{pkg.duration}</span>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-text-secondary leading-relaxed">
                      <Check size={18} className="text-accent shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={pkg.popular ? "primary" : "secondary"}
                onClick={() => handleSelectPackage(pkg.id)}
                className="w-full justify-center mt-auto"
                id={`select-${pkg.id}-cta`}
              >
                {pkg.ctaText}
              </Button>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
