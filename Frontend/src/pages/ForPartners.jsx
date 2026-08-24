import React, { useEffect } from 'react';
import { Shield, TrendingUp, Calendar, Headphones, CheckCircle2, ArrowRight } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { FaqAccordion } from '@/components/sections';
import { Button } from '@/components/ui';
import { analytics } from '@/core/services/AnalyticsService';
import { eventBus } from '@/core/services/EventBus';

export const ForPartners = () => {
  useEffect(() => {
    analytics.pageView('/for-partners', 'Partner With NOROZZ — Grow Your Service Business');
  }, []);

  const handlePartnerApply = () => {
    analytics.partnerSignupClick('for_partners_hero');
    eventBus.emit('open_app_handoff', { title: 'Partner Onboarding Portal' });
  };

  const partnerBenefits = [
    {
      icon: TrendingUp,
      title: 'Guaranteed Steady Earnings',
      description: 'Earn up to ₹40,000 - ₹65,000 monthly with transparent weekly bank payouts and top performance bonuses.',
    },
    {
      icon: Calendar,
      title: 'Flexible Working Hours',
      description: 'You are your own boss. Turn on work mode whenever you want and accept slots near your area.',
    },
    {
      icon: Shield,
      title: 'Free Insurance & Safety Kit',
      description: 'Every partner receives an official branded kit, tools training, and accidental damage health coverage.',
    },
    {
      icon: Headphones,
      title: '24/7 Dedicated Partner Desk',
      description: 'Get instant live support for navigation, job escalations, and customer slot adjustments.',
    },
  ];

  const onboardingSteps = [
    { step: '1', title: 'Submit Documents', desc: 'Aadhaar, PAN, and address proof for fast police verification.' },
    { step: '2', title: 'Practical Skill Trial', desc: 'Complete our 1-day standard service skill check.' },
    { step: '3', title: 'Get NOROZZ Pro Kit', desc: 'Receive your uniform, digital app access, and toolkit.' },
    { step: '4', title: 'Start Taking Jobs', desc: 'Accept bookings in your city and get paid weekly.' },
  ];

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="Partner With NOROZZ — Earn More With Zero Agency Commission"
        description="Join 25,000+ verified professionals on NOROZZ. Steady jobs, high monthly earnings, flexible schedules, and insurance coverage."
      />

      {/* Hero */}
      <section className="py-16 md:py-24 bg-navy text-white text-left relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/10 blur-3xl pointer-events-none" />
        <Container>
          <div className="max-w-2xl space-y-6">
            <span className="inline-block px-3.5 py-1 bg-primary text-white text-xs font-bold rounded-full uppercase tracking-wider">
              Partner Acquisition Program
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading leading-tight">
              Grow your home service business with NOROZZ
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Connect directly with thousands of verified homeowners in your city. Get reliable daily bookings, instant bank payouts, and zero middlemen.
            </p>
            <div className="pt-2">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePartnerApply}
                className="px-8"
              >
                Become a NOROZZ Partner <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Benefits Grid */}
      <section className="py-16 md:py-20 bg-surface text-left">
        <Container>
          <div className="mb-12 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
              Why 25,000+ Pros Choose NOROZZ
            </h2>
            <p className="text-sm sm:text-base text-slate-muted mt-2">
              We provide the tech, customers, and training so you can focus on great craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBenefits.map((b, i) => {
              const Icon = b.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-tint text-primary flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 stroke-[1.8]" />
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 font-heading">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">{b.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4-Step Onboarding */}
      <section className="py-16 bg-surface-soft/70 border-y border-slate-100 text-left">
        <Container>
          <div className="mb-12 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
              How to Get Onboarded in 4 Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {onboardingSteps.map((s) => (
              <div key={s.step} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-subtle space-y-2">
                <span className="text-2xl font-extrabold text-primary font-heading">0{s.step}</span>
                <h3 className="text-base font-bold text-navy font-heading">{s.title}</h3>
                <p className="text-xs text-slate-muted">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <SafeComponent name="PartnerFaq">
        <FaqAccordion title="Partner FAQs" />
      </SafeComponent>
    </div>
  );
};

export default ForPartners;
