import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Check, Shield } from 'lucide-react';
import { authService } from '@/core/services/AuthService';
import { analytics } from '@/core/services/AnalyticsService';
import { ASSETS } from '@/core/repositories/MockData';
import { Input, Button } from '@/components/ui';

export const AuthFormCard = ({ mode = 'sign-in' }) => {
  const isSignIn = mode === 'sign-in';
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: isSignIn ? 'rohit.kumar@gmail.com' : '',
    phone: '',
    password: '',
    rememberMe: false,
    agreeTerms: false,
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      if (isSignIn) {
        await authService.login(formData.email, formData.password || 'password123', formData.rememberMe);
        analytics.track('auth_sign_in_success', { email: formData.email });
      } else {
        if (!formData.agreeTerms) {
          throw new Error('Please accept the Terms of Service and Privacy Policy.');
        }
        await authService.register({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          password: formData.password,
        });
        analytics.track('auth_register_success', { email: formData.email });
      }
      navigate('/services');
    } catch (err) {
      setError(err.message || 'Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card">
        {/* Left Side: Form */}
        <div className="lg:col-span-6 p-8 sm:p-12 text-left">
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-navy font-heading">
              {isSignIn ? 'Welcome back' : 'Create Account'}
            </h1>
            <p className="text-sm text-slate-muted mt-1.5">
              {isSignIn
                ? 'Simplify your home maintenance. Log in to book your next service.'
                : 'Join Norozz to connect instantly with verified local experts.'}
            </p>
          </div>

          {error && (
            <div className="p-3 mb-5 text-xs text-brandDanger bg-red-50 border border-red-200 rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            {!isSignIn && (
              <Input
                label="Full Name"
                placeholder="e.g. Ananya Sen"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            )}

            <Input
              label="Email Address"
              type="email"
              placeholder={isSignIn ? 'rohit.kumar@gmail.com' : 'name@example.com'}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />

            {!isSignIn && (
              <Input
                label="Phone Number"
                type="tel"
                placeholder="e.g. +91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            )}

            <Input
              label="Password"
              type="password"
              placeholder={isSignIn ? '••••••••••••' : 'Create a strong password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />

            {/* Checkboxes */}
            {isSignIn ? (
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 text-slate-text cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 accent-primary cursor-pointer"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); alert('Password reset link sent to registered email.'); }} className="text-primary hover:underline font-medium">
                  Forgot Password?
                </a>
              </div>
            ) : (
              <div className="pt-1">
                <label className="flex items-start gap-2.5 text-xs text-slate-text cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={formData.agreeTerms}
                    onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                    className="w-4 h-4 mt-0.5 rounded text-primary focus:ring-primary border-slate-300 accent-primary cursor-pointer"
                    required
                  />
                  <span>
                    I agree to the{' '}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
            )}

            <div className="pt-3">
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full rounded-xl"
                disabled={loading}
              >
                {loading ? 'Processing...' : isSignIn ? 'Sign In' : 'Create Account'}
              </Button>
            </div>

            <div className="pt-4 text-center text-xs text-slate-muted">
              {isSignIn ? (
                <>
                  Don't have an account?{' '}
                  <Link to="/register" className="text-primary font-bold hover:underline">
                    Create an account
                  </Link>
                </>
              ) : (
                <>
                  Already have an account?{' '}
                  <Link to="/sign-in" className="text-primary font-bold hover:underline">
                    Sign In
                  </Link>
                </>
              )}
            </div>
          </form>
        </div>

        {/* Right Side: Visual & Testimonial Quote */}
        <div className="lg:col-span-6 relative h-full min-h-[420px] lg:min-h-[580px] bg-slate-100 overflow-hidden flex items-center justify-center">
          <img
            src={isSignIn ? ASSETS.kitchen : ASSETS.registerPro}
            alt={isSignIn ? 'Modern Home' : 'Verified Pro'}
            className="w-full h-full object-cover object-center"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};
