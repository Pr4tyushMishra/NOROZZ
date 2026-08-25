import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, ShieldCheck, ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { Container } from '@/components/layout/Container';
import { SEED_SERVICES, SUPPORT_CONTACTS } from '@/core/repositories/MockData';

export const FeaturedServicesSection = ({
  title = 'Most Requested Services',
  subtitle = 'Top-rated household services by background-verified professionals with upfront transparent pricing.',
}) => {
  const featured = SEED_SERVICES.slice(0, 6);

  return (
    <section className="py-16 md:py-20 bg-surface-soft/40 border-b border-slate-100">
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 text-left gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary-tint text-primary text-xs font-bold rounded-full uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Verified Doorstep Experts</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-navy font-heading tracking-tight">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-muted max-w-2xl">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-primary hover:text-primary-dark hover:underline transition-colors"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {featured.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-3xl border border-slate-200/80 shadow-subtle hover:shadow-card hover:border-teal-200 transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Image & Badge Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Top Badge */}
                {service.badge && (
                  <div className="absolute top-3 left-3 bg-navy/85 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-lg border border-white/20 shadow-xs">
                    {service.badge}
                  </div>
                )}

                {/* Rating Overlay */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md text-navy text-xs font-bold px-2.5 py-1 rounded-lg border border-slate-100 shadow-xs flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{service.rating}</span>
                  <span className="text-[10px] text-slate-400 font-normal">({service.reviewCount > 1000 ? `${(service.reviewCount / 1000).toFixed(1)}k` : service.reviewCount})</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="font-semibold text-primary">{service.categoryName}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors font-heading line-clamp-1">
                    {service.title}
                  </h3>

                  <p className="text-xs text-slate-muted line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Inclusions summary list */}
                {service.inclusions && service.inclusions.length > 0 && (
                  <div className="pt-2 space-y-1.5 border-t border-slate-100 text-[11px] text-slate-500">
                    {service.inclusions.slice(0, 2).map((inc, i) => (
                      <div key={i} className="flex items-start gap-1.5 line-clamp-1">
                        <span className="text-emerald-500 font-bold shrink-0">✓</span>
                        <span className="truncate">{inc}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Starts from</span>
                    <span className="text-lg font-extrabold text-navy">₹{service.priceFrom}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link
                      to={`/services/${service.slug}`}
                      className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Booking Reassurance Banner */}
        <div className="mt-12 bg-gradient-to-r from-[#063327] to-[#0A243D] rounded-3xl p-6 sm:p-8 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-card">
          <div className="text-left space-y-1 max-w-xl">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Satisfaction & Damage Insurance Guarantee</span>
            </div>
            <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
              Need immediate service or custom assistance?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our dedicated booking desk or contact our 24/7 emergency response line.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={SUPPORT_CONTACTS.booking.tel}
              className="px-4 py-2.5 bg-white text-navy hover:bg-slate-100 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <Phone className="w-3.5 h-3.5 text-primary" />
              <span>Call {SUPPORT_CONTACTS.booking.number}</span>
            </a>

            <a
              href={SUPPORT_CONTACTS.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedServicesSection;
