import React, { useState } from 'react';
import { Check, ShieldCheck, Clock } from 'lucide-react';
import { eventBus } from '@/core/services/EventBus';
import { analytics } from '@/core/services/AnalyticsService';
import { Button } from '@/components/ui';

export const PricingTiers = ({ service }) => {
  if (!service || !service.tiers || service.tiers.length === 0) return null;

  const [selectedTierId, setSelectedTierId] = useState(service.tiers[0]?.id);
  const activeTier = service.tiers.find(t => t.id === selectedTierId) || service.tiers[0];

  const handleProceed = () => {
    analytics.track('pricing_tier_proceed', {
      service: service.title,
      tier: activeTier.name,
      price: activeTier.price,
    });
    eventBus.emit('open_app_handoff', {
      ...service,
      priceFrom: activeTier.price,
      title: `${service.title} (${activeTier.name})`,
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-card text-left space-y-6 sticky top-28">
      <div>
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          Select Package Option
        </span>
        <h3 className="text-xl font-bold text-navy mt-1 font-heading">
          Pricing & Duration
        </h3>
      </div>

      {/* Tier Options Radio Grid */}
      <div className="space-y-3">
        {service.tiers.map((tier) => {
          const isSelected = tier.id === activeTier.id;
          return (
            <div
              key={tier.id}
              onClick={() => setSelectedTierId(tier.id)}
              className={`p-4 rounded-2xl border-2 transition-all cursor-pointer ${
                isSelected
                  ? 'border-primary bg-primary-tint/40 shadow-xs'
                  : 'border-slate-200 hover:border-slate-300 bg-white'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div
                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                      isSelected ? 'border-primary' : 'border-slate-300'
                    }`}
                  >
                    {isSelected && <div className="w-2 h-2 rounded-full bg-primary" />}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{tier.name}</div>
                    <div className="text-xs text-slate-muted flex items-center gap-1 mt-0.5">
                      <Clock className="w-3 h-3" /> {tier.duration}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-base font-extrabold text-navy">
                    ₹{tier.price.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>
              {tier.description && (
                <p className="text-xs text-slate-muted mt-2.5 pl-6">
                  {tier.description}
                </p>
              )}
            </div>
          );
        })}
      </div>

      {/* Trust guarantees list */}
      <div className="space-y-2 pt-2 border-t border-slate-100 text-xs text-slate-muted">
        <div className="flex items-center gap-2">
          <Check className="w-4 h-4 text-brandSuccess shrink-0" />
          <span>Transparent upfront pricing with zero hidden fees</span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
          <span>100% Redo Guarantee & ₹10,000 damage coverage</span>
        </div>
      </div>

      {/* Action Button */}
      <Button
        variant="primary"
        size="lg"
        className="w-full rounded-xl"
        onClick={handleProceed}
      >
        Proceed to Booking
      </Button>
    </div>
  );
};
