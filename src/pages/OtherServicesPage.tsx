import { motion } from "motion/react";
import { Phone, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";

const SERVICES = [
  { title: "Custom Wine Cellars", desc: "We design and install custom climate-controlled wine cellars to maintain the perfect temperature and humidity for your collection." },
  { title: "Dehumidification Systems for Indoor Pools", desc: "Specialized dehumidification systems designed for indoor aquatic environments, preventing moisture damage and ensuring air quality." },
  { title: "Radiant Heat Systems", desc: "Efficient and comfortable in-floor or radiant panel heating systems for residential and commercial applications." },
  { title: "Indoor Air Quality Control Systems", desc: "Comprehensive IAQ solutions including air purification, filtration, humidification, and ventilation systems for healthier indoor air." },
];

export default function OtherServicesPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div className="pt-20">
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-ventilation-system-683x1024.jpg" alt="HVAC ventilation system" className="w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-white">
              Other Services
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Our Services</p>
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">Specialist HVAC Services</h2>
          <p className="text-slate-600 mb-10 leading-relaxed max-w-2xl">
            In addition to our core heating and cooling services, we are experienced designers and installers of specialized climate control systems. We handle everything from design to implementation for residential and commercial properties.
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {SERVICES.map((svc) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-md transition-shadow">
                <Check className="w-8 h-8 mb-4" style={{ color: colors.primaryHex }} />
                <h3 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="py-12 text-white text-center" style={{ backgroundColor: colors.dark }}>
        <h2 className="text-2xl font-extrabold mb-3">Send us a few details about your project</h2>
        <p className="text-white/75 mb-6">We will supply a free project estimate. No obligations!</p>
        <p className="text-lg font-bold mb-6">Free heating system estimate or air-conditioning estimate</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg bg-white hover:bg-slate-100 transition-all whitespace-nowrap" style={{ color: colors.dark }}>
            <Phone className="w-5 h-5" />
            {phoneFormatted}
          </a>
          <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-bold text-lg border-2 border-white text-white hover:bg-white/10 transition-all">
            Contact Now
          </Link>
        </div>
      </div>

      <section className="py-12 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {["Reliable Service", "26 Years of Experience", "A Friendly Service Team"].map((label) => (
              <div key={label} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                <Check className="w-8 h-8 mx-auto mb-3" style={{ color: colors.primaryHex }} />
                <p className="font-bold text-slate-900">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}