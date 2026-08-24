/**
 * Base abstract entity class supporting JSON serialization, cloning, and ID management.
 */
export class BaseEntity {
  constructor(data = {}) {
    this.id = data.id || `entity_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
  }

  toJSON() {
    return { ...this };
  }

  clone() {
    return new this.constructor(this.toJSON());
  }
}
