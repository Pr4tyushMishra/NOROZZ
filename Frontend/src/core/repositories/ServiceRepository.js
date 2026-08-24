import { BaseRepository } from './BaseRepository';
import { ServiceEntity } from '../entities/ServiceEntity';
import { SEED_SERVICES } from './MockData';

/**
 * Service Repository handling query filters, price range criteria, and category lookups.
 */
export class ServiceRepository extends BaseRepository {
  constructor() {
    super(ServiceEntity, SEED_SERVICES);
  }

  async getFeatured(limit = 6) {
    const all = await this.getAll();
    return all.slice(0, limit);
  }

  async getBySlug(slug) {
    return this.findOne(s => s.slug === slug);
  }

  async getByCategory(categorySlug) {
    if (!categorySlug || categorySlug === 'all') return this.getAll();
    return this.find(s => s.categorySlug === categorySlug || s.categoryName.toLowerCase().includes(categorySlug.toLowerCase()));
  }

  async filterServices({ search = '', category = 'all', priceRange = 'all', city = '' } = {}) {
    const all = await this.getAll();
    return all.filter(service => {
      // Search term
      if (search && !service.matchesSearch(search)) return false;

      // Category filter
      if (category && category !== 'all') {
        const catLower = category.toLowerCase();
        const matchesCategory =
          service.categorySlug.toLowerCase() === catLower ||
          service.categoryName.toLowerCase().includes(catLower);
        if (!matchesCategory) return false;
      }

      // City filter
      if (city && !service.isAvailableInCity(city)) return false;

      // Price range
      if (priceRange && priceRange !== 'all') {
        const price = service.priceFrom;
        if (priceRange === 'under-500' && price >= 500) return false;
        if (priceRange === '500-1500' && (price < 500 || price > 1500)) return false;
        if (priceRange === '1500-3000' && (price < 1500 || price > 3000)) return false;
        if (priceRange === 'above-3000' && price <= 3000) return false;
      }

      return true;
    });
  }
}

export const serviceRepository = new ServiceRepository();
