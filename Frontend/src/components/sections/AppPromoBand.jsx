import React from 'react';
import { Navigation, ShieldCheck } from 'lucide-react';
import { analytics } from '@/core/services/AnalyticsService';
import { Container } from '@/components/layout/Container';
import { AppPhoneMockup } from '@/components/common/AppPhoneMockup';

export const AppPromoBand = () => {
  const handleStoreClick = (platform) => {
    analytics.appDownloadClick('app_promo_band', platform);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-primary-tint/60 via-surface to-teal-50/40 border-t border-teal-100/60 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 border border-teal-200/60 text-xs font-bold text-teal-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Real-Time Pro Tracking Platform</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight font-heading">
              Book, track and pay seamlessly from your phone
            </h2>

            <p className="text-sm sm:text-base text-slate-text leading-relaxed max-w-xl">
              Get live GPS telemetry on your NOROZZ service specialist, manage recurring subscriptions, verify secret arrival OTPs, and enjoy exclusive app-only discounts with 100% verified professionals.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('Google Play')}
                className="flex items-center gap-2.5 px-5 py-3 bg-navy hover:bg-slate-800 text-white rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400 font-medium">Get it on</div>
                  <div className="font-bold text-xs tracking-tight">Google Play</div>
                </div>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('App Store')}
                className="flex items-center gap-2.5 px-5 py-3 bg-navy hover:bg-slate-800 text-white rounded-2xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.5 2.66-1.25z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400 font-medium">Download on</div>
                  <div className="font-bold text-xs tracking-tight">App Store</div>
                </div>
              </a>
            </div>

            {/* Clean Feature Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                  <Navigation className="w-4 h-4 fill-teal-600 animate-pulse" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy">Live GPS Tracking</h4>
                  <p className="text-[11px] text-slate-500">Real-time arrival radar & ETA</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border border-teal-100 shadow-sm">
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-navy">100% Verified Pros</h4>
                  <p className="text-[11px] text-slate-500">Police & skill certified</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Phone Mockup with Clean Screen Showcase */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end py-4">
            <AppPhoneMockup />
          </div>
        </div>
      </Container>
    </section>
  );
};
