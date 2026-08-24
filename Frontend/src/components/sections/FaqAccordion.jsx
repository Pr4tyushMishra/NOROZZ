import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { analytics } from '@/core/services/AnalyticsService';
import { SEED_FAQS } from '@/core/repositories/MockData';
import { Container } from '@/components/layout/Container';

export const FaqAccordion = ({ items = SEED_FAQS, title = 'Frequently Asked Questions', maxItems }) => {
  const [openId, setOpenId] = useState(items[0]?.id || null);

  const displayedItems = maxItems ? items.slice(0, maxItems) : items;

  const toggleItem = (id, question) => {
    const nextId = openId === id ? null : id;
    setOpenId(nextId);
    if (nextId) {
      analytics.faqOpen(id, question);
    }
  };

  return (
    <section className="py-16 md:py-20 bg-surface">
      <Container size="narrow">
        {title && (
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy font-heading">
              {title}
            </h2>
          </div>
        )}

        <div className="space-y-4">
          {displayedItems.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden transition-all duration-200 shadow-subtle hover:border-slate-300"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(faq.id, faq.question)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-navy pr-4 font-heading">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-primary' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-slate-muted leading-relaxed border-t border-slate-50 animate-fade-in text-left">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
