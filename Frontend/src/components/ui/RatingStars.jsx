import React from 'react';
import { Star } from 'lucide-react';

export const RatingStars = ({ rating = 4.8, max = 5, size = 'sm', showValue = false }) => {
  const starSize = size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4';
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.3;

  return (
    <div className="inline-flex items-center gap-1 text-amber-400">
      <div className="flex">
        {[...Array(max)].map((_, i) => (
          <Star
            key={i}
            className={`${starSize} ${
              i < fullStars
                ? 'fill-amber-400 text-amber-400'
                : i === fullStars && hasHalfStar
                ? 'fill-amber-400/50 text-amber-400'
                : 'fill-slate-200 text-slate-200'
            }`}
          />
        ))}
      </div>
      {showValue && <span className="text-xs font-bold text-navy ml-1">{rating.toFixed(1)}</span>}
    </div>
  );
};
