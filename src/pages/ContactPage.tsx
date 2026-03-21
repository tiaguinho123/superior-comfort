import { motion } from "motion/react";
import { MapPin, Phone, Mail } from "lucide-react";
import { useSiteConfig } from "../config/SiteConfigContext";

export default function ContactPage() {
  const { phone, phoneFormatted, email, address, colors } = useSiteConfig();
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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">Get In Touch With Us</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-14">
            <a href={"https://goo.gl/maps/CHZ21spKpt6kHuT67"} target="_blank" rel="noopener noreferrer"
              className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-md transition-shadow group">
              <MapPin className="w-10 h-10 mx-auto mb-4" style={{ color: colors.primaryHex }} />
              <h3 className="font-bold text-slate-900 mb-2">Office Location</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Superior Comfort Heating &amp; Air Conditioning LLC<br />
                {address.street}<br />
                {address.city}, {address.state} {address.zip}
              </p>
            </a>
            <a href={`tel:${phone}`}
              className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-md transition-shadow group">
              <Phone className="w-10 h-10 mx-auto mb-4" style={{ color: colors.primaryHex }} />
              <h3 className="font-bold text-slate-900 mb-2">Give Us A Call</h3>
              <p className="font-bold text-lg" style={{ color: colors.primaryHex }}>{phoneFormatted}</p>
              <p className="text-slate-500 text-sm mt-1">Emergency: Always Available</p>
            </a>
            <a href={`mailto:${email}`}
              className="bg-slate-50 rounded-2xl p-8 text-center border border-slate-100 hover:shadow-md transition-shadow group">
              <Mail className="w-10 h-10 mx-auto mb-4" style={{ color: colors.primaryHex }} />
              <h3 className="font-bold text-slate-900 mb-2">Email Us</h3>
              <p className="text-slate-600 text-sm break-all">{email}</p>
            </a>
          </div>

          {/* Google Maps embed */}
          <div className="rounded-2xl overflow-hidden shadow-md border border-slate-100 mb-10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2993.3583849048127!2d-73.07834492346735!3d41.34283419715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e7d8f75e8b40d1%3A0x3c2c7ab77dbf6b0e!2sSuperior%20Comfort%20Heating%20%26%20Air%20Conditioning%20LLC!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Superior Comfort Location"
            />
          </div>

          {/* Simple contact info card */}
          <div className="rounded-2xl p-8 text-white text-center" style={{ backgroundColor: colors.dark }}>
            <h3 className="text-2xl font-extrabold mb-2">Ready to Get a Free Estimate?</h3>
            <p className="text-white/75 mb-6">Send us a few details about your project and we will get back to you with a free project estimate. No obligations!</p>
            <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-bold text-lg bg-white hover:bg-slate-100 transition-all whitespace-nowrap" style={{ color: colors.dark }}>
              <Phone className="w-5 h-5" />
              {phoneFormatted}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}