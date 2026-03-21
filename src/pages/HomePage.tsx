import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, Star, Check, Plus, Minus, Shield, Clock, Award, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";
import TrustBadges from "../components/TrustBadges";
import GoogleReviews from "../components/GoogleReviews";

// All images hosted locally — no CDN hotlink blocking
const HERO_IMAGE = "/13107746_5134336-scaled.jpg";

const HOME_SERVICES = [
  {
    title: "Residential Services",
    img: "/svc-residential.jpg",
    desc: "Boiler, furnace & AC repair, installation and tune-ups for homeowners across New Haven & Fairfield County. 100% satisfaction guaranteed.",
    path: "/residential",
    badge: "Most Popular",
  },
  {
    title: "Commercial HVAC",
    img: "/svc-commercial.jpg",
    desc: "From small offices to 12,000 sq ft facilities — custom heating & cooling system design, installation, and ongoing maintenance agreements.",
    path: "/commercial",
    badge: null,
  },
  {
    title: "System Maintenance",
    img: "/svc-maintenance.jpg",
    desc: "Preventative maintenance plans that catch problems before they become $3,000 emergencies. Keep your system running at peak efficiency year-round.",
    path: "/products",
    badge: "Save Money",
  },
];

const WHY_US_ITEMS = [
  {
    title: "Annual Tune-Up — Saves You Money Every Month",
    img: "/why-tuneup.jpg",
    body: "A properly maintained HVAC system runs 15–25% more efficiently, directly lowering your energy bill. Our 17-point tune-up also prevents the #1 cause of emergency breakdowns. Most customers save more than the tune-up cost in the first month.",
  },
  {
    title: "Customized Service Agreements — Zero Surprise Bills",
    img: "/why-maintenance.jpg",
    body: "Your heating and cooling system is a major investment. Our Customized Service Agreements give you priority scheduling, discounted repairs, and two annual inspections — all for a flat yearly fee. No surprises, ever.",
  },
  {
    title: "Top-Tier Brands — Installed by Rheem-Certified Pros",
    img: "/why-products.jpg",
    body: "We are a Rheem Top Contractor. We source from Rheem, Burnham, Carrier, Daikin, Mitsubishi Electric, and more. That means factory-backed warranties and the right equipment for Connecticut winters — not whatever's cheapest.",
  },
  {
    title: "Specialist Services Other Companies Won't Touch",
    img: "/why-other.jpg",
    body: "Custom wine-cellar climate control, indoor pool dehumidification, radiant heating, and whole-home indoor air quality systems. We handle jobs from design through installation — no subcontractors.",
  },
];

const FAQ_ITEMS = [
  {
    q: "How quickly can you respond to an emergency?",
    a: "We offer 24/7 emergency service. For urgent no-heat or no-AC situations in Ansonia, Derby, Shelton and surrounding areas we aim to be on-site within 2–4 hours.",
  },
  {
    q: "Do you offer free estimates?",
    a: "Yes — all new installation and replacement quotes are completely free with no obligation. Call (203) 736-6309 or use our contact form and we'll schedule a visit within 24 hours.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Ansonia, Derby, Shelton, Orange, Seymour, Woodbridge, Milford, West Haven, New Haven, Hamden, Naugatuck, Bethany, Trumbull, Monroe, Bridgeport, and Stratford — all of southern Connecticut.",
  },
  {
    q: "How often should I have my HVAC system serviced?",
    a: "Twice a year is ideal — once before heating season (fall) and once before cooling season (spring). Our Annual Service Agreement covers both visits and keeps your warranty valid.",
  },
  {
    q: "Are you licensed and insured in Connecticut?",
    a: "Yes. Superior Comfort Heating & Air Conditioning LLC is a fully licensed and insured CT HVAC contractor. We are also a Rheem Top Contractor award winner.",
  },
  {
    q: "What brands do you service?",
    a: "We service all major brands including Rheem, Carrier, Daikin, Mitsubishi, Burnham, Weil-McLain, Buderus, Aprilaire, and Honeywell. If it heats or cools, we can fix or replace it.",
  },
];

