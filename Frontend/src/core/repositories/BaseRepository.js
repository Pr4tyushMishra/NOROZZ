/**
 * Generic Base Repository providing in-memory caching, indexing, and CRUD primitives.
 * Follows the Repository pattern for decoupling UI from data fetching and API layers.
 */
export class BaseRepository {
  constructor(entityClass, initialSeed = []) {
    this.EntityClass = entityClass;
    this.cache = new Map();
    this.isInitialized = false;
    this.seedData = initialSeed;
  }

  async initialize() {
    if (this.isInitialized) return;
    if (this.seedData && this.seedData.length > 0) {
      this.seedData.forEach(item => {
        const entity = new this.EntityClass(item);
        this.cache.set(entity.id, entity);
      });
    }
    this.isInitialized = true;
  }

  async getAll() {
    await this.initialize();
    return Array.from(this.cache.values());
  }

  async getById(id) {
    await this.initialize();
    return this.cache.get(id) || null;
  }

  async find(predicate) {
    await this.initialize();
    return Array.from(this.cache.values()).filter(predicate);
  }

  async findOne(predicate) {
    await this.initialize();
    return Array.from(this.cache.values()).find(predicate) || null;
  }

  async save(entity) {
    await this.initialize();
    this.cache.set(entity.id, entity);
    return entity;
  }

  async delete(id) {
    await this.initialize();
    return this.cache.delete(id);
  }
}
