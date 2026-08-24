import React, { useEffect } from 'react';

/**
 * Portable SEO Head component that manages document title, meta tags, and structured data dynamically.
 */
export const SeoHead = ({
  title = 'NOROZZ — Quality home services, on demand',
  description = 'Book vetted, background-checked local professionals for cleaning, electrical, plumbing, carpentry, and more. Transparent pricing, 100% satisfaction guaranteed.',
  canonicalUrl = window.location.href,
  schema = null,
  noIndex = false,
}) => {
  useEffect(() => {
    // Document Title
    document.title = title.includes('NOROZZ') ? title : `${title} | NOROZZ`;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Robots meta
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (noIndex) {
      if (!metaRobots) {
        metaRobots = document.createElement('meta');
        metaRobots.name = 'robots';
        document.head.appendChild(metaRobots);
      }
      metaRobots.content = 'noindex, nofollow';
    } else if (metaRobots) {
      metaRobots.content = 'index, follow';
    }

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    // JSON-LD Structured Data
    let schemaScript = document.getElementById('json-ld-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else if (schemaScript) {
      schemaScript.remove();
    }
  }, [title, description, canonicalUrl, schema, noIndex]);

  return null;
};
