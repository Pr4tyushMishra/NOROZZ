import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, HelpCircle } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { analytics } from '@/core/services/AnalyticsService';

export const NotFound = () => {
  useEffect(() => {
    analytics.pageView('/404', '404 Page Not Found — NOROZZ');
  }, []);

  return (
    <div className="min-h-[75vh] bg-surface flex items-center justify-center py-16 text-center">
      <SeoHead
        title="404 Page Not Found — NOROZZ"
        description="The page you were looking for could not be found. Explore our home services or return to the homepage."
        noIndex={true}
      />
      <Container size="narrow">
        <div className="max-w-md mx-auto space-y-6">
          <div className="w-20 h-20 rounded-3xl bg-primary-tint text-primary font-extrabold text-3xl flex items-center justify-center mx-auto shadow-subtle">
            404
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-extrabold text-navy font-heading">
              Page Not Found
            </h1>
            <p className="text-sm text-slate-muted">
              We couldn't find the page you are looking for. It might have been moved or doesn't exist.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary-dark transition-colors shadow-xs"
            >
              <Home className="w-4 h-4" /> Go to Homepage
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white border border-slate-300 text-navy text-xs font-bold rounded-full hover:bg-slate-50 transition-colors shadow-xs"
            >
              <Search className="w-4 h-4" /> Browse Services
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
