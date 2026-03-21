import { motion } from "motion/react";
import { Phone, Check } from "lucide-react";
import { useSiteConfig } from "../config/SiteConfigContext";

const AC_TUNEUP = [
  "Check blower wheel and motor",
  "Lubricate motors as needed per factory specifications",
  "Check thermostat operation",
  "Check operation of all safety controls",
  "Check refrigerant charge",
  "Check relays and contactors",
  "Replace or clean air filter",
  "Check condenser coil",
  "Check evaporator coil",
  "Vacuum blower compartment",
  "Check electrical connections",
  "Check zoning system and dampers if applies",
  "Check condensate pump",
  "Clean drain line",
  "Check air temperatures",
  "Check and secure all panels",
  "Check overall operation of system",
];

export default function ResidentialPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://superiorcomfort.com/wp-content/uploads/2023/04/service-man-adjusting-house-heating-system-683x1024.jpg"
          alt="HVAC technician adjusting residential heating system"
          className="w-full h-full object-cover object-top"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-white">
              Residential Services
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Intro */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Residential Service</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Professional Home HVAC Services</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Whether your HVAC system isn't working as efficiently as it should, or you simply need a general service to keep it running at its best, we can help.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Superior Comfort Heating &amp; Air Conditioning LLC provides quality products and services for residential heating. Our experienced installers can help you to plan, design and install any heating or cooling system in your home. Our home designs range from 1,200 to 12,000 square feet.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                At Superior Comfort our team prides itself on always providing the best level of quality and attention to detail on every installed system. Standing by this commitment, we believe that a good job means getting it done right the first time.
              </p>
              <div className="mb-6 p-4 rounded-xl border-l-4" style={{ borderLeftColor: colors.primaryHex, backgroundColor: colors.primaryHex + "0d" }}>
                <p className="font-semibold text-slate-900 mb-1">Heating and Cooling Supplies</p>
                <p className="text-slate-600 text-sm">We are pleased to offer systems and parts from the industry's leading manufacturers. Visit our <a href="/products" className="underline" style={{ color: colors.primaryHex }}>products page</a> to see the brands we supply.</p>
              </div>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold hover:brightness-110 transition-all whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                <Phone className="w-4 h-4" />
                {phoneFormatted}
              </a>
            </div>
            <div className="space-y-4">
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/service-man-adjusting-house-heating-system-683x1024.jpg" alt="Residential HVAC service" className="w-full h-56 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" />
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/residential-units-narrow.jpg" alt="Residential AC units" className="w-full h-48 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency + CTA strip */}
      <div className="py-8 text-white text-center" style={{ backgroundColor: colors.dark }}>
        <p className="font-bold text-xl mb-1">Need a HVAC Contractor? Emergencies, Yearly &amp; Bi-Yearly Plans</p>
        <a href={`tel:${phone}`} className="text-lg font-extrabold underline underline-offset-2">{phoneFormatted}</a>
      </div>

      {/* Annual Tune-Up section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Maintenance</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Residential Annual Tune-Ups</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                HVAC is no different to owning a vehicle — it needs regular maintenance. In addition to extending the useful lifespan of your HVAC equipment, annual tune-ups also make sure your system continues to run at optimum efficiency.
              </p>
              <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold hover:brightness-110 transition-all whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                <Phone className="w-4 h-4" />
                Schedule Tune-Up
              </a>
            </div>
            <div>
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/RHClassic_AC-RA14_units-268x300-1.png" alt="Rheem residential AC unit" className="w-48 object-contain mx-auto mb-6" loading="lazy" decoding="async" />
            </div>
          </div>

          {/* Tune-up checklist */}
          <div className="mt-10">
            <h3 className="text-xl font-bold text-slate-900 mb-6">What's Included in our A/C Tune-Up?</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {AC_TUNEUP.map((item) => (
                <div key={item} className="flex items-start gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-slate-100">
                  <Check className="w-5 h-5 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} />
                  <span className="text-slate-700 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Bottom image + free estimate */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/main-qimg-2570219687f6c263bc10b61e106abe3e-lq.jpeg" alt="HVAC equipment" className="w-full max-w-xl mx-auto h-52 object-cover rounded-2xl shadow-md mb-8" loading="lazy" decoding="async" />
          <h3 className="text-xl font-bold text-slate-900 mb-2">Send us a few details about your project</h3>
          <p className="text-slate-500 mb-6">We will supply a free project estimate. No obligations!</p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-white font-bold text-lg hover:brightness-110 transition-all" style={{ backgroundColor: colors.primaryHex }}>
            <Phone className="w-5 h-5" />
            {phoneFormatted}
          </a>
        </div>
      </section>
    </div>
  );
}