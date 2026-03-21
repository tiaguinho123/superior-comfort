import { motion } from "motion/react";
import { Phone, CheckCircle, Award } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";

// Real SC truck photo — hosted locally, no CDN hotlink blocking
const TRUCK_IMAGE = "/sc_truck.png";

const REVIEWS = [
  { name: "Arnie", role: "Home Owner", text: "Thanks for your quick response to our water tank crisis. It's always a worry when something goes wrong at the lake and we are not there. We really appreciate your help.", date: "7 Days Ago" },
  { name: "Joy", role: "Landlord", text: "You're a rock star. Soooooooo efficient. Thank you!", date: "10.04.2018" },
  { name: "Peter", role: "Architect, Westport CT", text: "We had a number of AC balancing adjustments and HVAC problems to solve and Sal was outstanding and very responsive.", date: "5 Months Ago" },
  { name: "Barbara", role: "Home Owner", text: "Sal's knowledge and creativity solved every potential problem making for a smooth transition.", date: "6 Months Ago" },
];

export default function AboutPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div className="pt-20">
      {/* Hero Banner — real SC truck photo */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={TRUCK_IMAGE}
          alt="Superior Comfort Heating and Air Conditioning service truck"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg";
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">About Us</h1>
              <p className="text-white/80 text-lg">Superior Comfort Heating &amp; Air Conditioning LLC</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 mb-10">
        <div className="flex flex-wrap gap-4">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg border border-slate-100">
            <span className="text-3xl font-extrabold" style={{ color: colors.primaryHex }}>20+</span>
            <span className="text-slate-600 font-medium text-sm">Years of Experience</span>
          </div>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow-lg border border-slate-100">
            <Award className="w-6 h-6" style={{ color: colors.primaryHex }} />
            <span className="text-slate-600 font-medium text-sm">Rheem Top Contractor</span>
          </div>
        </div>
      </div>

      {/* Main About */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>About Us</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6">Superior Comfort Heating &amp; Air Conditioning LLC</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Superior Comfort Heating &amp; Air Conditioning LLC has the right team, facility, and service fleet to meet all of your heating and cooling contractor needs. Our versatility enables us to work with homeowners, general contractors, architects, and business owners regardless of the requirements of the job.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Our reputation is built on our commitment to excellence and design. Our priority is customer service and satisfaction.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Superior Comfort Heating &amp; Air Conditioning LLC was founded in <strong>1996 by Sal Colapietro</strong> who has over 22 years of experience in designing, installing and servicing all aspects of heating and air conditioning systems.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We have been honored as a <strong>"Top Contractor"</strong> by Rheem. We welcome the opportunity to become your "Top Contractor" for any and all of your HVAC needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-bold transition-all hover:brightness-110 whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                  <Phone className="w-4 h-4" />
                  {phoneFormatted}
                </a>
                <Link to="/contact-us" className="inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold border-2 border-slate-200 text-slate-900 hover:border-green-500 transition-colors">
                  Free Estimate
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg"
                alt="Superior Comfort HVAC technician servicing an air conditioner"
                className="w-full h-80 object-cover rounded-2xl shadow-md"
                loading="lazy" decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why hire section */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-8 text-center">Why Hire an HVAC Contractor?</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { label: "Reliable Service", desc: "We stand behind our workmanship 100%. Getting it done right the first time is always our goal." },
              { label: "26+ Years of Experience", desc: "Founded in 1996, we have decades of experience installing and servicing all HVAC systems." },
              { label: "A Friendly Service Team", desc: "Our team works with homeowners, architects, and businesses — always with courtesy and precision." },
            ].map((item) => (
              <div key={item.label} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                <CheckCircle className="w-8 h-8 mb-4" style={{ color: colors.primaryHex }} />
                <h3 className="font-bold text-slate-900 mb-2">{item.label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-3">Send us a few details about your project</h2>
          <p className="text-slate-500 mb-6">We will supply a FREE PROJECT ESTIMATE. No obligations!</p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-bold text-lg hover:brightness-110 transition-all" style={{ backgroundColor: colors.primaryHex }}>
            <Phone className="w-5 h-5" />
            Contact Now — {phoneFormatted}
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">Here's a small sampling of feedback from our satisfied customers:</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {REVIEWS.map((r) => (
              <div key={r.name} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="flex text-amber-400 mb-3 text-lg">{"★★★★★"}</div>
                <p className="text-slate-700 mb-4 italic leading-relaxed">"{r.text}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">From {r.name}</p>
                    <p className="text-slate-500 text-sm">{r.role}</p>
                  </div>
                  <span className="text-xs text-slate-400">{r.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}