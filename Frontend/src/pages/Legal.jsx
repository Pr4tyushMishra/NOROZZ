import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { analytics } from '@/core/services/AnalyticsService';

export const Legal = () => {
  const location = useLocation();
  const path = location.pathname;

  let pageTitle = 'Terms of Service';
  let lastUpdated = 'August 2026';

  if (path.includes('privacy')) {
    pageTitle = 'Privacy Policy';
  } else if (path.includes('refund')) {
    pageTitle = 'Cancellation & 100% Refund Policy';
  } else if (path.includes('cookie')) {
    pageTitle = 'Cookie Policy';
  }

  useEffect(() => {
    analytics.pageView(path, `${pageTitle} — NOROZZ`);
  }, [path, pageTitle]);

  return (
    <div className="min-h-screen bg-surface py-12 md:py-16 text-left">
      <SeoHead
        title={`${pageTitle} — NOROZZ Legal`}
        description={`Read the official ${pageTitle} for NOROZZ Technologies Inc. detailing our commitments, guarantees and data security standards.`}
      />

      <Container size="narrow">
        <div className="border-b border-slate-200 pb-6 mb-8 space-y-2">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Legal & Compliance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            {pageTitle}
          </h1>
          <p className="text-xs text-slate-muted">Last updated: {lastUpdated}</p>
        </div>

        <div className="prose prose-slate max-w-none text-slate-text space-y-6 text-sm sm:text-base leading-relaxed">
          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy font-heading">1. Introduction & Overview</h2>
            <p>
              Welcome to NOROZZ Technologies Inc. ("NOROZZ", "we", "our", or "us"). By accessing or utilizing our public discovery website, mobile applications, or connected home service marketplace, you agree to comply with and be bound by these legal terms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy font-heading">2. 100% Quality & Redo Assurance</h2>
            <p>
              Every booking on the NOROZZ platform is covered by our unconditional quality commitment. If a completed cleaning, plumbing, or electrical job does not meet the specified service standards, you are eligible for a free redo by a senior specialist or a 100% refund.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy font-heading">3. Property Damage Insurance Protection</h2>
            <p>
              We provide property damage coverage up to ₹10,000 for any accidental damages caused during the execution of a verified service. Claims must be submitted within 24 hours of job completion with photographic proof.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy font-heading">4. Cancellation & Rescheduling Terms</h2>
            <p>
              Customers may cancel or reschedule any scheduled booking free of charge up to 3 hours prior to the booked slot directly in the NOROZZ app. Cancellations within 3 hours may incur a standard ₹99 pro dispatch reimbursement fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-xl font-bold text-navy font-heading">5. Contact Legal Desk</h2>
            <p>
              For legal inquiries or compliance verification, please contact our counsel at <a href="mailto:legal@norozz.com" className="text-primary underline">legal@norozz.com</a>.
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
};

export default Legal;
