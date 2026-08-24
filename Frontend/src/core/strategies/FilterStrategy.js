/**
 * Strategy Pattern implementation for dynamic service filtering and sorting.
 */
export class FilterStrategy {
  static filter(services, criteria = {}) {
    const {
      search = '',
      categories = [],
      priceRange = 'all',
      minRating = 0,
      sortBy = 'recommended'
    } = criteria;

    let result = [...services];

    // Search filter
    if (search.trim()) {
      const term = search.toLowerCase().trim();
      result = result.filter(s => s.matchesSearch(term));
    }

    // Categories filter (multi-category support)
    if (categories && categories.length > 0 && !categories.includes('all')) {
      result = result.filter(s => {
        return categories.some(cat => {
          const cleanCat = cat.toLowerCase();
          return (
            s.categorySlug.toLowerCase() === cleanCat ||
            s.categoryName.toLowerCase().includes(cleanCat)
          );
        });
      });
    }

    // Price range filter
    if (priceRange && priceRange !== 'all') {
      result = result.filter(s => {
        const price = s.priceFrom;
        switch (priceRange) {
          case 'under-500':
            return price < 500;
          case '500-1500':
            return price >= 500 && price <= 1500;
          case '1500-3000':
            return price >= 1500 && price <= 3000;
          case 'above-3000':
            return price > 3000;
          default:
            return true;
        }
      });
    }

    // Min rating filter
    if (minRating > 0) {
      result = result.filter(s => s.rating >= minRating);
    }

    // Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.priceFrom - b.priceFrom);
        break;
      case 'price-high':
        result.sort((a, b) => b.priceFrom - a.priceFrom);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount);
        break;
      case 'popular':
        result.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'recommended':
      default:
        // Default sort
        break;
    }

    return result;
  }
}
