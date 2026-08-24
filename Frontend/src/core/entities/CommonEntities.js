import { BaseEntity } from './BaseEntity';

export class OfferEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.code = data.code || 'WELCOME50';
    this.title = data.title || 'Special Promotion';
    this.discountText = data.discountText || 'Flat 20% OFF';
    this.description = data.description || '';
    this.validUntil = data.validUntil || '31 Dec 2026';
    this.categorySlug = data.categorySlug || 'all';
    this.badge = data.badge || 'PROMO';
    this.minOrder = data.minOrder ? `₹${data.minOrder}` : 'No min order';
  }
}

export class FaqEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.question = data.question || 'FAQ Question';
    this.answer = data.answer || 'FAQ Answer';
    this.topic = data.topic || 'general'; // booking, payment, cancellations, safety, partners
    this.order = Number(data.order || 0);
  }
}

export class BlogPostEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.title = data.title || 'Blog Post';
    this.slug = data.slug || data.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') || 'post';
    this.excerpt = data.excerpt || '';
    this.content = data.content || '';
    this.author = data.author || 'Norozz Editorial Team';
    this.readTime = data.readTime || '4 min read';
    this.publishedAt = data.publishedAt || 'August 2026';
    this.category = data.category || 'Home Improvement';
    this.image = data.image || '';
    this.tags = Array.isArray(data.tags) ? data.tags : [];
  }
}

export class UserEntity extends BaseEntity {
  constructor(data = {}) {
    super(data);
    this.name = data.name || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.token = data.token || null;
    this.city = data.city || 'Bangalore, IN';
  }

  get initials() {
    if (!this.name) return 'U';
    return this.name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  }

  isAuthenticated() {
    return Boolean(this.token);
  }
}
