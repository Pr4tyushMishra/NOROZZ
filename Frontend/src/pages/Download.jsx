import React, { useEffect } from 'react';
import { Smartphone, MapPin, Zap, ShieldCheck, Star } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { AppPhoneMockup } from '@/components/common/AppPhoneMockup';
import { analytics } from '@/core/services/AnalyticsService';

export const Download = () => {
  useEffect(() => {
    analytics.pageView('/download', 'Download NOROZZ App — iOS & Android');
  }, []);

  const handleStoreClick = (platform) => {
    analytics.appDownloadClick('download_landing_page', platform);
  };

  const appFeatures = [
    {
      icon: MapPin,
      title: 'Live GPS Pro Tracking',
      desc: 'Watch your service specialist arrive at your exact doorstep in real-time.',
    },
    {
      icon: Zap,
      title: 'Instant 60-Sec Booking',
      desc: 'Rebook your favorite cleaner, electrician, or plumber with saved addresses.',
    },
    {
      icon: ShieldCheck,
      title: 'Post-Service Warranty',
      desc: 'Access your 30-day warranty card and invoice receipts in one tap.',
    },
  ];

  return (
    <div className="min-h-screen bg-surface py-16 md:py-24 text-left">
      <SeoHead
        title="Download NOROZZ Mobile App — Android & iOS"
        description="Get the #1 rated home services app. Book vetted pros, track specialists in real-time, and get exclusive app discounts."
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero */}
          <div className="lg:col-span-7 space-y-6">
            <span className="px-3.5 py-1 bg-primary-tint text-primary font-bold text-xs rounded-full uppercase tracking-wider">
              Official Mobile App
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading leading-tight">
              Quality home services in the palm of your hand
            </h1>

            <p className="text-base sm:text-lg text-slate-text leading-relaxed max-w-xl">
              Download the NOROZZ app on Google Play or the App Store. Join over 10M+ satisfied households who book, manage, and rate home services with effortless convenience.
            </p>

            <div className="flex items-center gap-2 text-sm text-slate-text font-semibold">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span>4.8/5 Rating from 250,000+ app store reviews</span>
            </div>

            {/* Store Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('Google Play')}
                className="flex items-center gap-3 px-6 py-3.5 bg-navy text-white rounded-2xl hover:bg-slate-800 transition-colors shadow-md"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400">GET IT ON</div>
                  <div className="font-bold text-sm">Google Play</div>
                </div>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('App Store')}
                className="flex items-center gap-3 px-6 py-3.5 bg-navy text-white rounded-2xl hover:bg-slate-800 transition-colors shadow-md"
              >
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.5 2.66-1.25z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400">Download on</div>
                  <div className="font-bold text-sm">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Showcase with Authentic NOROZZ Live Platform Screen */}
          <div className="lg:col-span-5 flex justify-center py-4">
            <AppPhoneMockup showFloatingBadges={true} />
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 pt-16 border-t border-slate-100">
          {appFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-200/90 shadow-subtle space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-primary-tint text-primary flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h3 className="text-lg font-bold text-navy font-heading">{f.title}</h3>
                <p className="text-xs sm:text-sm text-slate-muted leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Download;
