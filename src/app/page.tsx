import HeroSection from "@/components/home/HeroSection";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import ServicesSection from "@/components/home/ServicesSection";
import StatsSection from "@/components/home/StatsSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import StudioPreviewSection from "@/components/home/StudioPreviewSection";
import CreatorAuthoritySection from "@/components/home/CreatorAuthoritySection";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <StatsSection />
      <HowItWorksSection />
      <StudioPreviewSection />
      <CreatorAuthoritySection />
      <CTASection />
    </>
  );
}
