"use client";

import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/ig-ads/hero";
import HowItWorks from "@/components/sections/how-it-works";
// Use FB-ads components for consistent sections (similar structure)
import FBIntelligenceShowcase from "@/components/sections/fb-ads/intelligence-showcase";
import ContentIntelligenceStats from "@/components/sections/fb-ads/content-intelligence-stats";
import GeneratedWith from "@/components/sections/fb-ads/generated-with";
import WhyFoundersChoose from "@/components/sections/fb-ads/why-founders-choose";
import IGPerfectAdsCarousel from "@/components/sections/ig-ads/perfect-ads-carousel";
// Use homepage sections for consistent styling
import BrandDNA from "@/components/sections/brand-dna";
import ComparisonTable from "@/components/sections/comparison-table";
import Privacy from "@/components/sections/privacy";
import ToolSuite from "@/components/sections/tool-suite";
import Testimonials from "@/components/sections/testimonials";
import IGAdsFAQ from "@/components/sections/ig-ads/faqs";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function InstagramAdMakerPage() {
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
        <IGPerfectAdsCarousel />
        <ComparisonTable />
        <Privacy />
        <ToolSuite />
        <Testimonials />
        <IGAdsFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
