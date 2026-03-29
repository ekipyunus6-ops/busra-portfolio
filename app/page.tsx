import { ContactSection } from "@/components/ContactSection";
import { FAQSection } from "@/components/FAQSection";
import { HeroSection } from "@/components/HeroSection";
import { PageShell } from "@/components/PageShell";
import { PricingSection } from "@/components/PricingSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WorkSection } from "@/components/WorkSection";

export default function Home() {
  return (
    <PageShell>
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <PricingSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
    </PageShell>
  );
}
