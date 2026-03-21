import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Star, Check, Plus, Minus } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";
import TrustBadges from "../components/TrustBadges";
import GoogleReviews from "../components/GoogleReviews";

const HERO_IMAGE = "/sc_hero.png";

const HOME_SERVICES = [
  {
    title: "Residential Services",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/service-man-adjusting-house-heating-system-683x1024.jpg",
    desc: "Top rated in New Haven and Fairfield county for boiler and furnace repair. We stand behind our workmanship one hundred percent.",
    path: "/residential",
  },
  {
    title: "Commercial Services",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/men-working-with-equipment-full-shot.jpg",
    desc: "Our team of experienced installers can work with you to plan and design any heating or cooling system. Designs range from 1,200 to 12,000 square feet.",
    path: "/commercial",
  },
  {
    title: "System Maintenance",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/residential-units-narrow.jpg",
    desc: "Superior Comfort offers complete services for all heating and air conditioning systems. We strive to provide dependable service you can rely on.",
    path: "/products",
  },
];

const WHY_US_ITEMS = [
  {
    title: "Heating & Cooling Tune-Up!",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg",
    body: "From experience, you know that preventive maintenance on your vehicle extends the life of your car. This is also true for your heating and cooling equipment. Routine maintenance extends the life of your equipment and ensures your system is running at peak efficiency.",
  },
  {
    title: "Preventative HVAC Maintenance",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/technician-service-removing-air-filter-air-conditioner-cleaning_35076-3618.jpg",
    body: "Your heating and cooling equipment is a major financial investment. We offer yearly Customized Service Agreements which will help protect your financial investment and avoid future system malfunctions.",
  },
  {
    title: "Quality HVAC Products",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/boiler-piping.jpg",
    body: "Superior Comfort has built strong relationships with manufacturers including Rheem, Burnham Hydronics, Carrier, Honeywell, Weil-McLain, Buderus, Aprilaire and Daikin. We can provide product sales, installation and service for any brand.",
  },
  {
    title: "Other Services",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-ventilation-system-683x1024.jpg",
    body: "Our team are also experienced in specialist services such as dehumidification systems for indoor pools, radiant heat and air quality control systems. We handle everything from design to implementation.",
  },
];

const BRANDS = [
  { name: "Mitsubishi", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Mitsubishi_logo_standart-removebg-preview.png" },
  { name: "Carrier", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Carrier_logo_logotype-removebg-preview.png" },
  { name: "Daikin", img: "https://superiorcomfort.com/wp-content/uploads/2023/03/daikin_logo-e1431462211946.jpg" },
  { name: "Rheem", img: "https://superiorcomfort.com/wp-content/uploads/2023/04/Rheem_logo.svg-e1431461989240.png" },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();
  const [activeItem, setActiveItem] = useState(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ minHeight: "580px" }}>
          <img
            src={HERO_IMAGE}
            alt="Superior Comfort Heating and Air Conditioning LLC"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
          <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: "580px" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-2xl">
                <a href={reviews.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7 hover:bg-white/18 transition-colors">
                  <span className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}</span>
                  <span className="text-white text-sm font-semibold">{reviews.rating} &middot; <span className="text-amber-300 font-bold">{reviews.count} Google Reviews</span></span>
                </a>
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  Stay Cool and Breathe Easy:<br />
                  <span style={{ color: colors.primaryHex }}>Professional AC Servicing at Your Doorstep</span>
                </h1>
                <ul className="mb-7 space-y-2">
                  {["We are professional contractors", "We are certified workers", "The most trusted company", "We are expert technicians"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/85 text-base">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-xl text-base hover:brightness-110 transition-all shadow-lg whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                    <Phone className="w-5 h-5" />
                    {phoneFormatted}
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border-2 border-white/50 text-white font-bold rounded-xl text-base hover:bg-white/20 transition-all whitespace-nowrap">
                    Get A Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <div className="py-5 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-10 text-center">
          {[{ label: "Emergency HVAC", value: "24/7" }, { label: "Years in Business", value: "26+" }, { label: "SW Connecticut", value: "Service Area" }].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold" style={{ color: colors.primaryHex }}>{s.value}</p>
              <p className="text-slate-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* 3 Service Cards */}
      <section className="py-16 bg-slate-50" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Do</p>
            <h2 className="text-3xl font-extrabold text-slate-900">Top Rated for Furnace and Air Conditioning Installation and Repair</h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">In New Haven &amp; Fairfield County. We stand behind our workmanship one hundred percent.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOME_SERVICES.map((svc) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="relative h-52 overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <h3 className="absolute bottom-4 left-5 text-white font-bold text-lg">{svc.title}</h3>
                </div>
                <div className="p-6">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link to={svc.path} className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-lg text-white transition-all hover:brightness-110" style={{ backgroundColor: colors.primaryHex }}>
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us — interactive accordion with image swap */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Why Choose Us</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Why you should choose our services</h2>
              <div className="space-y-3">
                {WHY_US_ITEMS.map((item, i) => (
                  <div key={item.title}>
                    <button
                      className="w-full text-left rounded-xl border-2 px-5 py-4 transition-all"
                      style={{
                        borderColor: activeItem === i ? colors.primaryHex : "#e2e8f0",
                        backgroundColor: activeItem === i ? colors.primaryHex + "08" : "#f8fafc",
                      }}
                      onClick={() => setActiveItem(i)}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "16px" }}>
                        <span className="font-semibold text-slate-900 text-left">{item.title}</span>
                        <span className="flex-shrink-0">
                          {activeItem === i
                            ? <Minus className="w-5 h-5" style={{ color: colors.primaryHex }} />
                            : <Plus className="w-5 h-5 text-slate-400" />
                          }
                        </span>
                      </div>
                      <AnimatePresence>
                        {activeItem === i && (
                          <motion.p
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 12 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.25 }}
                            className="text-slate-600 text-sm leading-relaxed overflow-hidden text-left"
                          >
                            {item.body}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Image changes on click */}
            <div className="sticky top-28">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem}
                  src={WHY_US_ITEMS[activeItem].img}
                  alt={WHY_US_ITEMS[activeItem].title}
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35 }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Experts + brands */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">We are Heating &amp; Air Conditioning Experts in Southern CT</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            At Superior Comfort Heating &amp; Air Conditioning LLC we take pride in being the leading professionals in AC services. With years of experience and a team of skilled technicians, we are dedicated to providing top-quality air conditioning services that you can rely on.
          </p>
          <div className="flex flex-wrap justify-center gap-6 items-center mb-6">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-slate-100 w-28 h-16">
                <img src={brand.img} alt={brand.name} className="max-h-10 max-w-full object-contain" loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {["Reliable Service", "26+ Years of Experience", "A Friendly Service Team"].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: colors.primaryHex }} />
                <span className="font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* Final CTA */}
      <div className="py-12" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-3">Do you have any questions?</p>
          <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-lg bg-white hover:bg-slate-100 transition-all" style={{ color: colors.dark }}>
            <Phone className="w-5 h-5" />
            {phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}