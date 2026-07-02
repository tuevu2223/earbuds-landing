"use client";

import HeroSection from "./components/HeroSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic, faHeadphones, faBatteryFull } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="min-h-screen bg-theme-bg font-sans">
      <HeroSection />
    </div>
  );
}
