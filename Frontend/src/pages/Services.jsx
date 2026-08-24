import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { FilterSidebar, ServiceCard } from '@/components/sections';
import { serviceRepository } from '@/core/repositories/ServiceRepository';
import { FilterStrategy } from '@/core/strategies/FilterStrategy';
import { analytics } from '@/core/services/AnalyticsService';
import { Search, SlidersHorizontal } from 'lucide-react';

export const Services = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category');
  const initialSearch = searchParams.get('search') || '';

  const [allServices, setAllServices] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    initialCategory ? [initialCategory] : []
  );
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [location, setLocation] = useState('Bangalore, IN');
  const [loading, setLoading] = useState(true);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  useEffect(() => {
    analytics.pageView('/services', 'Browse All Services — NOROZZ');
    const loadServices = async () => {
      try {
        const data = await serviceRepository.getAll();
        setAllServices(data);
      } catch (err) {
        console.error('Failed to load services', err);
      } finally {
        setLoading(false);
      }
    };
    loadServices();
  }, []);

  // Update category when query param changes
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && !selectedCategories.includes(cat)) {
      setSelectedCategories([cat]);
    }
  }, [searchParams]);

  const handleCategoryToggle = (categorySlug) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categorySlug)) {
        return prev.filter((c) => c !== categorySlug);
      } else {
        return [...prev, categorySlug];
      }
    });
  };

  const handleResetFilters = () => {
    setSelectedCategories([]);
    setSelectedPriceRange('all');
    setSearchTerm('');
    setSearchParams({});
  };

  // Filtered services through OOP Strategy Pattern
  const filteredServices = useMemo(() => {
    return FilterStrategy.filter(allServices, {
      search: searchTerm,
      categories: selectedCategories,
      priceRange: selectedPriceRange,
    });
  }, [allServices, searchTerm, selectedCategories, selectedPriceRange]);

  return (
    <div className="min-h-screen bg-surface-soft/40 py-10 md:py-14">
      <SeoHead
        title="Browse All Services — NOROZZ"
        description="Transparent pricing. Trusted professionals. Hassle-free booking. Browse cleaning, electrical, plumbing, pest control and home renovation services."
      />

      <Container>
        {/* Page Header */}
        <div className="mb-10 text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            Browse All Services
          </h1>
          <p className="text-sm sm:text-base text-slate-muted mt-1.5">
            Transparent pricing. Trusted professionals. Hassle-free booking.
          </p>
        </div>

        {/* Mobile Filter Toggle Button */}
        <div className="lg:hidden mb-6 flex items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3 top-3 text-slate-muted" />
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-white text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-navy shadow-xs"
          >
            <SlidersHorizontal className="w-4 h-4 text-primary" />
            Filters {selectedCategories.length > 0 && `(${selectedCategories.length})`}
          </button>
        </div>

        {/* Main Grid: Left Sidebar + Right Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Filter Sidebar (Desktop & Mobile Drawer) */}
          <div
            className={`lg:col-span-3 ${
              mobileFilterOpen ? 'block' : 'hidden lg:block'
            }`}
          >
            <SafeComponent name="FilterSidebar">
              <FilterSidebar
                selectedCategories={selectedCategories}
                onCategoryToggle={handleCategoryToggle}
                selectedPriceRange={selectedPriceRange}
                onPriceRangeChange={setSelectedPriceRange}
                location={location}
                onLocationChange={setLocation}
                onReset={handleResetFilters}
              />
            </SafeComponent>
          </div>

          {/* Right Services Grid */}
          <div className="lg:col-span-9 space-y-6 text-left">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-navy font-heading">
                Featured & Popular Services
              </h2>
              <span className="text-xs text-slate-muted font-medium">
                Showing {filteredServices.length} services
              </span>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl border border-slate-200 p-5 h-72 animate-pulse"
                  />
                ))}
              </div>
            ) : filteredServices.length === 0 ? (
              <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center space-y-3">
                <p className="text-base font-bold text-navy">No services found</p>
                <p className="text-xs text-slate-muted">
                  Try adjusting your search terms or filters to find what you need.
                </p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-primary-tint text-primary text-xs font-bold rounded-full hover:bg-teal-100 transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                  <SafeComponent key={service.id} name={`ServiceCard_${service.id}`}>
                    <ServiceCard service={service} />
                  </SafeComponent>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Services;
