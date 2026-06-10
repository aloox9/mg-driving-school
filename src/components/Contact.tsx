"use client";

import React, { useState } from "react";
import Button from "./Button";
import AnimatedSection from "./AnimatedSection";
import { Phone, WhatsappLogo, MapPin, Clock } from "@phosphor-icons/react";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [packageType, setPackageType] = useState("automatic");
  const [error, setError] = useState("");

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your phone number.");
      return;
    }

    // Prepare message content
    const packageNameMap: Record<string, string> = {
      manual: "Manual Transmission Package",
      automatic: "Automatic Transmission Package",
      refresher: "Refresher & Test Prep Package",
    };

    const packageText = packageNameMap[packageType] || "Driving Lessons";
    const baseMessage = `Hi MG Driving School, my name is ${name.trim()}. I would like to book a lesson for the ${packageText}. My phone number is ${phone.trim()}. Please get back to me with availability.`;
    
    // Construct WhatsApp URL ( Lebanese phone format: 961 76 556 911 )
    const whatsappNumber = "96176556911";
    const encodedMessage = encodeURIComponent(baseMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-24 bg-bg-dark border-t border-zinc-900/50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <AnimatedSection direction="up">
                <span className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-accent mb-4 block">
                  Book A Slot
                </span>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.1}>
                <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-text-primary mb-6">
                  Ready to Get Behind the Wheel?
                </h2>
              </AnimatedSection>
              <AnimatedSection direction="up" delay={0.2}>
                <p className="font-sans text-base text-text-secondary leading-relaxed mb-8">
                  Get in touch to schedule your first lesson. Fill out the form to start your booking via WhatsApp, or contact us directly using the details below.
                </p>
              </AnimatedSection>
            </div>

            <AnimatedSection direction="up" delay={0.3} className="space-y-6">
              {/* Call Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">Call School</span>
                  <a href="tel:+96176556911" className="block text-base font-semibold text-text-primary hover:text-accent mt-0.5">
                    +961 76 556 911
                  </a>
                </div>
              </div>

              {/* WhatsApp Details */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <WhatsappLogo size={20} className="text-accent" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">WhatsApp Chat</span>
                  <a href="https://wa.me/96176556911" target="_blank" rel="noopener noreferrer" className="block text-base font-semibold text-text-primary hover:text-accent mt-0.5">
                    +961 76 556 911
                  </a>
                </div>
              </div>

              {/* Areas Served */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-accent" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">Areas Served</span>
                  <p className="text-sm text-text-primary mt-0.5 leading-relaxed">
                    Saida City, Bramiyeh, Hilaliyeh, Abra, Haret Saida, Ghazieh, and surrounding Southern districts.
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-accent" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono uppercase tracking-wider text-text-secondary">Working Hours</span>
                  <p className="text-sm text-text-primary mt-0.5">
                    Mon - Sat: 8:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Column: Interactive Booking Form */}
          <div className="lg:col-span-7 w-full">
            <AnimatedSection direction="left" delay={0.2} className="p-8 rounded-2xl border border-zinc-800 bg-bg-card shadow-2xl">
              <h3 className="font-display text-xl font-bold text-text-primary mb-6">
                Fast Booking Request
              </h3>

              <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
                {/* Full Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name-input" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Full Name
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Mohammad Ghaddar"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-accent rounded-xl px-4 py-3 text-sm text-text-primary placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-160"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="phone-input" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Phone Number (WhatsApp preferred)
                  </label>
                  <input
                    id="phone-input"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +961 76 556 911"
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-accent rounded-xl px-4 py-3 text-sm text-text-primary placeholder-zinc-600 focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-160"
                  />
                  <span className="text-[11px] text-zinc-500">Includes country code.</span>
                </div>

                {/* Preferred Package */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="package-select" className="font-sans text-xs font-semibold uppercase tracking-wider text-text-secondary">
                    Preferred Course
                  </label>
                  <select
                    id="package-select"
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-accent rounded-xl px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-160 appearance-none cursor-pointer"
                  >
                    <option value="automatic">Automatic Transmission Course</option>
                    <option value="manual">Manual Transmission Course</option>
                    <option value="refresher">Refresher & Test Prep Course</option>
                  </select>
                </div>

                {error && (
                  <p className="text-xs text-rose-500 font-medium font-mono">
                    {error}
                  </p>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  className="w-full justify-center gap-2 py-4"
                  id="submit-booking-cta"
                >
                  <WhatsappLogo size={20} weight="fill" />
                  <span>Send Booking via WhatsApp</span>
                </Button>

                <p className="text-center text-[11px] text-text-secondary leading-relaxed mt-4">
                  Submitting will open a pre-filled chat with MG School. No payment required online.
                </p>
              </form>
            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
}
