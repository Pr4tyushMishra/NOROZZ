import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Star, ShieldCheck, CheckCircle2 } from 'lucide-react';
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

  const handleQuickTagClick = (tag) => {
    setQuery(tag);
    navigate(`/services?search=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="relative w-full overflow-hidden bg-navy text-white">
      {/* Ambient background glow & tech pattern */}
      <div className="absolute inset-0 z-0 bg-[#07131D]">
        {/* Desktop panoramic background */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src={ASSETS.hero}
            alt="NOROZZ Verified Home Services Platform"
            className="w-full h-full object-cover object-right opacity-90 select-none pointer-events-none"
            loading="eager"
          />
          {/* Subtle directional gradient to guarantee text readability on desktop */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07131D] via-[#07131D]/90 to-transparent w-[58%]" />
        </div>

        {/* Ambient radial lighting for depth */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Subtitle, Search Form & Quick Chips */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Trust Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold text-teal-200">
              <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
              <span>100% Background Verified Pros</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.15] tracking-tight font-heading">
              {title}
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              {subtitle}
            </p>

            {/* Search Bar Form */}
            <form
              onSubmit={handleSearchSubmit}
              className="flex items-center bg-white rounded-full p-1.5 sm:p-2 shadow-2xl max-w-xl border border-white/20 focus-within:ring-2 focus-within:ring-primary transition-all"
            >
              <div className="pl-3 sm:pl-4 text-slate-400">
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={searchPlaceholder}
                className="w-full px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm md:text-base text-navy placeholder:text-slate-400 bg-transparent focus:outline-none"
                aria-label="Search home services"
              />
              <button
                type="submit"
                className="px-4 sm:px-6 py-2 sm:py-2.5 bg-primary hover:bg-primary-dark text-white text-xs sm:text-sm font-bold rounded-full transition-colors shadow-sm cursor-pointer shrink-0"
              >
                Search
              </button>
            </form>

            {/* Popular Quick Suggestions */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs text-slate-300">
              <span className="text-slate-400">Popular:</span>
              {['Deep Cleaning', 'Electrician', 'Plumber', 'Pest Control'].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => handleQuickTagClick(item)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 text-[11px] sm:text-xs transition-colors cursor-pointer"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Rating & Guarantee Proof Badges */}
            <div className="flex items-center gap-6 pt-3 border-t border-white/10 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="font-bold text-white">4.8 / 5</span>
                <span className="text-slate-400 hidden sm:inline">(10M+ bookings)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>₹10,000 Damage Cover</span>
              </div>
            </div>
          </div>

          {/* Right Column (Mobile & Tablet Visual Showcase) */}
          <div className="lg:hidden mt-4 flex justify-center w-full">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-b from-[#0A2233] to-[#07131D] p-3 sm:p-4">
              <img
                src={ASSETS.hero}
                alt="NOROZZ App Experience"
                className="w-full h-auto object-cover rounded-xl"
                loading="eager"
              />
              <div className="mt-3 text-center">
                <span className="text-[11px] text-teal-300 font-medium tracking-wide">
                  📱 Book, track & pay seamlessly from the NOROZZ app
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Spacer on Desktop */}
          <div className="hidden lg:block lg:col-span-5 pointer-events-none" />

        </div>
      </div>
    </section>
  );
};
