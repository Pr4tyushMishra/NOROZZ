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
      name: 'NOROZZ CARE PRIVATE LIMITED',
      telephone: '+91-8860036008',
      email: 'NOROZZCARE@GMAIL.COM',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '5th Floor, M/S DLF Bldg 2, Cyber Green Part-1, Sec 25, DLF QE',
        addressLocality: 'Gurgaon',
        addressRegion: 'Haryana',
        postalCode: '122002',
        addressCountry: 'IN',
      },
    },
  };

  return (
    <div className="min-h-screen bg-surface">
      <SeoHead
        title="Contact Us & Support Desk — NOROZZ"
        description="Get in touch with support, operations or customer care instantly. Main Helpline: 8796612243, Booking: 8796612244, Emergency: 8796612245, WhatsApp: 8796612246, Email: info@noroz.com."
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
