import { BaseEntity } from './BaseEntity';

/**
 * City Entity for multi-city coverage and local landing pages.
 */
export class CityEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.name = data.name || 'City';
    this.slug = data.slug || data.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'city';
    this.state = data.state || 'India';
    this.activePros = Number(data.activePros || 500);
    this.rating = Number(data.rating || 4.8);
    this.popularServices = Array.isArray(data.popularServices) ? data.popularServices : [];
    this.image = data.image || '';
    this.isHub = Boolean(data.isHub ?? false);
  }
}
