import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Clock, User, ArrowLeft, ShieldCheck } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { blogRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';

export const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      const found = await blogRepository.getBySlug(slug);
      setPost(found);
      if (found) {
        analytics.pageView(`/blog/${slug}`, `${found.title} — NOROZZ Blog`);
      }
    };
    loadPost();
  }, [slug]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-2xl font-bold text-navy mb-2">Article Not Found</h2>
        <Link to="/blog" className="text-primary font-bold hover:underline">
          Return to Blog Directory
        </Link>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NOROZZ Technologies Inc.',
      logo: 'https://www.norozz.com/favicon.svg',
    },
    datePublished: '2026-08-01',
    description: post.excerpt,
  };

  return (
    <div className="min-h-screen bg-surface py-12 md:py-16 text-left">
      <SeoHead
        title={`${post.title} — NOROZZ Guides`}
        description={post.excerpt}
        schema={articleSchema}
      />

      <Container size="narrow">
        <nav className="flex items-center space-x-2 text-xs text-slate-muted mb-8" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-primary">Home</Link>
          <ChevronRight className="w-3 h-3" />
          <Link to="/blog" className="hover:text-primary">Blog</Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-navy font-semibold truncate max-w-xs">{post.title}</span>
        </nav>

        <article className="space-y-6">
          <div className="space-y-3">
            <span className="px-3 py-1 bg-primary-tint text-primary text-xs font-bold rounded-full">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy font-heading leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-xs text-slate-muted pt-2 border-b border-slate-100 pb-4">
              <span className="flex items-center gap-1 font-semibold text-navy">
                <User className="w-3.5 h-3.5 text-primary" /> {post.author}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {post.readTime}
              </span>
              <span>•</span>
              <span>{post.publishedAt}</span>
            </div>
          </div>

          <div className="prose prose-slate max-w-none text-slate-text leading-relaxed space-y-5 text-base sm:text-lg">
            <p className="text-xl font-medium text-slate-text border-l-4 border-primary pl-4 py-1 italic bg-primary-tint/30 rounded-r-xl">
              {post.excerpt}
            </p>

            <p>
              Maintaining a modern home requires proactive inspection before small defects turn into costly structural breakdowns. Whether you are dealing with moisture seepages, seasonal plumbing clogs, or overloaded electrical circuits, taking timely preventive steps ensures peace of mind.
            </p>

            <h2 className="text-2xl font-bold text-navy font-heading mt-8">
              1. Never Ignore Minor Warning Signs
            </h2>
            <p>
              Often, early indicators such as a persistent damp odor, discolored ceiling plaster, or occasional circuit breaker trips signal underlying pipe leakage or wiring fatigue. Addressing these during routine cleaning prevents emergency breakdowns.
            </p>

            <h2 className="text-2xl font-bold text-navy font-heading mt-8">
              2. Trust Certified, Background-Verified Experts
            </h2>
            <p>
              Using unqualified handymen without verified tools or standardized pricing can often worsen the issue and void equipment warranties. At NOROZZ, all technicians undergo rigorous skill evaluations and are backed by property damage guarantees.
            </p>
          </div>

          {/* Bottom In-Article CTA */}
          <div className="mt-12 p-8 bg-primary-tint/70 rounded-3xl border border-teal-200/80 space-y-4">
            <h3 className="text-xl font-bold text-navy font-heading">
              Need professional help with your home?
            </h3>
            <p className="text-sm text-slate-muted">
              Book certified plumbers, electricians, or deep cleaning specialists in under 2 minutes.
            </p>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-primary hover:bg-primary-dark text-white font-semibold text-sm rounded-full transition-colors"
            >
              Explore NOROZZ Services
            </Link>
          </div>
        </article>
      </Container>
    </div>
  );
};

export default BlogPost;
