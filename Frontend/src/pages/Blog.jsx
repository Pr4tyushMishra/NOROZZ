import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { blogRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    analytics.pageView('/blog', 'Blog & Home Improvement Guides — NOROZZ');
    const loadBlogs = async () => {
      const data = await blogRepository.getAll();
      setPosts(data);
    };
    loadBlogs();
  }, []);

  return (
    <div className="min-h-screen bg-surface-soft/40 py-12 md:py-16 text-left">
      <SeoHead
        title="Home Maintenance Guides, Expert Tips & Advice — NOROZZ Blog"
        description="Learn expert plumbing tips, electrical safety checks, deep cleaning schedules and monsoon maintenance advice from certified technicians."
      />

      <Container>
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            NOROZZ Insights
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading mt-1">
            Home Care Guides & Expert Advice
          </h1>
          <p className="text-sm sm:text-base text-slate-muted mt-2">
            Practical tips from certified home improvement technicians to keep your household running smoothly.
          </p>
        </div>

        {/* Blog Post Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-subtle hover:shadow-card transition-all flex flex-col justify-between"
            >
              <div className="p-8 space-y-4">
                <div className="flex items-center gap-3 text-xs text-slate-muted">
                  <span className="px-3 py-1 bg-primary-tint text-primary font-bold rounded-full">
                    {post.category}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <Link to={`/blog/${post.slug}`}>
                  <h2 className="text-xl sm:text-2xl font-bold text-navy hover:text-primary transition-colors font-heading leading-snug">
                    {post.title}
                  </h2>
                </Link>

                <p className="text-sm text-slate-muted leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex items-center gap-2 pt-2 text-xs text-slate-muted">
                  <User className="w-3.5 h-3.5 text-primary" />
                  <span>By <strong>{post.author}</strong></span>
                  <span>•</span>
                  <span>{post.publishedAt}</span>
                </div>
              </div>

              <div className="p-8 pt-0">
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  Read Full Guide <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Blog;
