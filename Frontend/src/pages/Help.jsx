import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, HelpCircle, Phone, MessageSquare, Shield, CreditCard, Calendar, UserCheck } from 'lucide-react';
import { SeoHead } from '@/components/common/SeoHead';
import { Container } from '@/components/layout/Container';
import { FaqAccordion } from '@/components/sections';
import { faqRepository } from '@/core/repositories/ExtendedRepositories';
import { analytics } from '@/core/services/AnalyticsService';

export const Help = () => {
  const [faqs, setFaqs] = useState([]);
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    analytics.pageView('/help', 'Help Center & Support FAQs — NOROZZ');
    const loadFaqs = async () => {
      const data = await faqRepository.getAll();
      setFaqs(data);
    };
    loadFaqs();
  }, []);

  const topics = [
    { id: 'all', label: 'All Topics', icon: HelpCircle },
    { id: 'booking', label: 'Bookings', icon: Calendar },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'safety', label: 'Safety & Trust', icon: Shield },
    { id: 'partners', label: 'For Partners', icon: UserCheck },
  ];

  const filteredFaqs = faqs.filter(f => {
    const matchesTopic = selectedTopic === 'all' || f.topic === selectedTopic;
    const matchesSearch =
      f.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.answer.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-surface-soft/40 py-12 md:py-16 text-left">
      <SeoHead
        title="Help Center & Customer Support FAQs — NOROZZ"
        description="Find answers to booking questions, cancellation terms, safety policies, insurance coverage and payment queries."
      />

      <Container size="narrow">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="text-xs font-bold text-primary uppercase tracking-wider">
            Help & Knowledge Base
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-navy font-heading">
            How can we help you today?
          </h1>

          {/* Search Box */}
          <div className="relative max-w-xl mx-auto pt-2">
            <Search className="w-5 h-5 text-slate-muted absolute left-4 top-5" />
            <input
              type="text"
              placeholder="Search help topics (e.g. refund, reschedule, pro background)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
            />
          </div>
        </div>

        {/* Topic Filter Chips */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {topics.map((t) => {
            const Icon = t.icon;
            const isSelected = selectedTopic === t.id;
            return (
              <button
                key={t.id}
                onClick={() => setSelectedTopic(t.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-primary text-white shadow-xs'
                    : 'bg-white text-slate-text border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{t.label}</span>
              </button>
            );
          })}
        </div>

        {/* Filtered Accordion List */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle mb-12">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-8 text-slate-muted text-sm">
              No matching help articles found. Please try another keyword or contact our support team.
            </div>
          ) : (
            <FaqAccordion items={filteredFaqs} title="" />
          )}
        </div>

        {/* Unresolved CTA */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 text-center space-y-3 shadow-subtle">
          <h3 className="text-xl font-bold text-navy font-heading">
            Still need help?
          </h3>
          <p className="text-xs sm:text-sm text-slate-muted max-w-md mx-auto">
            Our 24/7 customer happiness desk is available to assist you with any questions.
          </p>
          <div className="pt-2 flex justify-center gap-3">
            <Link
              to="/contact"
              className="px-6 py-2.5 bg-primary text-white text-xs font-bold rounded-full hover:bg-primary-dark transition-colors"
            >
              Contact Support Desk
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Help;
