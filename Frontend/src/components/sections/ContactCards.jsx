import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '@/core/repositories/MockData';
import { analytics } from '@/core/services/AnalyticsService';
import { eventBus } from '@/core/services/EventBus';
import { Container } from '@/components/layout/Container';
import { Input, Button } from '@/components/ui';

export const ContactCards = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    analytics.contactSubmit('general_inquiry', formData.email);

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleSupportClick = (channel) => {
    analytics.supportClick(channel);
    if (channel === 'live_chat') {
      eventBus.emit('open_app_handoff', { title: 'In-App Live Support' });
    }
  };

  return (
    <section className="py-12 md:py-16 bg-surface">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Form: Send us a message */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-subtle text-left">
              <h3 className="text-xl font-bold text-navy mb-6 font-heading">
                Send us a message
              </h3>

              {isSubmitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 bg-green-50 text-brandSuccess rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-navy">Inquiry Received!</h4>
                  <p className="text-sm text-slate-muted max-w-sm mx-auto">
                    Thank you for reaching out, <strong>{formData.name}</strong>. Our support team will review your inquiry and get back to you at {formData.email} within 15 minutes.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', message: '' });
                    }}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    label="Full Name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />

                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />

                  <Input
                    label="Phone Number"
                    type="tel"
                    placeholder="+91 99999 99999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />

                  <div className="space-y-1.5 text-left">
                    <label className="block text-sm font-semibold text-navy">
                      Your Message <span className="text-brandDanger">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what services you need help with..."
                      required
                      className="w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-muted/70 transition-colors"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="w-full rounded-xl"
                      disabled={loading}
                    >
                      {loading ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right Cards: Contact Info & Map */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {/* Hotline Card */}
            <a
              href="tel:18004194444"
              onClick={() => handleSupportClick('hotline')}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-200 hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-muted">Support Desk Hotline</div>
                <div className="text-base font-bold text-navy group-hover:text-primary transition-colors">
                  1800-419-4444 (24/7)
                </div>
                <div className="text-xs text-slate-muted mt-0.5">Toll-free custom customer support helpline</div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:support@norozz.com"
              onClick={() => handleSupportClick('email')}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-200 hover:shadow-card transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-muted">Email Support Desk</div>
                <div className="text-base font-bold text-navy group-hover:text-primary transition-colors">
                  support@norozz.com
                </div>
                <div className="text-xs text-slate-muted mt-0.5">Average response time under 15 minutes</div>
              </div>
            </a>

            {/* Live Chat Card */}
            <div
              onClick={() => handleSupportClick('live_chat')}
              className="group flex items-start gap-4 p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-200 hover:shadow-card transition-all cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-primary-tint text-primary flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-semibold text-slate-muted">In-App Live Chat Support</div>
                <div className="text-base font-bold text-primary group-hover:underline">
                  Start Instant Live Chat
                </div>
                <div className="text-xs text-slate-muted mt-0.5">Chat live with an agent within the mobile application</div>
              </div>
            </div>

            {/* Map & Headquarters Box */}
            <div className="pt-3 space-y-3">
              <h4 className="text-sm font-bold text-navy font-heading">
                Our Corporate Headquarters
              </h4>
              <div className="rounded-2xl overflow-hidden border border-slate-200 relative aspect-[21/9] bg-slate-100 shadow-subtle">
                <img
                  src={ASSETS.contactMap}
                  alt="Norozz Bangalore Headquarters Map"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-xs text-slate-muted leading-relaxed">
                Norozz Technologies, 4th Floor, Prestige Tech Park, Outer Ring Road, Bangalore - 560103.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
