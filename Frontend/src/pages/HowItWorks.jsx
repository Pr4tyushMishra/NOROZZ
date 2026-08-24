import React, { useEffect } from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { HowItWorksSteps, FaqAccordion, AppPromoBand } from '@/components/sections';
import { analytics } from '@/core/services/AnalyticsService';

export const HowItWorks = () => {
  useEffect(() => {
    analytics.pageView('/how-it-works', 'How It Works — Simple 4-Step Home Booking — NOROZZ');
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="How It Works — Booking Home Services Made Simple — NOROZZ"
        description="Norozz connects you to verified home service experts in just 4 simple clicks. Learn about our transparent pricing, customer guarantees and FAQs."
      />

      {/* Page Header */}
      <section className="pt-16 pb-6 bg-surface text-center">
        <Container size="narrow">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-navy font-heading tracking-tight">
            Booking a professional was never this simple
          </h1>
          <p className="text-base sm:text-lg text-slate-muted mt-3 max-w-2xl mx-auto leading-relaxed">
            Norozz connects you to verified home service experts in just 4 simple clicks. Here is how our seamless process operates.
          </p>
        </Container>
      </section>

      {/* 4 Steps + Customer Guarantees */}
      <SafeComponent name="HowItWorksSteps">
        <HowItWorksSteps />
      </SafeComponent>

      {/* Frequently Asked Questions */}
      <SafeComponent name="FaqAccordion">
        <FaqAccordion />
      </SafeComponent>

      {/* App Promo Band */}
      <SafeComponent name="AppPromoBand">
        <AppPromoBand />
      </SafeComponent>
    </div>
  );
};

export default HowItWorks;
