/**
 * Singleton API Client supporting REST requests, token interception, mock mode fallback, and error handling.
 */
export class ApiClient {
  static instance = null;

  constructor(baseURL = '/api/v1') {
    if (ApiClient.instance) {
      return ApiClient.instance;
    }
    this.baseURL = baseURL;
    this.token = localStorage.getItem('norozz_auth_token') || null;
    this.mockEnabled = true; // graceful fallback
    ApiClient.instance = this;
  }

  static getInstance() {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient();
    }
    return ApiClient.instance;
  }

  setToken(token) {
    this.token = token;
    if (token) {
      localStorage.setItem('norozz_auth_token', token);
    } else {
      localStorage.removeItem('norozz_auth_token');
    }
  }

  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    return headers;
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`;
    const config = {
      ...options,
      headers: {
        ...this.getHeaders(),
        ...(options.headers || {}),
      },
    };

    try {
      const response = await fetch(url, config);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      if (this.mockEnabled) {
        console.warn(`[ApiClient] Network request failed for ${endpoint}, using client-side mock fallback.`, error.message);
        return null;
      }
      throw error;
    }
  }

  get(endpoint, params) {
    let url = endpoint;
    if (params) {
      const queryString = new URLSearchParams(params).toString();
      url = `${endpoint}?${queryString}`;
    }
    return this.request(url, { method: 'GET' });
  }

  post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}

export const apiClient = ApiClient.getInstance();
