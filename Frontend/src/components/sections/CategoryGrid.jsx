import React from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  ShieldAlert,
  Cpu,
  Home,
  ArrowRight,
} from 'lucide-react';
import { analytics } from '@/core/services/AnalyticsService';
import { Container } from '@/components/layout/Container';

// Icon map resolving icon names to lucide components
const ICON_MAP = {
  Sparkles,
  Droplets,
  Zap,
  Paintbrush,
  Hammer,
  ShieldAlert,
  Cpu,
  Home,
};

export const CategoryTile = ({ category, onClick }) => {
  const IconComponent = ICON_MAP[category.iconName] || Sparkles;

  const handleClick = () => {
    analytics.serviceCategoryView(category.slug, category.name);
    if (onClick) onClick(category);
  };

  return (
    <Link
      to={`/services?category=${category.slug}`}
      onClick={handleClick}
      className="group flex flex-col items-center justify-center p-6 bg-white hover:bg-slate-50/80 border border-slate-200/80 rounded-2xl transition-all duration-200 hover:shadow-card hover:border-teal-200 text-center"
    >
      <div className="w-16 h-16 rounded-2xl bg-primary-tint/70 text-primary flex items-center justify-center mb-3.5 group-hover:scale-105 group-hover:bg-primary-tint transition-all">
        <IconComponent className="w-7 h-7 stroke-[1.8]" />
      </div>
      <span className="text-sm font-semibold text-navy group-hover:text-primary transition-colors">
        {category.name}
      </span>
    </Link>
  );
};

export const CategoryGrid = ({
  categories = [],
  title = 'What do you need help with?',
  subtitle = 'Explore our range of home services tailored for your convenience.',
  onCategoryClick,
}) => {
  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container>
        <div className="mb-10 text-left">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
            {title}
          </h2>
          <p className="text-sm sm:text-base text-slate-muted mt-1.5">
            {subtitle}
          </p>
        </div>

        {/* 8-Grid Display (4 columns desktop, 2 tablet, 2 mobile) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((category) => (
            <CategoryTile
              key={category.id || category.slug}
              category={category}
              onClick={onCategoryClick}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
