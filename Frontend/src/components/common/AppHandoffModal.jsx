import React, { useState, useEffect } from 'react';
import { X, Smartphone, CheckCircle, ArrowRight, Shield, QrCode } from 'lucide-react';
import { analytics } from '@/core/services/AnalyticsService';
import { authService } from '@/core/services/AuthService';
import { eventBus } from '@/core/services/EventBus';
import { Link } from 'react-router-dom';

/**
 * AppHandoffModal implements the documented Section 8.1 hand-off workflow.
 * Triggered on 'open_app_handoff' event when visitor clicks 'Book Now'.
 */
export const AppHandoffModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [serviceData, setServiceData] = useState(null);
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());

  useEffect(() => {
    const unsubscribeOpen = eventBus.on('open_app_handoff', (data) => {
      setServiceData(data);
      setIsOpen(true);
      if (data?.title) {
        analytics.track('handoff_modal_opened', { service: data.title, price: data.priceFrom });
      }
    });

    const unsubscribeAuth = eventBus.on('auth_state_changed', (user) => {
      setCurrentUser(user);
    });

    return () => {
      unsubscribeOpen();
      unsubscribeAuth();
    };
  }, []);

  if (!isOpen) return null;

  const handleClose = () => {
    setIsOpen(false);
    setServiceData(null);
  };

  const handleStoreClick = (platform) => {
    analytics.appDownloadClick('handoff_modal', platform);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/60 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 animate-slide-up">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-slate-muted hover:text-navy hover:bg-slate-100 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 bg-primary-tint text-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
            <Smartphone className="w-7 h-7" />
          </div>
          <span className="inline-block px-3 py-1 bg-teal-50 text-primary text-xs font-semibold rounded-full mb-2">
            NOROZZ Instant Booking
          </span>
          <h3 className="text-2xl font-bold text-navy">
            {serviceData?.title ? `Book ${serviceData.title}` : 'Complete Booking in App'}
          </h3>
          <p className="text-sm text-slate-muted mt-1">
            Enjoy transparent upfront rates, verified pros, and real-time live tracking in the mobile app.
          </p>
        </div>

        {/* Service Highlight Card */}
        {serviceData && (
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold text-slate-muted uppercase tracking-wider">
                {serviceData.categoryName || 'Service'}
              </div>
              <div className="text-base font-bold text-navy">{serviceData.title}</div>
              <div className="text-xs text-primary font-medium mt-0.5">
                ★ {serviceData.rating || '4.8'} • {serviceData.duration || 'Standard'}
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-muted">Starting at</div>
              <div className="text-lg font-bold text-primary">
                {serviceData.formattedPrice || `₹${serviceData.priceFrom || 199}`}
              </div>
            </div>
          </div>
        )}

        {/* Auth status gate */}
        {!currentUser ? (
          <div className="bg-primary-tint/60 border border-teal-200/60 rounded-2xl p-4 mb-6 text-center">
            <div className="text-sm font-semibold text-navy mb-1">
              Have an account or need to sign up?
            </div>
            <p className="text-xs text-slate-muted mb-3">
              Sign in or create your profile to auto-sync your booking with the mobile app.
            </p>
            <div className="flex gap-2 justify-center">
              <Link
                to="/sign-in"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-primary bg-white border border-teal-300 rounded-full hover:bg-teal-50 transition-colors"
              >
                Sign In
              </Link>
              <Link
                to="/register"
                onClick={handleClose}
                className="px-4 py-2 text-xs font-semibold text-white bg-primary rounded-full hover:bg-primary-dark transition-colors"
              >
                Create Account
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs text-brandSuccess font-medium mb-4 bg-green-50 p-2.5 rounded-xl border border-green-200">
            <CheckCircle className="w-4 h-4 shrink-0" />
            <span>Signed in as <strong>{currentUser.name}</strong>. Ready to book!</span>
          </div>
        )}

        {/* App Download / Store Buttons */}
        <div className="space-y-3">
          <div className="text-center text-xs font-semibold text-slate-muted tracking-wide uppercase">
            Download App to Confirm Slot
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleStoreClick('Google Play')}
              className="flex items-center justify-center gap-2.5 px-4 py-3 bg-navy text-white rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
              </svg>
              <span>Google Play</span>
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleStoreClick('App Store')}
              className="flex items-center justify-center gap-2.5 px-4 py-3 bg-navy text-white rounded-xl hover:bg-slate-800 transition-colors text-sm font-medium"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-1.99.6-2.64 1.36-.57.65-1.07 1.72-.94 2.74 1 .08 2.04-.5 2.66-1.25z"/>
              </svg>
              <span>App Store</span>
            </a>
          </div>
        </div>

        {/* 100% Guarantee badge footer */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-center gap-2 text-xs text-slate-muted">
          <Shield className="w-4 h-4 text-brandSuccess" />
          <span>NOROZZ 100% Satisfaction & Insurance Guarantee</span>
        </div>
      </div>
    </div>
  );
};
