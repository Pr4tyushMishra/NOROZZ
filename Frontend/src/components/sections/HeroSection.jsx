import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { ASSETS } from '@/core/repositories/MockData';
import { analytics } from '@/core/services/AnalyticsService';

export const HeroSection = ({
  title = 'Quality home services, on demand',
  subtitle = 'Book vetted, background-checked local professionals for cleaning, electrical, plumbing, carpentry, and more. Satisfaction guaranteed.',
  searchPlaceholder = 'Search for cleaning, painting, pest control...',
  onSearch,
}) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      analytics.track('hero_search_submitted', { query });
      navigate(`/services?search=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-navy min-h-[460px] md:min-h-[540px] flex items-center">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero}
          alt="NOROZZ Verified Professional"
          className="w-full h-full object-cover object-center md:object-right opacity-90"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/70 to-navy/30 md:to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
        <div className="max-w-2xl text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-extrabold text-white leading-[1.15] tracking-tight font-heading">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl">
            {subtitle}
          </p>

          {/* Search Bar Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-white rounded-full p-1.5 shadow-2xl max-w-xl border border-white/20 focus-within:ring-2 focus-within:ring-primary transition-all"
          >
            <div className="pl-4 text-slate-muted">
              <Search className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={searchPlaceholder}
              className="w-full px-3 py-2.5 text-sm sm:text-base text-navy placeholder:text-slate-muted/70 bg-transparent focus:outline-none"
              aria-label="Search home services"
            />
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold rounded-full transition-colors shadow-sm cursor-pointer shrink-0"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
