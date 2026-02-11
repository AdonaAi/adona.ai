"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/fb-ads/hero";
import HowItWorks from "@/components/sections/how-it-works";
import FBIntelligenceShowcase from "@/components/sections/fb-ads/intelligence-showcase";
import ContentIntelligenceStats from "@/components/sections/fb-ads/content-intelligence-stats";
import GeneratedWith from "@/components/sections/fb-ads/generated-with";
import WhyFoundersChoose from "@/components/sections/fb-ads/why-founders-choose";
import PerfectAdsCarousel from "@/components/sections/fb-ads/perfect-ads-carousel";
// Use homepage sections for consistent styling
import BrandDNA from "@/components/sections/brand-dna";
import ComparisonTable from "@/components/sections/comparison-table";
import Privacy from "@/components/sections/privacy";
import ToolSuite from "@/components/sections/tool-suite";
import FBAdsFAQ from "@/components/sections/fb-ads/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function FacebookAdMakerPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FBIntelligenceShowcase />
        <ContentIntelligenceStats />
        <GeneratedWith />
        <WhyFoundersChoose />
        <BrandDNA />
        <PerfectAdsCarousel />
        <ComparisonTable />
        <Privacy />
        <ToolSuite />
        <FBAdsFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
