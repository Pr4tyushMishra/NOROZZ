import React from 'react';
import { ASSETS } from '@/core/repositories/MockData';
import { analytics } from '@/core/services/AnalyticsService';
import { Container } from '@/components/layout/Container';

export const AppPromoBand = () => {
  const handleStoreClick = (platform) => {
    analytics.appDownloadClick('app_promo_band', platform);
  };

  return (
    <section className="py-16 md:py-20 bg-primary-tint/60 border-t border-teal-100/60 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 text-left space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy leading-tight font-heading">
              Book, track and pay from your phone
            </h2>

            <p className="text-sm sm:text-base text-slate-text leading-relaxed max-w-xl">
              Download our top-rated app to get live updates on your service expert location, manage recurring subscriptions, and enjoy exclusive app-only discounts.
            </p>

            <div className="flex flex-wrap gap-3.5 pt-2">
              <a
                href="https://play.google.com/store"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('Google Play')}
                className="flex items-center gap-2.5 px-5 py-3 bg-navy hover:bg-slate-800 text-white rounded-xl transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400">Get it on</div>
                  <div className="font-semibold text-xs">Google Play</div>
                </div>
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleStoreClick('App Store')}
                className="flex items-center gap-2.5 px-5 py-3 bg-navy hover:bg-slate-800 text-white rounded-xl transition-colors shadow-sm"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.5 2.66-1.25z"/>
                </svg>
                <div className="text-left leading-tight">
                  <div className="text-[10px] uppercase text-slate-400">Download on</div>
                  <div className="font-semibold text-xs">App Store</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[280px] drop-shadow-2xl hover:scale-105 transition-transform duration-300">
              <img
                src={ASSETS.phoneMock}
                alt="Norozz Mobile App Tracking Screen"
                className="w-full h-auto rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
