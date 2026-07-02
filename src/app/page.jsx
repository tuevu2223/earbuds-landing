"use client";

import HeroSection from "./components/HeroSection";
import TrustSection from "./components/sections/trust-section/TrustSection";
import ProductIntroduction from "./components/sections/product-section/ProductIntroduction";
import FeatureHighlights from "./components/sections/features-section/FeatureHighlights";
import PreOrderCTA from "./components/sections/cta-section/PreOrderCTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans">
      <HeroSection />
      <div className="max-w-5xl mx-auto px-6 py-12 space-y-20">
        <TrustSection />
        <PreOrderCTA />
        <div id="product-introduction">
          <ProductIntroduction />
        </div>
        <div id="features">
          <FeatureHighlights />
        </div>
        <div id="guide" />
        <div id="reviews" />
      </div>
    </div>
  );
}
