"use client";

import Navbar from "@/components/sections/navbar";
import Hero from "@/components/sections/hero";
import TrustBar from "@/components/sections/trust-bar";
import WorkShowcase from "@/components/sections/work-showcase";
import TextRevealSection from "@/components/sections/text-reveal";
import GridShowcase from "@/components/sections/grid-showcase";
import HowItWorks from "@/components/sections/how-it-works";

import AllInOneMarketingTabs from "@/components/sections/all-in-one-tabs";
import BrandDNA from "@/components/sections/brand-dna";
import BusinessTypesSection from "@/components/sections/business-types";
import ContentTinderSection from "@/components/sections/content-tinder";
import IdeasCloud from "@/components/sections/ideas-cloud";
import IntelligenceShowcase from "@/components/sections/intelligence-showcase";
import LanguagesGrid from "@/components/sections/languages-grid";
import ComparisonTable from "@/components/sections/comparison-table";

import Testimonials from "@/components/sections/testimonials";
import FAQSection from "@/components/sections/faq";
import FinalCTA from "@/components/sections/final-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <WorkShowcase />
        <TextRevealSection />
        <GridShowcase />
        <HowItWorks />

        <AllInOneMarketingTabs />
        <BrandDNA />
        <BusinessTypesSection />
        <ContentTinderSection />
        <IdeasCloud />
        <IntelligenceShowcase />
        <LanguagesGrid />
        <ComparisonTable />

        <Testimonials />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
