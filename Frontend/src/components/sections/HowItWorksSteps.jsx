import React from 'react';
import { Search, UserCheck, Calendar, CreditCard, Check } from 'lucide-react';
import { Container } from '@/components/layout/Container';

export const HowItWorksSteps = () => {
  const steps = [
    {
      number: '1',
      icon: Search,
      title: 'Search a service',
      description: 'Choose from cleaning, appliance repair, plumbing and more home services.',
    },
    {
      number: '2',
      icon: UserCheck,
      title: 'Select professional',
      description: 'Browse highly rated, verified professionals with standard, clean upfront pricing.',
    },
    {
      number: '3',
      icon: Calendar,
      title: 'Book a custom slot',
      description: 'Select a custom date and hourly slot of convenience. Fits your schedule.',
    },
    {
      number: '4',
      icon: CreditCard,
      title: 'Pay securely',
      description: 'Instant online payment with post-service satisfaction assurance guarantee.',
    },
  ];

  const guarantees = [
    {
      title: 'Zero Surprise Fees',
      description: 'Fixed standard prices on services shown upfront. No negotiation needed.',
    },
    {
      title: 'Superb Security Cover',
      description: 'Property coverage up to ₹10,000 for any accidental damages.',
    },
    {
      title: 'Always Checked Experts',
      description: 'Each handyperson passes rigorous police check verification.',
    },
  ];

  return (
    <div className="space-y-16">
      {/* 4-Step Process Strip */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card transition-all duration-200 text-left relative"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xl font-extrabold text-primary font-heading">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 text-slate-muted flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-base font-bold text-navy mb-2 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Customer Guarantees Block */}
      <section className="py-14 bg-surface-soft/80 border-y border-slate-100">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-2xl font-extrabold text-navy font-heading">
              Our Customer Guarantees
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-subtle text-left space-y-3"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-50 text-brandSuccess flex items-center justify-center">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <h3 className="text-base font-bold text-navy font-heading">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};
