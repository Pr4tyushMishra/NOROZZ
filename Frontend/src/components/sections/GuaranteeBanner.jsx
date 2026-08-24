import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ASSETS } from '@/core/repositories/MockData';
import { Container } from '@/components/layout/Container';

export const GuaranteeBanner = ({
  image = ASSETS.guaranteeCleaner,
  badgeText = '100% QUALITY ASSURED',
  heading = 'Your peace of mind is our topmost priority',
  body = 'Not completely satisfied with the result? We promise to send another professional to redo the service free of charge, or we refund your booking. Zero risk, 100% guarantee.',
  ctaLabel = 'Read Guarantee Policy',
  ctaTo = '/about',
}) => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 relative group">
              <img
                src={image}
                alt="Norozz Quality Cleaning Guarantee"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy Content */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>{badgeText}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy leading-tight font-heading">
              {heading}
            </h2>

            <p className="text-sm sm:text-base text-slate-muted leading-relaxed">
              {body}
            </p>

            <div className="pt-3">
              <Link
                to={ctaTo}
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 hover:border-slate-400 text-navy font-semibold text-sm rounded-full bg-white hover:bg-slate-50 transition-colors shadow-xs"
              >
                {ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
