"use client";

import HeroSection from "./components/HeroSection";
import TrustSection from "./components/sections/trust-section/TrustSection";
import ProductIntroduction from "./components/sections/product-section/ProductIntroduction";
import PreOrderCTA from "./components/sections/cta-section/PreOrderCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans">
      <HeroSection />
      <div className="max-w-5xl mx-auto space-y-12 px-6 py-12">

        <TrustSection />
        <PreOrderCTA />
        <ProductIntroduction />

      </div>
    </div>
  );
}
