import React, { useState, useEffect } from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import {
  HeroSection,
  CategoryGrid,
  TrustPillars,
  FeaturedServicesSection,
  TestimonialsCarousel,
  AppPromoBand,
  PartnerBand,
} from '@/components/sections';
import { categoryRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';

export const Home = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    analytics.pageView('/', 'Home — Quality home services, on demand');
    const loadData = async () => {
      try {
        const cats = await categoryRepository.getFeatured();
        setCategories(cats);
      } catch (err) {
        console.error('Failed to load categories', err);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'NOROZZ CARE PRIVATE LIMITED',
    url: 'https://www.norozz.com',
    logo: 'https://www.norozz.com/favicon.svg',
    description: 'On-demand verified home services marketplace.',
  };

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="NOROZZ — Quality home services, on demand"
        description="Book vetted, background-checked local professionals for cleaning, electrical, plumbing, carpentry, and more. Transparent pricing, 100% satisfaction guaranteed."
        schema={structuredData}
      />

      {/* 1. Hero Section */}
      <SafeComponent name="HeroSection">
        <HeroSection />
      </SafeComponent>

      {/* 2. "What do you need help with?" Category Grid */}
      <SafeComponent name="CategoryGrid">
        <CategoryGrid categories={categories} />
      </SafeComponent>

      {/* 3. "Why Norozz?" 3 Trust Pillars */}
      <SafeComponent name="TrustPillars">
        <TrustPillars />
      </SafeComponent>

      {/* 4. Featured Top Services Showcase (Replacing peace of mind banner) */}
      <SafeComponent name="FeaturedServicesSection">
        <FeaturedServicesSection />
      </SafeComponent>

      {/* 5. "Loved by homes across India" Testimonials */}
      <SafeComponent name="TestimonialsCarousel">
        <TestimonialsCarousel />
      </SafeComponent>

      {/* 6. "Book, track and pay from your phone" App Band */}
      <SafeComponent name="AppPromoBand">
        <AppPromoBand />
      </SafeComponent>

      {/* 7. "Are you a service professional? Join us" Partner Band */}
      <SafeComponent name="PartnerBand">
        <PartnerBand />
      </SafeComponent>
    </div>
  );
};

export default Home;
