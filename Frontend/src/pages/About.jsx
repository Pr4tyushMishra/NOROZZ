import React, { useEffect } from 'react';
import { Eye, Target } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { TeamLeadership } from '@/components/sections';
import { ASSETS } from '@/core/repositories/MockData';
import { analytics } from '@/core/services/AnalyticsService';

export const About = () => {
  useEffect(() => {
    analytics.pageView('/about', 'About Us — Company Story & Leadership — NOROZZ');
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="About Us — Transforming Home Services in India — NOROZZ"
        description="Founded with a vision to make daily maintenance, plumbing, carpentry, and cleaning painless. Meet our leadership team and explore our trust & safety commitment."
      />

      {/* 1. Our Story Section */}
      <section className="py-16 md:py-24 bg-surface">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center text-left">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Our Story
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy leading-tight font-heading">
                Transforming how homes connect with service professionals
              </h1>
              <p className="text-base sm:text-lg text-slate-text leading-relaxed">
                Founded with a vision to make daily maintenance, plumbing, carpentry, and cleaning absolutely painless. We build bridges between busy homeowners and premium experts, ensuring safety, standardized pricing, and absolute professionalism.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-card border border-slate-100 aspect-[4/3] bg-slate-100">
                <img
                  src={ASSETS.story}
                  alt="Norozz Leadership & Operations Team"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Vision & Mission Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 text-left">
            {/* Vision */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">Our Vision</h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                To become the most reliable, high-integrity marketplace for all household and domestic utility service needs in India.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/90 shadow-subtle space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">Our Mission</h3>
              <p className="text-sm text-slate-muted leading-relaxed">
                Empowering micro-entrepreneurs by giving them training, guaranteed business volume, and robust tech tools while ensuring premium services for customers.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Full-Width Teal Stat Band */}
      <section className="py-14 bg-primary text-white">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">5+</div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium uppercase tracking-wider">Cities Covered</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">500+</div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium uppercase tracking-wider">Verified Partners</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">5,000+</div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium uppercase tracking-wider">Happy Deliveries</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl sm:text-5xl font-extrabold font-heading tracking-tight">4.9/5</div>
              <div className="text-xs sm:text-sm text-teal-100 font-medium uppercase tracking-wider">User Star Rating</div>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Leadership Behind the Mission */}
      <SafeComponent name="TeamLeadership">
        <TeamLeadership />
      </SafeComponent>

      {/* 4. Trust & Safety Commitment */}
      <section className="py-16 bg-surface-soft/80 border-t border-slate-100">
        <Container>
          <div className="bg-primary-tint/50 rounded-3xl border border-teal-200/80 p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
              <div className="lg:col-span-8 space-y-4">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
                  Our Trust & Safety Commitment
                </h2>
                <p className="text-sm sm:text-base text-slate-text leading-relaxed">
                  Every Norozz service professional must pass multi-layered background verification, biometric check, and on-field training trials. We ensure absolute transparency with standard pricing and post-service deep sanitation checks.
                </p>
              </div>
              <div className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-56 h-auto drop-shadow-md">
                  <img
                    src={ASSETS.trustBadge}
                    alt="Guaranteed Security Safe & Secure Clean Home Badge"
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default About;