const BRANDS = [
  { name: "Mitsubishi Electric", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Mitsubishi_logo_standart-removebg-preview.png" },
  { name: "Carrier", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Carrier_logo_logotype-removebg-preview.png" },
  { name: "Daikin", img: "https://superiorcomfort.com/wp-content/uploads/2023/03/daikin_logo-e1431462211946.jpg" },
  { name: "Rheem", img: "https://superiorcomfort.com/wp-content/uploads/2023/04/Rheem_logo.svg-e1431461989240.png" },
];

const TRUST_POINTS = [
  { icon: Shield, label: "Licensed & Insured CT" },
  { icon: Award, label: "Rheem Top Contractor" },
  { icon: Clock, label: "26+ Years Experience" },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();
  const [activeItem, setActiveItem] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div>
      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative" aria-label="Hero — Superior Comfort HVAC">
        <div className="relative overflow-hidden" style={{ minHeight: "clamp(520px, 70vh, 680px)" }}>
          <img
            src={HERO_IMAGE}
            alt="Superior Comfort HVAC technicians servicing a commercial ceiling unit in Connecticut"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/65 to-black/45" />
          <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: "clamp(520px, 70vh, 680px)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-xl"
              >
                {/* Social proof badge */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/25 backdrop-blur-sm mb-6 hover:bg-white/18 transition-colors"
                  aria-label={`${reviews.rating} stars on Google — ${reviews.count} reviews`}
                >
                  <span className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                  </span>
                  <span className="text-white text-xs font-medium">{reviews.rating} · <strong className="text-amber-300">{reviews.count} Google Reviews</strong></span>
                </a>

                {/* Headline — Problem → Solution → Location */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">
                  Southern CT's Most Trusted<br />
                  <span style={{ color: colors.primaryHex }}>Heating & AC Company</span>
                </h1>
                <p className="text-white/85 text-base sm:text-lg mb-6 leading-relaxed">
                  Family-owned since 1996 · Rheem Top Contractor · Same-day service available
                </p>

                {/* Outcome-focused bullets */}
                <ul className="mb-7 space-y-2" role="list">
                  {[
                    "Free estimates — no surprise fees",
                    "Emergency service 24/7 — we answer the phone",
                    "26 years serving New Haven & Fairfield County",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-white/90 text-sm sm:text-base">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 text-white font-bold rounded-xl text-base hover:brightness-110 active:scale-95 transition-all shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Free Estimate — {phoneFormatted}
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 active:scale-95 transition-all text-white font-bold rounded-xl text-base whitespace-nowrap shadow-lg"
                  >
                    🚨 24/7 Emergency Call
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <div className="py-5 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              { value: "24/7", label: "Emergency Service" },
              { value: "500+", label: "Happy Homeowners" },
              { value: "26+", label: "Years of Experience" },
            ].map((s) => (
              <div key={s.label} className="py-2">
                <p className="text-xl sm:text-2xl font-extrabold" style={{ color: colors.primaryHex }}>{s.value}</p>
                <p className="text-slate-500 text-xs sm:text-sm mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* ── SERVICE CARDS ───────────────────────────────────── */}
      <section className="py-14 bg-slate-50" id="services" aria-label="Our services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Do</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Top Rated HVAC in New Haven & Fairfield County</h2>
            <p className="text-slate-500 mt-2 max-w-lg mx-auto text-sm sm:text-base">We stand behind our workmanship 100%. Family-owned, locally operated since 1996.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {HOME_SERVICES.map((svc) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-44 sm:h-52 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-base sm:text-lg">{svc.title}</h3>
                  {svc.badge && (
                    <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded-full text-white" style={{ backgroundColor: colors.primaryHex }}>
                      {svc.badge}
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center gap-1 text-sm font-bold px-4 py-2 rounded-lg text-white transition-all hover:brightness-110 active:scale-95"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-label="Why choose Superior Comfort">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Why Choose Us</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-7">Real Reasons Homeowners Choose Us Over Competitors</h2>
              <div className="space-y-3">
                {WHY_US_ITEMS.map((item, i) => (
                  <div key={item.title}>
                    <button
                      aria-expanded={activeItem === i}
                      aria-controls={`why-panel-${i}`}
                      className="w-full text-left rounded-xl border-2 px-4 py-3.5 transition-all"
                      style={{
                        borderColor: activeItem === i ? colors.primaryHex : "#e2e8f0",
                        backgroundColor: activeItem === i ? colors.primaryHex + "0d" : "#f8fafc",
                      }}
                      onClick={() => setActiveItem(i)}
                    >
                      <div style={{ display: "grid", gridTemplateColumns: "1fr auto", alignItems: "center", gap: "12px" }}>
                        <span className="font-semibold text-slate-900 text-sm sm:text-base text-left">{item.title}</span>
                        <span aria-hidden="true">
                          {activeItem === i
                            ? <Minus className="w-5 h-5 flex-shrink-0" style={{ color: colors.primaryHex }} />
                            : <Plus className="w-5 h-5 flex-shrink-0 text-slate-400" />
                          }
                        </span>
                      </div>
                      <AnimatePresence>
                        {activeItem === i && (
                          <motion.div
                            id={`why-panel-${i}`}
                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                            animate={{ opacity: 1, height: "auto", marginTop: 10 }}
                            exit={{ opacity: 0, height: 0, marginTop: 0 }}
                            transition={{ duration: 0.22 }}
                            className="overflow-hidden"
                          >
                            <p className="text-slate-600 text-sm leading-relaxed text-left">{item.body}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky image — hidden on mobile to avoid layout issues */}
            <div className="hidden md:block sticky top-28">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeItem}
                  src={WHY_US_ITEMS[activeItem].img}
                  alt={WHY_US_ITEMS[activeItem].title}
                  className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-lg"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }}
                />
              </AnimatePresence>
              {/* Mini trust points */}
              <div className="mt-5 grid grid-cols-3 gap-3">
                {TRUST_POINTS.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex flex-col items-center gap-1.5 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                    <Icon className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                    <span className="text-xs font-semibold text-slate-700 leading-tight">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── BRANDS ──────────────────────────────────────────── */}
      <section className="py-10 bg-slate-50 border-t border-slate-100" aria-label="Brands we work with">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-6 text-slate-400">Authorized Dealers & Installers</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-slate-100 w-24 h-14 sm:w-28 sm:h-16"
              >
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-9 sm:max-h-10 max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS ──────────────────────────────────── */}
      <GoogleReviews />

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className="py-14 bg-white" aria-label="Frequently asked questions">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>FAQ</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Common Questions</h2>
            <p className="text-slate-500 mt-2 text-sm sm:text-base">Can't find your answer? Call us — we pick up.</p>
          </div>
          <div className="space-y-3">
            {FAQ_ITEMS.map((faq, i) => (
              <div key={faq.q} className="rounded-xl border-2 border-slate-100 overflow-hidden">
                <button
                  aria-expanded={activeFaq === i}
                  aria-controls={`faq-answer-${i}`}
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className="w-5 h-5 flex-shrink-0 text-slate-400 transition-transform"
                    style={{ transform: activeFaq === i ? "rotate(180deg)" : "rotate(0deg)" }}
                    aria-hidden="true"
                  />
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────── */}
      <section className="py-14" style={{ backgroundColor: colors.dark }} aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="text-xs font-bold tracking-widest uppercase text-white/50 mb-3">Don't Wait for a Breakdown</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Get Your Free Estimate Today</h2>
          <p className="text-white/70 mb-8 text-sm sm:text-base max-w-lg mx-auto">
            We're available 24/7 for emergencies. For non-urgent quotes, most customers hear back within the same business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base sm:text-lg bg-white hover:bg-slate-100 active:scale-95 transition-all whitespace-nowrap"
              style={{ color: colors.dark }}
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {phoneFormatted}
            </a>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base sm:text-lg border-2 border-white/30 text-white hover:bg-white/10 active:scale-95 transition-all whitespace-nowrap"
            >
              Request Free Estimate
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}