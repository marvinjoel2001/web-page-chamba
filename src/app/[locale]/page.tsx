"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Categories from "@/components/Categories";
import AboutUs from "@/components/AboutUs";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import AgencyBanner from "@/components/AgencyBanner";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

import type { Role } from "@/lib/role";

export default function Home() {
  const [activeRole, setActiveRole] = useState<Role>("client");

  // El modo vive en <html data-role> para que el velo del video (en el layout)
  // y los colores de acento cambien en toda la página.
  useEffect(() => {
    document.documentElement.dataset.role = activeRole;
    return () => {
      delete document.documentElement.dataset.role;
    };
  }, [activeRole]);

  return (
    <div className="on-video min-h-screen flex flex-col bg-transparent font-sans antialiased relative z-10 text-ink selection:bg-accent selection:text-on-accent">
      <a
        href="#contenido"
        data-solid
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-[#FAF6F0]"
      >
        Saltar al contenido
      </a>

      <Navbar activeRole={activeRole} setActiveRole={setActiveRole} />

      {/* Anuncia el cambio de modo a lectores de pantalla. */}
      <p className="sr-only" aria-live="polite">
        {activeRole === "client"
          ? "Mostrando Chamba para clientes"
          : "Mostrando Chamba para trabajadores"}
      </p>

      <main id="contenido" className="flex-1">
        <Hero activeRole={activeRole} />
        <HowItWorks activeRole={activeRole} />
        <Features activeRole={activeRole} />
        {activeRole === "client" && <Categories />}
        <Stats activeRole={activeRole} />
        <Testimonials activeRole={activeRole} />
        <AboutUs />
        <AgencyBanner />
        <CTA activeRole={activeRole} />
      </main>

      <Footer />
    </div>
  );
}
