import { ContactSection } from "@/components/contact-section";
import { CtaStrip } from "@/components/landing/cta-strip";
import { FaqSection } from "@/components/landing/faq-section";
import { IntroStrip } from "@/components/landing/intro-strip";
import { ProcessSection } from "@/components/landing/process-section";
import { SectionDivider } from "@/components/landing/section-divider";
import { HeroCarousel } from "@/components/landing/hero-carousel";
import { ServicesPreview } from "@/components/landing/services-preview";
import { StatsSection } from "@/components/landing/stats-section";
import { TeamPreviewSection } from "@/components/landing/team-preview-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { WhyUsSection } from "@/components/landing/why-us-section";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <IntroStrip />

      <ServicesPreview />
      <StatsSection />
      <SectionDivider />

      <CtaStrip
        title="Un incident en cours ?"
        description="Notre équipe de dépannage intervient rapidement pour rétablir vos systèmes."
        ctaLabel="Assistance urgente"
        ctaHref="/contact"
        variant="brand"
      />

      <ProcessSection />
      <CtaStrip
        title="Audit de sécurité gratuit"
        description="Évaluez la posture de sécurité de votre organisation avec nos experts."
        ctaLabel="Planifier un audit"
        ctaHref="/contact"
        variant="dark"
      />

      <WhyUsSection />
      <TeamPreviewSection />
      <SectionDivider />
      <FaqSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
