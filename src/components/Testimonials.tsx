"use client";

import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function Testimonials() {
  const reviews = [
    {
      quote: "Honestly, I was so nervous about Saida traffic. But Mohammad was super patient and chill during the manual lessons. Passed from the first time, el hamdoulilah!",
      author: "Rami",
      license: "Manual License Achieved",
    },
    {
      quote: "Needed my license fast for a new job in Beirut. Kasem made me feel so confident driving on the highway. Literally the best choice I made.",
      author: "Zeina",
      license: "Automatic License Achieved",
    },
    {
      quote: "After not driving for 5 years, Saida's roundabouts felt terrifying. Took 4 refresher sessions here and got back on the road safely. Best school in the South!",
      author: "Georges",
      license: "Refresher Course Completed",
    },
  ];

  return (
    <section className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-[65ch] mb-16">
          <AnimatedSection direction="up">
            <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-4">
              Real Reviews from Licensed Students
            </h2>
          </AnimatedSection>
          <AnimatedSection direction="up" delay={0.1}>
            <p className="font-sans text-base text-text-secondary leading-relaxed">
              We have helped thousands of students in Lebanon overcome driving anxiety and pass their official exams with confidence.
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Grid (Visual Density 6: 3 columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <AnimatedSection
              key={review.author}
              direction="up"
              delay={index * 0.1}
              className="flex flex-col justify-between p-6 rounded-2xl border border-zinc-800/80 bg-bg-card hover:border-zinc-700/80 transition-all duration-300"
            >
              <p className="font-sans text-sm text-text-secondary italic leading-relaxed mb-6">
                &ldquo;{review.quote}&rdquo;
              </p>
              
              <div className="border-t border-zinc-900 pt-4 flex flex-col">
                <span className="font-display text-sm font-semibold text-text-primary">
                  {review.author}
                </span>
                <span className="text-[11px] font-mono text-accent uppercase tracking-wider mt-1">
                  {review.license}
                </span>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
