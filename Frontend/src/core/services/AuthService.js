import { UserEntity } from '../entities/CommonEntities';
import { eventBus } from './EventBus';
import { apiClient } from './ApiClient';

/**
 * Singleton Authentication & Session Service.
 */
export class AuthService {
  static instance = null;

  constructor() {
    if (AuthService.instance) {
      return AuthService.instance;
    }
    this.currentUser = this.loadStoredUser();
    AuthService.instance = this;
  }

  static getInstance() {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  loadStoredUser() {
    try {
      const stored = localStorage.getItem('norozz_user');
      if (stored) {
        return new UserEntity(JSON.parse(stored));
      }
    } catch (e) {
      console.warn('Failed to parse stored user session', e);
    }
    return null;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  isAuthenticated() {
    return Boolean(this.currentUser && this.currentUser.isAuthenticated());
  }

  async login(email, password, rememberMe = false) {
    // Validate credentials
    if (!email || !password) {
      throw new Error('Please enter your email address and password.');
    }

    // Mock successful authentication
    const mockToken = `jwt_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    const user = new UserEntity({
      id: 'usr_1',
      name: email.includes('rohit') ? 'Rohit Kumar' : email.split('@')[0].replace('.', ' '),
      email,
      phone: '+91 98765 43210',
      token: mockToken,
      city: 'Bangalore, IN',
    });

    this.currentUser = user;
    apiClient.setToken(mockToken);

    if (rememberMe) {
      localStorage.setItem('norozz_user', JSON.stringify(user.toJSON()));
    } else {
      sessionStorage.setItem('norozz_user', JSON.stringify(user.toJSON()));
    }

    eventBus.emit('auth_state_changed', user);
    return user;
  }

  async register({ name, email, phone, password }) {
    if (!name || !email || !password) {
      throw new Error('All required fields must be filled.');
    }

    const mockToken = `jwt_${Date.now()}_${Math.random().toString(36).substring(2)}`;
    const user = new UserEntity({
      id: `usr_${Date.now()}`,
      name,
      email,
      phone,
      token: mockToken,
      city: 'Bangalore, IN',
    });

    this.currentUser = user;
    apiClient.setToken(mockToken);
    localStorage.setItem('norozz_user', JSON.stringify(user.toJSON()));

    eventBus.emit('auth_state_changed', user);
    return user;
  }

  logout() {
    this.currentUser = null;
    apiClient.setToken(null);
    localStorage.removeItem('norozz_user');
    sessionStorage.removeItem('norozz_user');
    eventBus.emit('auth_state_changed', null);
  }
}

export const authService = AuthService.getInstance();
