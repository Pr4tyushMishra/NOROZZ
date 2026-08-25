import React, { useState } from 'react';
import { Phone, Mail, MessageSquare, MapPin, CheckCircle2, ExternalLink, ShieldAlert, Users } from 'lucide-react';
import { SUPPORT_CONTACTS } from '@/core/repositories/MockData';
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
        {/* Top Contact Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10 text-left">
          
          {/* 1. Main Helpline */}
          <a
            href={SUPPORT_CONTACTS.mainHelpline.tel}
            onClick={() => handleSupportClick('main_helpline')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-300 hover:shadow-card transition-all flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              ☎️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-muted">{SUPPORT_CONTACTS.mainHelpline.label}</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full">24/7</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-primary transition-colors mt-0.5">
                {SUPPORT_CONTACTS.mainHelpline.number}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">General queries & customer help</p>
            </div>
          </a>

          {/* 2. Booking Helpline */}
          <a
            href={SUPPORT_CONTACTS.booking.tel}
            onClick={() => handleSupportClick('booking')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-blue-300 hover:shadow-card transition-all flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              📞
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-muted">{SUPPORT_CONTACTS.booking.label}</span>
                <span className="px-2 py-0.5 bg-blue-50 text-blue-700 text-[10px] font-bold rounded-full">Instant</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-primary transition-colors mt-0.5">
                {SUPPORT_CONTACTS.booking.number}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">Assisted booking & scheduling</p>
            </div>
          </a>

          {/* 3. Emergency Line */}
          <a
            href={SUPPORT_CONTACTS.emergency.tel}
            onClick={() => handleSupportClick('emergency')}
            className="group p-5 bg-white rounded-2xl border border-red-200/90 shadow-subtle hover:border-red-400 hover:shadow-card transition-all flex items-start gap-3.5 bg-red-50/20"
          >
            <div className="w-11 h-11 rounded-xl bg-red-50 text-red-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              🚑
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-red-600">{SUPPORT_CONTACTS.emergency.label}</span>
                <span className="px-2 py-0.5 bg-red-100 text-red-700 text-[10px] font-bold rounded-full">Priority SLA</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-red-600 transition-colors mt-0.5">
                {SUPPORT_CONTACTS.emergency.number}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">Urgent repairs & damage escalations</p>
            </div>
          </a>

          {/* 4. WhatsApp Support */}
          <a
            href={SUPPORT_CONTACTS.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleSupportClick('whatsapp')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-emerald-300 hover:shadow-card transition-all flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              💬
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-muted">{SUPPORT_CONTACTS.whatsapp.label}</span>
                <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 text-[10px] font-bold rounded-full">Online</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-emerald-600 transition-colors mt-0.5">
                {SUPPORT_CONTACTS.whatsapp.number}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">Instant messaging & photo sharing</p>
            </div>
          </a>

          {/* 5. Provider / Partner Support */}
          <a
            href={SUPPORT_CONTACTS.provider.tel}
            onClick={() => handleSupportClick('provider_support')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-300 hover:shadow-card transition-all flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              🏥
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-muted">{SUPPORT_CONTACTS.provider.label}</span>
                <span className="px-2 py-0.5 bg-teal-50 text-teal-700 text-[10px] font-bold rounded-full">Partners</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-primary transition-colors mt-0.5">
                {SUPPORT_CONTACTS.provider.number}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">Onboarding, payouts & partner desk</p>
            </div>
          </a>

          {/* 6. Email Support */}
          <a
            href={`mailto:${SUPPORT_CONTACTS.email}`}
            onClick={() => handleSupportClick('email')}
            className="group p-5 bg-white rounded-2xl border border-slate-200/90 shadow-subtle hover:border-teal-300 hover:shadow-card transition-all flex items-start gap-3.5"
          >
            <div className="w-11 h-11 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center text-xl shrink-0 group-hover:scale-105 transition-transform">
              ✉️
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-slate-muted">Official Email Contact</span>
                <span className="px-2 py-0.5 bg-purple-50 text-purple-700 text-[10px] font-bold rounded-full">Fast Reply</span>
              </div>
              <div className="text-base font-extrabold text-navy group-hover:text-primary transition-colors mt-0.5">
                {SUPPORT_CONTACTS.email}
              </div>
              <p className="text-[11px] text-slate-muted mt-0.5">Response within 15 minutes</p>
            </div>
          </a>

        </div>

        {/* Main Grid: Message Form + Interactive Real Google Map */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Form: Send us a message */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 shadow-subtle text-left h-full flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-navy mb-2 font-heading">
                  Send us a message
                </h3>
                <p className="text-xs sm:text-sm text-slate-muted mb-6">
                  Have questions about a service booking, partner registration or feedback? Reach out directly.
                </p>

                {isSubmitted ? (
                  <div className="py-10 text-center space-y-4">
                    <div className="w-14 h-14 bg-green-50 text-brandSuccess rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-lg font-bold text-navy">Inquiry Received!</h4>
                    <p className="text-sm text-slate-muted max-w-sm mx-auto">
                      Thank you for reaching out, <strong>{formData.name}</strong>. Our support team will review your message and reply to {formData.email} within 15 minutes.
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
                      placeholder="+91 87966 12243"
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
                        placeholder="Tell us what service you need help with..."
                        required
                        className="w-full px-4 py-3 text-sm text-navy bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent placeholder:text-slate-muted/70 transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full rounded-xl cursor-pointer"
                        disabled={loading}
                      >
                        {loading ? 'Submitting...' : 'Submit Inquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Right Card: Real Interactive Google Map & Location Details */}
          <div className="lg:col-span-6 space-y-4 text-left">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-8 shadow-subtle space-y-5 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-wider">Live Headquarters Location</span>
                    <h3 className="text-xl font-bold text-navy font-heading mt-0.5">
                      Visit Our Office
                    </h3>
                  </div>
                  <a
                    href={SUPPORT_CONTACTS.googleMapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:underline"
                  >
                    <span>Open in Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Real Interactive Google Map Embed */}
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm relative aspect-[16/10] bg-slate-100 mb-4">
                  <iframe
                    title="NOROZZ Corporate Headquarters Google Map"
                    src={SUPPORT_CONTACTS.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>

                {/* Address and details */}
                <div className="space-y-3 pt-1 text-xs sm:text-sm text-slate-muted">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <strong className="text-navy text-sm">{SUPPORT_CONTACTS.companyName}</strong>
                        <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-mono font-bold rounded">
                          CIN: {SUPPORT_CONTACTS.cin}
                        </span>
                      </div>
                      <p className="mt-1 leading-relaxed text-slate-600">{SUPPORT_CONTACTS.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-100 text-xs">
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Official Line: <a href="tel:8860036008" className="text-navy font-bold hover:text-primary">8860036008</a></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>Email: <a href={`mailto:${SUPPORT_CONTACTS.officialEmail}`} className="text-primary font-semibold hover:underline">{SUPPORT_CONTACTS.officialEmail}</a></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom directions CTA */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                <span className="text-xs text-slate-400">Open Monday – Saturday: 9:00 AM – 8:00 PM</span>
                <a
                  href={SUPPORT_CONTACTS.googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-navy font-bold text-xs rounded-xl transition-colors inline-flex items-center gap-1.5 shadow-2xs"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  <span>Get Directions to DLF Cyber Green</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactCards;
