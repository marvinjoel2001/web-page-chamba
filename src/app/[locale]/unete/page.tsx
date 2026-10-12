"use client";

import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function JoinUsPage() {
  useEffect(() => {
    document.documentElement.dataset.role = "worker";
    return () => { delete document.documentElement.dataset.role; };
  }, []);

  return (
    <div className="on-video min-h-screen flex flex-col font-sans text-ink">
      <Navbar activeRole="worker" />
      <main className="flex-1">
        <Hero activeRole="worker" />
        <CTA activeRole="worker" />
      </main>
      <Footer />
    </div>
  );
}
