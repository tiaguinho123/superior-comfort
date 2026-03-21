import { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { useSiteConfig } from "../config/SiteConfigContext";

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, colors } = useSiteConfig();
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-20">
      <div className="relative h-48 overflow-hidden bg-slate-900 flex items-end">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-white">
            Contact Us
          </motion.h1>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact info cards - properly sized */}
          <div className="grid md:grid-cols-4 gap-5 mb-14">
            <a href="https://goo.gl/maps/CHZ21spKpt6kHuT67" target="_blank" rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all group col-span-1">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primaryHex + "15" }}>
                <MapPin className="w-6 h-6" style={{ color: colors.primaryHex }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Office Location</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {address.street}<br />
                {address.city}, {address.state} {address.zip}
              </p>
            </a>

            <a href={`tel:${phone}`}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all group col-span-1">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primaryHex + "15" }}>
                <Phone className="w-6 h-6" style={{ color: colors.primaryHex }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Call Us</h3>
              <p className="font-bold" style={{ color: colors.primaryHex }}>{phoneFormatted}</p>
              <p className="text-slate-500 text-xs mt-1">Emergency: Always Available</p>
            </a>

            <a href={`mailto:${email}`}
              className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 hover:shadow-md hover:-translate-y-0.5 transition-all group col-span-1">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primaryHex + "15" }}>
                <Mail className="w-6 h-6" style={{ color: colors.primaryHex }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Email Us</h3>
              <p className="text-slate-600 text-sm break-all">{email}</p>
            </a>

            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 col-span-1">
              <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center" style={{ backgroundColor: colors.primaryHex + "15" }}>
                <Clock className="w-6 h-6" style={{ color: colors.primaryHex }} />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-sm">Hours</h3>
              <p className="text-slate-600 text-sm">Mon-Fri: 8am - 5pm</p>
              <p className="text-slate-600 text-sm">Sat: By Appointment</p>
              <p className="font-semibold text-sm mt-1" style={{ color: colors.primaryHex }}>Emergency: 24/7</p>
            </div>
          </div>

          {/* Form + Map */}
          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Get A Free Estimate</h2>
              <p className="text-slate-500 text-sm mb-6">Send us a few details and we will get back to you with no obligations.</p>

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="w-16 h-16 mb-4" style={{ color: colors.primaryHex }} />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Message Sent!</h3>
                  <p className="text-slate-500">Thank you! We will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Your Name *</label>
                      <input
                        id="name" name="name" type="text" required
                        value={form.name} onChange={handleChange}
                        placeholder="John Smith"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-1">Phone Number *</label>
                      <input
                        id="phone" name="phone" type="tel" required
                        value={form.phone} onChange={handleChange}
                        placeholder="(203) 555-0100"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
                    <input
                      id="email" name="email" type="email"
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
                      <option>Annual Tune-Up</option>
                      <option>Commercial HVAC</option>
                      <option>New Installation</option>
                      <option>Other / Emergency</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1">Message</label>
                    <textarea
                      id="message" name="message" rows={4}
                      value={form.message} onChange={handleChange}
                      placeholder="Tell us about your project or issue..."
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-green-500 focus:outline-none text-sm transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-xl text-white font-bold text-base hover:brightness-110 transition-all"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map */}
            <div>
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 mb-6 h-72 md:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3583849048127!2d-73.07834492346735!3d41.34283419715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d8f75e8b40d1%3A0x3c2c7ab77dbf6b0e!2sSuperior%20Comfort%20Heating%20%26%20Air%20Conditioning%20LLC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Superior Comfort Location"
                />
              </div>
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: colors.dark }}>
                <h3 className="font-bold text-lg mb-1">Need Immediate Help?</h3>
                <p className="text-white/75 text-sm mb-4">We offer 24/7 emergency HVAC service across southern Connecticut.</p>
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold bg-white hover:bg-slate-100 transition-all whitespace-nowrap text-sm" style={{ color: colors.dark }}>
                  <Phone className="w-4 h-4" />
                  {phoneFormatted}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}