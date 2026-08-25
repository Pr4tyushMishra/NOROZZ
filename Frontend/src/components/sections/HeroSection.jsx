import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { ASSETS, SUPPORT_CONTACTS } from '@/core/repositories/MockData';
import { analytics } from '@/core/services/AnalyticsService';

export const HeroSection = ({
  titleLine1 = 'Trusted Care Services',
  titleLine2 = 'In Minutes!',
  subtitle = 'Your home, professionally cleaned & repaired - exactly when you need it.',
}) => {
  const handleStoreClick = (platform) => {
    analytics.track('app_download_clicked', { platform, source: 'hero_section' });
  };

  const liveCities = [
    { name: 'Bengaluru', slug: 'bangalore' },
    { name: 'Delhi', slug: 'delhi-ncr' },
    { name: 'Noida', slug: 'delhi-ncr' },
    { name: 'Gurgaon', slug: 'delhi-ncr' },
    { name: 'Mumbai', slug: 'mumbai' },
    { name: 'Pune', slug: 'pune' },
    { name: 'Hyderabad', slug: 'hyderabad' },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-[#F7FAF8] via-[#FFFFFF] to-[#F2F8F5] border-b border-slate-150/80 pt-10 sm:pt-14 lg:pt-16 pb-0">

      {/* Background Soft Ambient Green Glow on the Right */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute -top-24 left-10 w-80 h-80 bg-teal-50/50 rounded-full blur-2xl pointer-events-none -z-0" />

      {/* Main Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-end">

          {/* Left Column: Pill, Headlines, Store Badges, Ratings, Live Cities */}
          <div className="lg:col-span-7 xl:col-span-7 text-left pb-10 sm:pb-14 lg:pb-16 space-y-5 sm:space-y-6">

            {/* Top Pill: Trusted by 5,000+ homes · 6 cities live */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs text-xs font-semibold text-slate-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
              <span>Trusted by 5,000+ homes · 6 cities live</span>
            </div>

            {/* Main Title */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[58px] xl:text-[64px] font-black text-[#0f172a] leading-[1.08] tracking-tight font-heading">
                {titleLine1}
                <br />
                <span className="text-[#0f172a]">{titleLine2}</span>
              </h1>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 font-normal leading-relaxed max-w-xl">
              {subtitle}
            </p>

            {/* Request NOROZZ in your locality Link */}
            <div className="pt-1">
              <Link
                to="/cities"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-primary hover:text-primary-dark transition-colors group"
              >
                <span>Request NOROZZ in your locality</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* App Store & Google Play Download Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-1">
              {/* Google Play */}
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('Google Play')}
                className="flex items-center gap-3 px-5 py-2.5 bg-black hover:bg-slate-900 text-white rounded-xl transition-all shadow-sm hover:shadow-md shrink-0"
              >
                <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">GET IT ON</div>
                  <div className="font-bold text-sm tracking-tight">Google Play</div>
                </div>
              </a>

              {/* App Store */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('App Store')}
                className="flex items-center gap-3 px-5 py-2.5 bg-black hover:bg-slate-900 text-white rounded-xl transition-all shadow-sm hover:shadow-md shrink-0"
              >
                <svg className="w-5 h-5 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.5 2.66-1.25z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[9px] uppercase tracking-wider text-slate-400 font-semibold">Download on the</div>
                  <div className="font-bold text-sm tracking-tight">App Store</div>
                </div>
              </a>

              {/* Direct Booking Helpline Pill */}
              <a
                href={SUPPORT_CONTACTS.booking.tel}
                className="inline-flex items-center gap-1.5 px-4 py-3 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 rounded-xl text-xs font-bold text-emerald-800 transition-colors shadow-2xs shrink-0"
              >
                <Phone className="w-4 h-4 text-emerald-700 shrink-0" />
                <span>Call Booking: <strong>{SUPPORT_CONTACTS.booking.number}</strong></span>
              </a>
            </div>

            {/* Star Rating Row */}
            <div className="flex items-center gap-2 pt-1 text-xs sm:text-sm text-slate-700">
              <div className="flex text-emerald-600 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                ))}
              </div>
              <span className="font-extrabold text-slate-900">4.9</span>
              <span className="text-slate-500 font-medium">from 5,000+ ratings</span>
            </div>

            {/* LIVE IN City Tags Row */}
            <div className="pt-2 border-t border-slate-200/80 flex flex-wrap items-center gap-2 text-xs">
              <span className="text-[11px] font-extrabold tracking-wider text-slate-400 uppercase mr-1">
                LIVE IN
              </span>
              {liveCities.map((city) => (
                <Link
                  key={city.name}
                  to={`/services?city=${city.slug}`}
                  className="px-3 py-1.5 bg-white hover:bg-slate-100 text-slate-700 font-medium text-xs rounded-full border border-slate-200/90 shadow-2xs transition-colors"
                >
                  {city.name}
                </Link>
              ))}
              <Link
                to="/cities"
                className="px-3 py-1.5 text-primary font-bold text-xs hover:underline flex items-center gap-1"
              >
                <span>+ 4 more cities</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>

          {/* Right Column: High-Res Cutout Image of NOROZZ Specialist */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end w-full relative">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[480px]">

              {/* Soft decorative glow underneath image */}
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-200/50 via-teal-100/30 to-transparent rounded-full blur-2xl -z-10" />

              {/* Cutout Hero Image standing at the bottom edge */}
              <img
                src={ASSETS.heroCutout || ASSETS.hero}
                alt="NOROZZ Professional Home Service Partner"
                className="w-full h-auto max-h-[580px] lg:max-h-[640px] object-contain object-bottom drop-shadow-xl select-none block"
                loading="eager"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
