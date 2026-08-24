import React, { useState, useEffect } from 'react';
import { Tag, Copy, Check, Gift, ArrowRight } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { offerRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';
import { Link } from 'react-router-dom';

export const Offers = () => {
  const [offers, setOffers] = useState([]);
  const [copiedCode, setCopiedCode] = useState(null);

  useEffect(() => {
    analytics.pageView('/offers', 'Offers & Promotions — NOROZZ');
    const loadOffers = async () => {
      const data = await offerRepository.getAll();
      setOffers(data);
    };
    loadOffers();
  }, []);

  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="min-h-screen bg-surface-soft/40 py-12 md:py-16 text-left">
      <SeoHead
        title="Promotions, Coupons & Referral Offers — NOROZZ"
        description="Exclusive discounts on full home cleaning, pest control, electrical and plumbing repairs. Use promo codes and earn referral credits."
      />

      <Container>
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Savings & Deals
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading mt-1">
            Current Offers & Coupons
          </h1>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            Apply these promotional coupon codes during booking in the NOROZZ app to enjoy instant cashbacks and discounts.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {offers.map((offer) => (
            <div
              key={offer.id}
              className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-primary-tint text-primary text-xs font-bold rounded-full">
                    {offer.badge}
                  </span>
                  <span className="text-xs text-slate-muted">Valid till {offer.validUntil}</span>
                </div>

                <h3 className="text-xl font-extrabold text-navy font-heading">
                  {offer.discountText}
                </h3>
                <h4 className="text-sm font-bold text-slate-text">{offer.title}</h4>
                <p className="text-xs text-slate-muted leading-relaxed">
                  {offer.description}
                </p>
              </div>

              <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                <div className="bg-slate-50 border border-dashed border-slate-300 rounded-xl px-3 py-1.5 font-mono font-bold text-xs text-navy tracking-wider">
                  {offer.code}
                </div>

                <button
                  type="button"
                  onClick={() => handleCopy(offer.code)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-primary hover:bg-primary-dark text-white rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  {copiedCode === offer.code ? (
                    <>
                      <Check className="w-3.5 h-3.5" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" /> Copy Code
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Referral Program Block */}
        <div className="bg-primary text-white rounded-3xl p-8 sm:p-12 shadow-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
                Refer your neighbors & earn ₹500 wallet credit
              </h2>
              <p className="text-sm sm:text-base text-teal-100 leading-relaxed max-w-xl">
                Every time a friend books and completes their first service using your unique referral invite code, you both receive ₹500 directly in your NOROZZ wallet.
              </p>
            </div>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                to="/download"
                className="px-6 py-3 bg-white text-navy font-bold text-sm rounded-full hover:bg-slate-100 transition-colors shadow-sm inline-flex items-center gap-2"
              >
                Get Referral Link in App <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Offers;
