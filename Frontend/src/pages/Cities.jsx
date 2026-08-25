import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Users, Star, ArrowRight } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { cityRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';

export const Cities = () => {
  const [cities, setCities] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    analytics.pageView('/cities', 'Cities Covered — NOROZZ');
    const loadCities = async () => {
      const data = await cityRepository.getAll();
      setCities(data);
    };
    loadCities();
  }, []);

  const filteredCities = cities.filter(c =>
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.state.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-surface-soft/40 py-12 md:py-16">
      <SeoHead
        title="Cities Covered Across India — NOROZZ"
        description="NOROZZ home services are live across Bangalore, Mumbai, Delhi NCR, Hyderabad, Chennai and Pune."
      />

      <Container>
        <div className="max-w-2xl text-left mb-10">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            City Availability Explorer
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading mt-1">
            Now live across 6 major hubs in India
          </h1>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            Find certified plumbers, electricians, house cleaners, and handymen near your locality.
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="Search your city or state..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
          </div>
        </div>

        {/* Cities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCities.map((city) => (
            <Link
              key={city.id}
              to={`/services?city=${city.slug}`}
              onClick={() => analytics.citySelected(city.name, city.slug)}
              className="group bg-white p-6 rounded-2xl border border-slate-200/90 shadow-subtle hover:shadow-card hover:border-teal-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  {city.isHub && (
                    <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-[11px] font-bold rounded-full">
                      Primary Hub
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-navy group-hover:text-primary transition-colors font-heading">
                  {city.name}
                </h3>
                <p className="text-xs text-slate-muted">{city.state}</p>

                <div className="flex items-center gap-4 text-xs text-slate-muted mt-4 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-primary" />
                    <strong>{city.activePros}+</strong> Active Pros
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    <strong>{city.rating}</strong> Rating
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 flex items-center text-xs font-bold text-primary group-hover:underline">
                <span>View Available Services</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Cities;
