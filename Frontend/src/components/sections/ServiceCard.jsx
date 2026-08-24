import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock } from 'lucide-react';
import { eventBus } from '@/core/services/EventBus';
import { analytics } from '@/core/services/AnalyticsService';

export const ServiceCard = ({ service, onBook }) => {
  if (!service) return null;

  const handleBookNow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    analytics.serviceView(service.id, service.title, service.priceFrom);
    if (onBook) {
      onBook(service);
    } else {
      eventBus.emit('open_app_handoff', service);
    }
  };

  const categorySlug = service.categorySlug || 'cleaning';
  const serviceSlug = service.slug || 'service';

  return (
    <div className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-card-hover hover:border-teal-200 transition-all duration-200 flex flex-col justify-between text-left">
      {/* Card Image Link */}
      <Link to={`/services/${categorySlug}/${serviceSlug}`} className="block relative overflow-hidden bg-slate-100 aspect-[16/9]">
        {service.image ? (
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-muted bg-slate-100">
            No image
          </div>
        )}
        {service.badge && (
          <span className="absolute top-3 left-3 bg-white/95 backdrop-blur-xs text-primary font-bold text-[11px] px-2.5 py-0.5 rounded-full shadow-xs">
            {service.badge}
          </span>
        )}
      </Link>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link to={`/services/${categorySlug}/${serviceSlug}`}>
            <h3 className="text-base font-bold text-navy group-hover:text-primary transition-colors font-heading line-clamp-1">
              {service.title}
            </h3>
          </Link>

          {/* Rating & Duration */}
          <div className="flex items-center flex-wrap gap-x-2.5 gap-y-1 text-xs text-slate-muted mt-2">
            <span className="inline-flex items-center gap-1 font-semibold text-navy">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{service.rating || '4.8'}</span>
              <span className="text-slate-muted font-normal">
                ({service.formattedReviews || `${service.reviewCount || 0}`})
              </span>
            </span>
            <span>•</span>
            <span className="inline-flex items-center gap-1 text-slate-text">
              <Clock className="w-3.5 h-3.5 text-slate-muted" />
              <span>{service.duration}</span>
            </span>
          </div>
        </div>

        {/* Card Footer: Price & CTA */}
        <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
          <div>
            <div className="text-[11px] text-slate-muted font-medium">Starts at</div>
            <div className="text-base font-extrabold text-navy">
              {service.formattedPrice || `₹${service.priceFrom}`}
            </div>
          </div>

          <button
            type="button"
            onClick={handleBookNow}
            className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-xs font-bold rounded-full transition-colors shadow-xs cursor-pointer active:scale-95"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
