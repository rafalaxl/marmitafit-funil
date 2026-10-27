import React, { useEffect } from 'react';
import { UrgencyBar } from '../components/UrgencyBar';
import { Hero } from '../components/Hero';
import { PainIdentification } from '../components/PainIdentification';
import { CurriculumModules } from '../components/CurriculumModules';
import { BonusesAndBumps } from '../components/BonusesAndBumps';
import { SocialProof } from '../components/SocialProof';
import { PricingSection } from '../components/PricingSection';
import { FAQSection } from '../components/FAQSection';
import { Footer } from '../components/Footer';
import { captureAndPersistUtms } from '../utils/utm';
import { initMetaPixel, trackPageView } from '../utils/pixel';

export function LandingPage({ offer, onNavigate }) {
  useEffect(() => {
    document.title = offer.pageTitle;
    document.documentElement.setAttribute('data-theme', offer.theme || 'marmita');
    captureAndPersistUtms();
    initMetaPixel();
    trackPageView(offer.name);
  }, [offer]);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)] text-[var(--color-text-primary)]">
      <UrgencyBar text={offer.urgencyText} />
      <main className="flex-1">
        <Hero offer={offer} />
        <PainIdentification painSection={offer.painSection} />
        <CurriculumModules offer={offer} />
        <BonusesAndBumps offer={offer} />
        <SocialProof testimonials={offer.testimonials} />
        <PricingSection offer={offer} />
        <FAQSection faqs={offer.faqs} />
      </main>
      <Footer offerName={offer.name} onNavigate={onNavigate} />
    </div>
  );
}
