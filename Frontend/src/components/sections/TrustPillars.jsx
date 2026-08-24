import React from 'react';
import { Link2, ShieldCheck, CalendarCheck } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const TrustPillars = () => {
  const pillars = [
    {
      icon: Link2,
      title: 'Transparent Pricing',
      description: 'See pricing upfront before you book. No hidden charges or surprise hourly spikes.',
    },
    {
      icon: ShieldCheck,
      title: 'Verified Professionals',
      description: 'Every service provider is background-checked and expert vetted for your peace of mind.',
    },
    {
      icon: CalendarCheck,
      title: 'Hassle-free Booking',
      description: 'Select a custom time slot, schedule recurring jobs, and pay instantly online.',
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-surface-soft/60 border-y border-slate-100">
      <Container>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
            Why Norozz?
          </h2>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            We set a high bar for home services, redefining transparency and premium customer care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all duration-200 text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-tint text-primary flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-muted leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
