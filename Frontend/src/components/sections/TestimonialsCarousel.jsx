import React from 'react';
import { testimonials } from '@/core/repositories/ExtendedRepositories';
import { Container } from '@/components/layout/Container';

export const TestimonialsCarousel = ({ items = testimonials }) => {
  return (
    <section className="py-16 md:py-20 bg-surface-soft/80 border-t border-slate-100">
      <Container>
        <div className="text-center mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-widest inline-block mb-1">
            Loved by homes across India
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
            What our happy customers say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white p-7 rounded-2xl border border-slate-200/80 shadow-subtle hover:shadow-card transition-all duration-200 flex flex-col justify-between text-left"
            >
              <p className="text-sm text-slate-text italic leading-relaxed mb-6">
                "{item.quote}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-primary-tint text-primary font-bold text-sm flex items-center justify-center shrink-0">
                  {item.avatarInitial || item.name[0]}
                </div>
                <div>
                  <div className="text-sm font-bold text-navy">{item.name}</div>
                  <div className="text-xs text-slate-muted">{item.city || item.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
