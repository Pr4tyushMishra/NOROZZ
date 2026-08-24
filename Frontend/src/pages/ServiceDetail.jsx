import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Star, Clock, Check, X, Shield, RefreshCw } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { PricingTiers, ServiceCard } from '@/components/sections';
import { serviceRepository } from '@/core/repositories/ServiceRepository';
import { analytics } from '@/core/services/AnalyticsService';

export const ServiceDetail = () => {
  const { service: serviceSlug, category: categorySlug } = useParams();
  const [service, setService] = useState(null);
  const [relatedServices, setRelatedServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchService = async () => {
      setLoading(true);
      try {
        const found = await serviceRepository.getBySlug(serviceSlug);
        setService(found);
        if (found) {
          analytics.pageView(`/services/${categorySlug}/${serviceSlug}`, `${found.title} — NOROZZ`);
          const allInCat = await serviceRepository.getByCategory(found.categorySlug);
          setRelatedServices(allInCat.filter(s => s.id !== found.id).slice(0, 3));
        }
      } catch (err) {
        console.error('Failed to load service detail', err);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [serviceSlug, categorySlug]);

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <RefreshCw className="w-8 h-8 text-primary animate-spin" />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-2xl font-bold text-navy mb-2">Service Not Found</h2>
        <p className="text-sm text-slate-muted mb-4">
          The requested service could not be located in our catalog.
        </p>
        <Link
          to="/services"
          className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark"
        >
          Explore All Services
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface-soft/30 py-10 md:py-14">
      <SeoHead
        title={`${service.title} — NOROZZ Home Services`}
        description={service.description}
      />

      <Container>
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-xs text-slate-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/services" className="hover:text-primary transition-colors">Services</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to={`/services?category=${service.categorySlug}`} className="hover:text-primary transition-colors">
            {service.categoryName}
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-semibold truncate max-w-xs">{service.title}</span>
        </nav>

        {/* Top Grid: Main Service Info + Sticky Pricing Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start text-left">
          {/* Left Column: Media + Inclusions + Reviews */}
          <div className="lg:col-span-7 space-y-10">
            {/* Hero Image */}
            <div className="rounded-3xl overflow-hidden shadow-card border border-slate-200/90 aspect-[16/10] bg-slate-100 relative">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {service.badge && (
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-primary font-bold text-xs px-3 py-1 rounded-full shadow-xs">
                  {service.badge}
                </span>
              )}
            </div>

            {/* Title & Metadata */}
            <div className="space-y-3">
              <div className="text-xs font-bold text-primary uppercase tracking-wider">
                {service.categoryName}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
                {service.title}
              </h1>

              <div className="flex items-center gap-4 text-sm text-slate-muted pt-1">
                <span className="flex items-center gap-1.5 font-bold text-navy">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{service.rating}</span>
                  <span className="text-slate-muted font-normal">({service.formattedReviews})</span>
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5 text-slate-text">
                  <Clock className="w-4 h-4 text-slate-muted" />
                  <span>{service.duration}</span>
                </span>
              </div>

              <p className="text-base text-slate-text leading-relaxed pt-2">
                {service.description}
              </p>
            </div>

            {/* What's Included / Excluded */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-subtle space-y-6">
              <h3 className="text-xl font-bold text-navy font-heading">
                What's included in this service
              </h3>

              <div className="space-y-3">
                {service.inclusions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-slate-text">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-brandSuccess flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {service.exclusions && service.exclusions.length > 0 && (
                <div className="pt-4 border-t border-slate-100 space-y-3">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-muted">
                    What's not included
                  </h4>
                  {service.exclusions.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs text-slate-muted">
                      <div className="w-4 h-4 rounded-full bg-red-50 text-brandDanger flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Trust & Safety Banner */}
            <div className="bg-primary-tint/60 border border-teal-200/70 rounded-3xl p-6 flex items-start gap-4">
              <Shield className="w-8 h-8 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="text-base font-bold text-navy font-heading">
                  NOROZZ Verified Specialist Commitment
                </h4>
                <p className="text-xs sm:text-sm text-slate-text mt-1 leading-relaxed">
                  Every specialist arrives in complete uniform with standardized kit, passes multi-layered identity and biometric checks, and is backed by up to ₹10,000 damage protection.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Sticky Pricing Tiers */}
          <div className="lg:col-span-5">
            <SafeComponent name="PricingTiers">
              <PricingTiers service={service} />
            </SafeComponent>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="mt-20 pt-12 border-t border-slate-200 text-left space-y-8">
            <h2 className="text-2xl font-bold text-navy font-heading">
              Related services in {service.categoryName}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedServices.map((rel) => (
                <ServiceCard key={rel.id} service={rel} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

export default ServiceDetail;
