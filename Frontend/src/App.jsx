import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '@/components/layout';
import { AppHandoffModal } from '@/components/common/AppHandoffModal';
import { ComponentErrorBoundary } from '@/components/common/ComponentErrorBoundary';
import { RefreshCw } from 'lucide-react';

// Lazy-loaded routes for optimal code-splitting and performance
const Home = React.lazy(() => import('@/pages/Home'));
const Services = React.lazy(() => import('@/pages/Services'));
const ServiceDetail = React.lazy(() => import('@/pages/ServiceDetail'));
const About = React.lazy(() => import('@/pages/About'));
const HowItWorks = React.lazy(() => import('@/pages/HowItWorks'));
const ForPartners = React.lazy(() => import('@/pages/ForPartners'));
const Cities = React.lazy(() => import('@/pages/Cities'));
const Offers = React.lazy(() => import('@/pages/Offers'));
const Blog = React.lazy(() => import('@/pages/Blog'));
const BlogPost = React.lazy(() => import('@/pages/BlogPost'));
const Help = React.lazy(() => import('@/pages/Help'));
const Contact = React.lazy(() => import('@/pages/Contact'));
const Download = React.lazy(() => import('@/pages/Download'));
const SignIn = React.lazy(() => import('@/pages/SignIn'));
const Register = React.lazy(() => import('@/pages/Register'));
const Legal = React.lazy(() => import('@/pages/Legal'));
const NotFound = React.lazy(() => import('@/pages/NotFound'));

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Fallback loader during code-split chunks
const LoadingFallback = () => (
  <div className="min-h-[70vh] flex items-center justify-center">
    <div className="flex flex-col items-center gap-3">
      <RefreshCw className="w-8 h-8 text-primary animate-spin" />
      <span className="text-xs text-slate-muted font-semibold tracking-wide uppercase">
        Loading NOROZZ...
      </span>
    </div>
  </div>
);

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-surface font-sans text-slate-text antialiased">
        {/* Sticky Header Navbar */}
        <Navbar />

        {/* Main Content Area Wrapped in Error Boundary and Suspense */}
        <main className="flex-grow">
          <ComponentErrorBoundary componentName="MainApplicationRouter">
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                {/* 1. Home */}
                <Route path="/" element={<Home />} />

                {/* 2. Services */}
                <Route path="/services" element={<Services />} />
                <Route path="/services/:category" element={<Services />} />
                <Route path="/services/:category/:service" element={<ServiceDetail />} />

                {/* 3. How It Works */}
                <Route path="/how-it-works" element={<HowItWorks />} />

                {/* 4. For Partners */}
                <Route path="/for-partners" element={<ForPartners />} />

                {/* 5. Cities */}
                <Route path="/cities" element={<Cities />} />
                <Route path="/cities/:city" element={<Cities />} />

                {/* 6. Offers */}
                <Route path="/offers" element={<Offers />} />

                {/* 7. About & Safety */}
                <Route path="/about" element={<About />} />
                <Route path="/safety" element={<About />} />

                {/* 8. Blog & Articles */}
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />

                {/* 9. Help Center */}
                <Route path="/help" element={<Help />} />

                {/* 10. Contact */}
                <Route path="/contact" element={<Contact />} />

                {/* 11. Download App */}
                <Route path="/download" element={<Download />} />

                {/* 12. Auth */}
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/register" element={<Register />} />

                {/* 13. Legal Compliance */}
                <Route path="/privacy" element={<Legal />} />
                <Route path="/terms" element={<Legal />} />
                <Route path="/refund-policy" element={<Legal />} />
                <Route path="/cookie-policy" element={<Legal />} />

                {/* 14. 404 Catch-All */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ComponentErrorBoundary>
        </main>

        {/* Global Instant Booking Handoff Modal */}
        <AppHandoffModal />

        {/* 4-Column Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
