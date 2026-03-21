import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useSiteConfig } from "../config/SiteConfigContext";

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, colors } = useSiteConfig();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, boolean> = {};
    if (!form.name.trim()) newErrors.name = true;
    if (!form.phone.trim()) newErrors.phone = true;
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return; }
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-44 overflow-hidden bg-slate-900 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-7 w-full">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl font-extrabold text-white"
          >
            Contact Us
          </motion.h1>
        </div>
      </div>

      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Contact Info Cards ─────────────────────────────── */}
          {/* Mobile: 2-col grid / Desktop: 4-col grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">

            {/* Office Location */}
            <a
              href="https://goo.gl/maps/CHZ21spKpt6kHuT67"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + "18" }}>
                <MapPin className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Location</p>
                <p className="text-slate-800 font-semibold text-sm leading-snug">
                  {address.street}<br />{address.city}, {address.state} {address.zip}
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${phone}`}
              className="flex flex-col items-center text-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + "18" }}>
                <Phone className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Phone</p>
                <p className="font-bold text-sm" style={{ color: colors.primaryHex }}>{phoneFormatted}</p>
                <p className="text-slate-500 text-xs mt-0.5">Emergency: 24/7</p>
              </div>
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex flex-col items-center text-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + "18" }}>
                <Mail className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Email</p>
                <p className="text-slate-700 text-xs sm:text-sm break-all leading-snug">{email}</p>
              </div>
            </a>

            {/* Hours */}
            <div className="flex flex-col items-center text-center gap-3 p-5 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: colors.primaryHex + "18" }}>
                <Clock className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Hours</p>
                <p className="text-slate-700 text-xs sm:text-sm">Mon–Fri: 8am – 5pm</p>
                <p className="text-slate-700 text-xs sm:text-sm">Sat: By Appointment</p>
                <p className="text-xs font-bold mt-1" style={{ color: colors.primaryHex }}>Emergency: 24/7</p>
              </div>
            </div>
          </div>

          {/* ── Form + Map ─────────────────────────────────────── */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-1">Get Your Free Estimate</h2>
              <p className="text-slate-500 text-sm mb-6">We reply within 24 hours. No obligation, no pressure.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-14 h-14 mb-4" style={{ color: colors.primaryHex }} aria-hidden="true" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500 text-sm">Thank you — we'll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">
                        Your Name <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id="name" name="name" type="text" required autoComplete="name"
                        value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        aria-required="true"
                        aria-invalid={errors.name}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-colors ${errors.name ? "border-red-400" : "border-slate-200 focus:border-green-500"}`}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">Required</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">
                        Phone <span aria-hidden="true" className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone" name="phone" type="tel" required autoComplete="tel"
                        value={form.phone} onChange={handleChange}
                        placeholder="(203) 555-0100"
                        aria-required="true"
                        aria-invalid={errors.phone}
                        className={`w-full px-4 py-3 rounded-xl border-2 focus:outline-none text-sm transition-colors ${errors.phone ? "border-red-400" : "border-slate-200 focus:border-green-500"}`}
                      />
                      {errors.phone && <p className="text-red-500 text-xs mt-1">Required</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      id="email" name="email" type="email" autoComplete="email"
                      value={form.email} onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-slate-700 mb-1">Service Needed</label>
                    <select
                      id="service" name="service"
                      value={form.service} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors bg-white"
                    >
                      <option value="">Select a service...</option>
                      <option>Heating Repair / Replacement</option>
                      <option>AC Repair / Replacement</option>
                      <option>Annual Tune-Up / Maintenance</option>
                      <option>Commercial HVAC</option>
                      <option>New System Installation</option>
                      <option>Emergency Service</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message" name="message" rows={4} autoComplete="off"
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your system or issue..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-base hover:brightness-110 active:scale-95 transition-all"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    <Send className="w-5 h-5" aria-hidden="true" />
                    Send Message
                  </button>
                  <p className="text-center text-slate-400 text-xs">Or call us directly: <a href={`tel:${phone}`} className="font-semibold underline" style={{ color: colors.primaryHex }}>{phoneFormatted}</a></p>
                </form>
              )}
            </div>

            {/* Map + CTA */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 mb-5" style={{ height: "280px" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3583849048127!2d-73.07834492346735!3d41.34283419715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d8f75e8b40d1%3A0x3c2c7ab77dbf6b0e!2sSuperior%20Comfort%20Heating%20%26%20Air%20Conditioning%20LLC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Superior Comfort Heating and Air Conditioning location in Ansonia CT"
                />
              </div>

              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.dark }}>
                <h3 className="font-bold text-lg mb-1">Need Help Right Now?</h3>
                <p className="text-white/75 text-sm mb-4">We are available 24/7 for heating and AC emergencies across southern Connecticut.</p>
                <a
                  href={`tel:${phone}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-white hover:bg-slate-100 active:scale-95 transition-all text-sm whitespace-nowrap"
                  style={{ color: colors.dark }}
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  Call {phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}