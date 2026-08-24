import { BaseEntity } from './BaseEntity';

/**
 * Category Entity representing a high-level service domain (e.g. Cleaning, Plumbing).
 */
export class CategoryEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.name = data.name || 'Category';
    this.slug = data.slug || data.name?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'general';
    this.iconName = data.iconName || 'Sparkles';
    this.description = data.description || '';
    this.featured = Boolean(data.featured ?? true);
    this.serviceCount = Number(data.serviceCount || 0);
  }
}
