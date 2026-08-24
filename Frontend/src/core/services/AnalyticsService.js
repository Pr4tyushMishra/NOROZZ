import { eventBus } from './EventBus';

/**
 * Singleton Analytics Service implementing the 11 key events from Doc Section 13.
 * Emits events to the EventBus and console/GA4 layer.
 */
export class AnalyticsService {
  static instance = null;

  constructor() {
    if (AnalyticsService.instance) {
      return AnalyticsService.instance;
    }
    this.history = [];
    this.enabled = true;
    AnalyticsService.instance = this;
  }

  static getInstance() {
    if (!AnalyticsService.instance) {
      AnalyticsService.instance = new AnalyticsService();
    }
    return AnalyticsService.instance;
  }

  track(eventName, properties = {}) {
    if (!this.enabled) return;
    const eventPayload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      properties,
    };
    this.history.push(eventPayload);
    eventBus.emit('analytics_event', eventPayload);
    console.info(`[Analytics Tracked] ${eventName}`, properties);
  }

  // 11 Core Event Handlers
  pageView(path, title) {
    this.track('page_view', { path, title });
  }

  serviceCategoryView(categorySlug, categoryName) {
    this.track('service_category_view', { categorySlug, categoryName });
  }

  serviceView(serviceId, serviceTitle, price) {
    this.track('service_view', { serviceId, serviceTitle, price });
  }

  citySelected(cityName, citySlug) {
    this.track('city_selected', { cityName, citySlug });
  }

  appDownloadClick(sourceLocation, platform) {
    this.track('app_download_click', { sourceLocation, platform });
  }

  partnerSignupClick(sourceLocation) {
    this.track('partner_signup_click', { sourceLocation });
  }

  offerView(offerCode, discount) {
    this.track('offer_view', { offerCode, discount });
  }

  faqOpen(faqId, question) {
    this.track('faq_open', { faqId, question });
  }

  contactSubmit(inquiryType, email) {
    this.track('contact_submit', { inquiryType, email });
  }

  supportClick(channel) {
    this.track('support_click', { channel });
  }

  storeBadgeClick(storeName, position) {
    this.track('store_badge_click', { storeName, position });
  }
}

export const analytics = AnalyticsService.getInstance();
