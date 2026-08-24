import React from 'react';
import { Link } from 'react-router-dom';
import { analytics } from '@/core/services/AnalyticsService';
import { Container } from '@/components/layout/Container';

export const PartnerBand = () => {
  const handleClick = () => {
    analytics.partnerSignupClick('home_partner_band');
  };

  return (
    <section className="py-12 md:py-14 bg-navy text-white border-t border-slate-800">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1 max-w-xl">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
              Are you a service professional? Join us
            </h3>
            <p className="text-sm text-slate-300">
              Partner with Norozz, get reliable work, control your schedules, and earn competitive pay.
            </p>
          </div>

          <Link
            to="/for-partners"
            onClick={handleClick}
            className="inline-flex items-center justify-center px-7 py-3 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-full transition-colors shadow-md shrink-0 cursor-pointer"
          >
            Partner With Us
          </Link>
        </div>
      </Container>
    </section>
  );
};
