import React from 'react';
import { MapPin, RotateCcw } from 'lucide-react';

export const FilterSidebar = ({
  selectedCategories = [],
  onCategoryToggle,
  selectedPriceRange = 'all',
  onPriceRangeChange,
  location = 'Bangalore, IN',
  onLocationChange,
  onReset,
}) => {
  const categoryOptions = [
    { label: 'Cleaning & Pest', value: 'cleaning' },
    { label: 'Electricians & Plumbers', value: 'plumbing' },
    { label: 'Painters & Carpenters', value: 'painting' },
    { label: 'Appliance Repair', value: 'appliance-repair' },
    { label: 'Home Renovations', value: 'home-renovation' },
  ];

  const priceOptions = [
    { label: 'All Prices', value: 'all' },
    { label: 'Under ₹500', value: 'under-500' },
    { label: '₹500 - ₹1,500', value: '500-1500' },
    { label: '₹1,500 - ₹3,000', value: '1500-3000' },
    { label: 'Above ₹3,000', value: 'above-3000' },
  ];

  return (
    <aside className="bg-white rounded-2xl border border-slate-200/90 p-6 space-y-6 text-left shadow-subtle sticky top-28">
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <h3 className="text-base font-bold text-navy font-heading">Filters</h3>
        {onReset && (
          <button
            onClick={onReset}
            className="text-xs text-primary hover:text-primary-dark font-semibold flex items-center gap-1"
          >
            <RotateCcw className="w-3 h-3" /> Reset
          </button>
        )}
      </div>

      {/* Location Filter */}
      <div className="space-y-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-muted">
          Your Location
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-muted">
            <MapPin className="w-4 h-4 text-primary" />
          </div>
          <input
            type="text"
            value={location}
            onChange={(e) => onLocationChange && onLocationChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-sm text-navy bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:bg-white transition-all font-medium"
            placeholder="Enter city or area..."
          />
        </div>
      </div>

      {/* Category Checkbox Group */}
      <div className="space-y-3 pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-muted">
          Category
        </label>
        <div className="space-y-2.5">
          {categoryOptions.map((cat) => {
            const isChecked = selectedCategories.includes(cat.value);
            return (
              <label
                key={cat.value}
                className="flex items-center gap-2.5 text-sm text-slate-text cursor-pointer hover:text-navy select-none"
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => onCategoryToggle && onCategoryToggle(cat.value)}
                  className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 transition-colors accent-primary cursor-pointer"
                />
                <span className={isChecked ? 'font-semibold text-primary' : ''}>
                  {cat.label}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Price Range Radio Group */}
      <div className="space-y-3 pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-muted">
          Price Range
        </label>
        <div className="space-y-2.5">
          {priceOptions.map((price) => (
            <label
              key={price.value}
              className="flex items-center gap-2.5 text-sm text-slate-text cursor-pointer hover:text-navy select-none"
            >
              <input
                type="radio"
                name="priceRange"
                value={price.value}
                checked={selectedPriceRange === price.value}
                onChange={() => onPriceRangeChange && onPriceRangeChange(price.value)}
                className="w-4 h-4 text-primary focus:ring-primary border-slate-300 accent-primary cursor-pointer"
              />
              <span className={selectedPriceRange === price.value ? 'font-semibold text-primary' : ''}>
                {price.label}
              </span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
};
