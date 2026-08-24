import React, { useEffect } from 'react';
import { SeoHead } from '@/components/common/SeoHead';
import { SafeComponent } from '@/components/common/SafeComponent';
import { Container } from '@/components/layout/Container';
import { ContactCards } from '@/components/sections';
import { analytics } from '@/core/services/AnalyticsService';

export const Contact = () => {
  useEffect(() => {
    analytics.pageView('/contact', 'Contact & Support — NOROZZ');
  }, []);

  const contactSchema = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact NOROZZ Support',
    description: 'Get in touch with NOROZZ support, operations or corporate leadership team.',
    mainEntity: {
      '@type': 'Organization',
      name: 'NOROZZ Technologies Inc.',
      telephone: '+91-1800-419-4444',
      email: 'support@norozz.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '4th Floor, Prestige Tech Park, Outer Ring Road',
        addressLocality: 'Bangalore',
        postalCode: '560103',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="Contact Us & 24/7 Support Desk — NOROZZ"
        description="Get in touch with support, operations or corporate leadership team instantly. Toll-free helpline 1800-419-4444, email support@norozz.com or submit an inquiry."
        schema={contactSchema}
      />

      {/* Header */}
      <section className="pt-16 pb-4 bg-surface text-left">
        <Container>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            We are here to help
          </h1>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            Get in touch with support, operations or corporate leadership team instantly.
          </p>
        </Container>
      </section>

      {/* Form + Info Cards + Map */}
      <SafeComponent name="ContactCards">
        <ContactCards />
      </SafeComponent>
    </div>
  );
};

export default Contact;
