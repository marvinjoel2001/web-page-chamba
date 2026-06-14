"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import NegotiationSimulator from "@/components/NegotiationSimulator";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  const [activeRole, setActiveRole] = useState<"client" | "worker">("client");

  return (
    <div className="min-h-screen flex flex-col bg-[#090d16] font-sans selection:bg-brand-orange selection:text-white antialiased">
      {/* Header / Navigation */}
      <Navbar activeRole={activeRole} setActiveRole={setActiveRole} />

      {/* Main Content Arena */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero activeRole={activeRole} />

        {/* Dynamic Features Showcase */}
        <Features activeRole={activeRole} />

        {/* Categories Grid */}
        <Categories />

        {/* Live Interactive Negotiation Simulator */}
        <NegotiationSimulator />

        {/* Step-by-Step Instructions */}
        <HowItWorks activeRole={activeRole} />

        {/* Numeric Statistics Showcase */}
        <Stats />

        {/* Client & Worker Testimonials */}
        <Testimonials />

        {/* Call to Action for Installation */}
        <CTA activeRole={activeRole} />
      </main>

      {/* Footer Area */}
      <Footer />
    </div>
  );
}
