import { HeroSection } from "@/components/features/home/hero-section";
import { CnbStripSection } from "@/components/features/home/cnb-strip-section";
import { PracticesSection } from "@/components/features/home/practices-section";
import { SplitContentSection } from "@/components/features/home/split-content-section";
import { ReviewsSection } from "@/components/features/home/reviews-section";
import { ProcessSection } from "@/components/features/home/process-section";
import { FoundersSection } from "@/components/features/home/founders-section";
import { FaqSection } from "@/components/features/home/faq-section";
import { ContactFormSection } from "@/components/features/home/contact-form-section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { Locale } from "@/lib/constants/locale";

interface HomePageContentProps {
  locale: Locale;
}

export function HomePageContent({ locale }: HomePageContentProps) {
  return (
    <>
      <HeroSection locale={locale} />
      <ScrollReveal>
        <CnbStripSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <PracticesSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <SplitContentSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ReviewsSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <FoundersSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ProcessSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <FaqSection locale={locale} />
      </ScrollReveal>
      <ScrollReveal>
        <ContactFormSection locale={locale} />
      </ScrollReveal>
    </>
  );
}
