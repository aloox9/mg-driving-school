import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Courses from "@/components/Courses";
import HowItWorks from "@/components/HowItWorks";
import Instructors from "@/components/Instructors";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <Header />

      {/* Main Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Why Choose Us Trust Section */}
        <WhyChooseUs />

        {/* Courses & Packages Section */}
        <Courses />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Instructors Section */}
        <Instructors />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Booking Form and Direct Contact details */}
        <Contact />
      </main>

      {/* Custom Footer */}
      <footer className="bg-bg-dark border-t border-zinc-900 py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-start justify-between gap-12">
          
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 18V6H8.5L12 11.5L15.5 6H20V18"
                    stroke="#09090b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14.5C12 16.433 13.567 18 15.5 18H20"
                    stroke="#09090b"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="font-display text-lg font-bold tracking-tight text-text-primary">
                MG <span className="text-accent text-[10px] font-medium tracking-widest block uppercase leading-none mt-0.5">DRIVING</span>
              </span>
            </div>
            <p className="font-sans text-xs text-text-secondary leading-relaxed max-w-[28ch]">
              Professional, certified manual and automatic driving instruction in Lebanon. Safe habits for life.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-8 text-sm font-sans font-medium text-text-secondary">
            <a href="#why-mg" className="hover:text-text-primary transition-colors">
              Why MG
            </a>
            <a href="#courses" className="hover:text-text-primary transition-colors">
              Courses
            </a>
            <a href="#how-it-works" className="hover:text-text-primary transition-colors">
              How It Works
            </a>
            <a href="#instructors" className="hover:text-text-primary transition-colors">
              Instructors
            </a>
            <a href="#contact" className="hover:text-text-primary transition-colors">
              Book Lesson
            </a>
          </div>

          {/* Copyright & Info */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right gap-2 text-xs text-text-secondary font-mono">
            <span>&copy; {new Date().getFullYear()} MG Driving School. All rights reserved.</span>
            <span>Saida, Lebanon · +961 76 556 911</span>
          </div>

        </div>
      </footer>
    </>
  );
}
