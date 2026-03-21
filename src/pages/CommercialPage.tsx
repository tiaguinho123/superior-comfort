import { motion } from "motion/react";
import { Phone, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";

const AGREEMENTS = [
  "Air Conditioning and/or Heating maintenance",
  "Priority Service",
  "Labor Discounts",
  "Discounts On Materials",
  "Servicing various types of makes and models",
  "Maintain Peak Efficiency and Performance of the system",
];

export default function CommercialPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div className="pt-20">
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://superiorcomfort.com/wp-content/uploads/2023/04/worker-repairing-ceiling-air-conditioning-unit_85869-7023-1.jpg"
          alt="Technician repairing commercial ceiling air conditioning unit"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-white">
              Commercial Heating &amp; Air Conditioning
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Commercial</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Commercial Heating &amp; Air Conditioning Contractor</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Superior Comfort Heating &amp; Air Conditioning LLC provides quality products and services for commercial heating and air conditioning systems. Our experienced team work closely with commercial clients to plan, design and install the right heating or cooling system for your needs.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We pride ourselves on giving every commercial heating or commercial air conditioning project the same high level of attention and quality service. Since we stand behind our workmanship one hundred percent, we know that doing it right the first time is always the best path to success.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our team of experienced installers can work with you to plan, design and install any heating or cooling system in your space. Designs range from 1,200 to 12,000 square feet.
              </p>
              <div className="flex gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold hover:brightness-110 transition-all whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                  <Phone className="w-4 h-4" />
                  {phoneFormatted}
                </a>
                <Link to="/contact-us" className="inline-flex items-center px-6 py-3 rounded-lg font-bold border-2 border-slate-300 hover:border-green-500 transition-colors">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/worker-repairing-ceiling-air-conditioning-unit_85869-7023-1.jpg" alt="Commercial HVAC service" className="w-full h-52 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" />
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/commercial-ducts-narrow.jpg" alt="Commercial HVAC ductwork" className="w-full h-48 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Free estimate CTA */}
      <div className="py-8 bg-slate-50 border-y border-slate-200 text-center">
        <p className="text-slate-700 font-semibold mb-2">Send us a few details about your project, and we will supply a free project estimate. No obligations!</p>
        <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold hover:brightness-110 transition-all" style={{ backgroundColor: colors.primaryHex }}>
          <Phone className="w-4 h-4" />
          Contact Us Now
        </a>
      </div>

      {/* Preventative Maintenance */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Preventative Maintenance</h2>
          <p className="text-slate-600 mb-6 leading-relaxed max-w-2xl">
            Your heating and cooling equipment is a major financial investment. From experience, you know that preventive maintenance extends the life of your heating or cooling system, as well as ensures quality performance. Not only will routine maintenance extend the life of your equipment, it also ensures that your system is running at peak efficiency. We offer yearly Customized Service Agreements which will help protect your financial investment.
          </p>

          <h3 className="text-xl font-bold text-slate-900 mb-5">Our Customized Service Agreements provide:</h3>
          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {AGREEMENTS.map((item) => (
              <div key={item} className="flex items-start gap-3 bg-slate-50 rounded-xl px-4 py-3 border border-slate-100">
                <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} />
                <span className="text-slate-700 text-sm">{item}</span>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3618.jpg" alt="Technician cleaning air conditioner filter" className="w-full h-52 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" />
            <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/AirConditionerTechnician.jpeg" alt="Air conditioner technician at work" className="w-full h-52 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
          </div>

          <div className="mt-8 p-6 rounded-2xl text-white text-center" style={{ backgroundColor: colors.dark }}>
            <p className="font-bold text-lg mb-1">All preventive maintenance services will be performed by our technician to ensure that your system will be running at peak performance all year round.</p>
            <p className="text-white/80 mt-2">To learn more about our Service Agreements, call <a href={`tel:${phone}`} className="underline font-bold">{phoneFormatted}</a> to set up a consultation.</p>
          </div>
        </div>
      </section>

      {/* Bottom badges */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {["Reliable Service", "26 Years of Experience", "A Friendly Service Team"].map((label) => (
              <div key={label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
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