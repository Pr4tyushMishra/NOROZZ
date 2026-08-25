import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, User, LogOut } from 'lucide-react';
import { Button } from '@/components/ui';
import { ASSETS } from '@/core/repositories/MockData';
import { authService } from '@/core/services/AuthService';
import { eventBus } from '@/core/services/EventBus';
import { analytics } from '@/core/services/AnalyticsService';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = eventBus.on('auth_state_changed', (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'About', path: '/about' },
    { label: 'Offers', path: '/offers' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleLogout = () => {
    authService.logout();
  };

  const handleStoreClick = (platform) => {
    analytics.appDownloadClick('navbar', platform);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-100 transition-shadow duration-200">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={ASSETS.logo}
            alt="Norozz Logo"
            className="w-10 h-10 rounded-xl object-contain drop-shadow-sm group-hover:scale-105 transition-transform"
          />
          <span className="text-2xl font-extrabold tracking-tight text-navy font-heading">
            Norozz
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-primary relative py-1 ${
                  isActive
                    ? 'text-primary font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full'
                    : 'text-slate-text'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center space-x-4">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-navy flex items-center gap-1.5">
                <User className="w-4 h-4 text-primary" /> {currentUser.name}
              </span>
              <button
                onClick={handleLogout}
                className="text-xs text-slate-muted hover:text-brandDanger flex items-center gap-1 px-2.5 py-1 rounded-full border border-slate-200 hover:bg-red-50 transition-colors"
                title="Logout"
              >
                <LogOut className="w-3 h-3" /> Sign Out
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/sign-in"
                className="text-sm font-semibold text-navy hover:text-primary px-3 py-2 transition-colors"
              >
                Sign In
              </Link>
              <Button to="/register" variant="primary" size="md">
                Register
              </Button>
            </>
          )}

          {/* Google Play Button */}
          <a
            href="https://play.google.com/store"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleStoreClick('Google Play')}
            className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-[11px] font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
            </svg>
            <div className="text-left leading-tight">
              <div className="text-[9px] uppercase tracking-wider text-slate-400">GET IT ON</div>
              <div className="font-semibold text-[11px]">Google Play</div>
            </div>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-xl text-slate-text hover:text-navy hover:bg-slate-100 transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-4 shadow-xl animate-slide-up">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-base font-semibold py-2 px-3 rounded-xl transition-colors ${
                    isActive ? 'bg-primary-tint text-primary' : 'text-slate-text hover:bg-slate-50'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="pt-4 border-t border-slate-100 flex flex-col space-y-3">
            {currentUser ? (
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                <span className="text-sm font-semibold text-navy flex items-center gap-2">
                  <User className="w-4 h-4 text-primary" /> {currentUser.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="text-xs text-brandDanger font-semibold px-2 py-1"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Button to="/sign-in" variant="outline" size="md">
                  Sign In
                </Button>
                <Button to="/register" variant="primary" size="md">
                  Register
                </Button>
              </div>
            )}

            <a
              href="https://play.google.com/store"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleStoreClick('Google Play Mobile')}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-black text-white text-xs font-semibold rounded-xl"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a1.5 1.5 0 0 1-.61-.318V2.132c.184-.132.395-.24.609-.318zm11.242 11.245l2.257 2.257-11.45 6.611 9.193-8.868zm0-2.118L5.658 2.073l11.45 6.611-2.257 2.257zm1.488 1.059l4.053 2.34a1.2 1.2 0 0 1 0 2.08l-4.053 2.34-1.89-1.89 1.89-1.89z" />
              </svg>
              <span>Get on Google Play</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
