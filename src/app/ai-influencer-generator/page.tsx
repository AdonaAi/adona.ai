"use client";

import Navbar from "@/components/sections/navbar";
import InfluencerHero from "@/components/sections/influencer-generator/hero";
import HowItWorks from "@/components/sections/how-it-works";
// Use FB-ads components for consistent sections
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
import InfluencerFAQ from "@/components/sections/influencer-generator/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function AIInfluencerGenerator() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <InfluencerHero />
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
        <InfluencerFAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
