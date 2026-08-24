import { BaseRepository } from './BaseRepository';
import { CategoryEntity } from '../entities/CategoryEntity';
import { CityEntity } from '../entities/CityEntity';
import { OfferEntity, FaqEntity, BlogPostEntity } from '../entities/CommonEntities';
import {
  SEED_CATEGORIES,
  SEED_CITIES,
  SEED_OFFERS,
  SEED_FAQS,
  SEED_BLOGS,
  SEED_TEAM,
  SEED_TESTIMONIALS
} from './MockData';

export class CategoryRepository extends BaseRepository {
  constructor() {
    super(CategoryEntity, SEED_CATEGORIES);
  }

  async getFeatured() {
    return this.find(c => c.featured);
  }

  async getBySlug(slug) {
    return this.findOne(c => c.slug === slug);
  }
}

export class CityRepository extends BaseRepository {
  constructor() {
    super(CityEntity, SEED_CITIES);
  }

  async getHubs() {
    return this.find(c => c.isHub);
  }

  async getBySlug(slug) {
    return this.findOne(c => c.slug === slug);
  }
}

export class OfferRepository extends BaseRepository {
  constructor() {
    super(OfferEntity, SEED_OFFERS);
  }
}

export class FaqRepository extends BaseRepository {
  constructor() {
    super(FaqEntity, SEED_FAQS);
  }

  async getByTopic(topic) {
    if (!topic || topic === 'all') return this.getAll();
    return this.find(f => f.topic === topic);
  }
}

export class BlogRepository extends BaseRepository {
  constructor() {
    super(BlogPostEntity, SEED_BLOGS);
  }

  async getBySlug(slug) {
    return this.findOne(b => b.slug === slug);
  }
}

export const categoryRepository = new CategoryRepository();
export const cityRepository = new CityRepository();
export const offerRepository = new OfferRepository();
export const faqRepository = new FaqRepository();
export const blogRepository = new BlogRepository();
export const teamMembers = SEED_TEAM;
export const testimonials = SEED_TESTIMONIALS;
