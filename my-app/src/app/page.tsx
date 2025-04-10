"use client";

import AboutSection from "@/components/AboutSection";
import BlobBackground from "@/components/BlobBackground";
import Products from "@/components/Products";
import ExperienceEducation from "@/components/Experience-&-Education";
import SkillsSection from "@/components/SkillsSection";
import Contact from "@/components/Contact";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <BlobBackground />
      <HeroSection />
      <AboutSection />
      <Products />
      <ExperienceEducation />
      <SkillsSection />
      <Contact />
    </main>
  );
}
