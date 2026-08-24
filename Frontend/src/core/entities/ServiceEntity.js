import { BaseEntity } from './BaseEntity';

/**
 * Service Entity representing an on-demand home service.
 * Encapsulates pricing calculations, rating formatting, badge indicators, and tier resolution.
 */
export class ServiceEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.title = data.title || 'Untitled Service';
    this.slug = data.slug || this.generateSlug(this.title);
    this.categorySlug = data.categorySlug || 'general';
    this.categoryName = data.categoryName || 'General';
    this.rating = Number(data.rating || 4.8);
    this.reviewCount = Number(data.reviewCount || 0);
    this.duration = data.duration || '1-2 Hours';
    this.priceFrom = Number(data.priceFrom || 199);
    this.currency = data.currency || '₹';
    this.image = data.image || '';
    this.badge = data.badge || '';
    this.description = data.description || '';
    this.inclusions = Array.isArray(data.inclusions) ? data.inclusions : [];
    this.exclusions = Array.isArray(data.exclusions) ? data.exclusions : [];
    this.tiers = Array.isArray(data.tiers) ? data.tiers : [
      { id: 'standard', name: 'Standard Service', price: this.priceFrom, duration: this.duration, description: 'Basic complete service by certified pro.' },
      { id: 'premium', name: 'Deep Pro Service', price: Math.round(this.priceFrom * 1.6), duration: 'Extended', description: 'Comprehensive intensive treatment with specialized equipment.' }
    ];
    this.faqs = Array.isArray(data.faqs) ? data.faqs : [];
    this.cityAvailability = Array.isArray(data.cityAvailability) ? data.cityAvailability : ['bangalore', 'mumbai', 'delhi-ncr', 'hyderabad', 'chennai', 'pune'];
  }

  generateSlug(text) {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  get formattedPrice() {
    return `${this.currency}${this.priceFrom.toLocaleString('en-IN')}`;
  }

  get formattedReviews() {
    if (this.reviewCount >= 1000) {
      return `${(this.reviewCount / 1000).toFixed(0)}K reviews`;
    }
    return `${this.reviewCount} reviews`;
  }

  get ratingDisplay() {
    return `${this.rating.toFixed(1)} (${this.formattedReviews})`;
  }

  isAvailableInCity(citySlug) {
    if (!citySlug) return true;
    return this.cityAvailability.includes(citySlug.toLowerCase());
  }

  matchesSearch(term) {
    if (!term) return true;
    const clean = term.toLowerCase().trim();
    return (
      this.title.toLowerCase().includes(clean) ||
      this.categoryName.toLowerCase().includes(clean) ||
      this.description.toLowerCase().includes(clean)
    );
  }
}
