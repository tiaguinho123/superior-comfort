import { motion } from "motion/react";
import { Phone, Star, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";
import TrustBadges from "../components/TrustBadges";
import GoogleReviews from "../components/GoogleReviews";

// Real hero image from superiorcomfort.com homepage (verified 200 OK)
const HERO_IMAGE = "https://superiorcomfort.com/wp-content/uploads/2023/03/13107746_5134336-scaled.jpg";
const TECHNICIAN_IMAGE = "https://superiorcomfort.com/wp-content/uploads/2023/04/man-repair-ac-e1680322619272.jpg";

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
    desc: "Our team of experienced installers can work with you to plan and design any heating or cooling system. Designs range in homes from 1,200 to 12,000 square feet.",
    path: "/commercial",
  },
  {
    title: "System Maintenance",
    img: "https://superiorcomfort.com/wp-content/uploads/2023/04/residential-units-narrow.jpg",
    desc: "Superior Comfort offers complete services for all heating and air conditioning systems. We strive to provide dependable service you can rely on.",
    path: "/products",
  },
];

const WHY_US = [
  "We are professional contractors",
  "We are certified workers",
  "The most trusted company",
  "We are expert technicians",
];

const BRANDS = [
  { name: "Mitsubishi", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Mitsubishi_logo_standart-removebg-preview.png" },
  { name: "Carrier", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Carrier_logo_logotype-removebg-preview.png" },
  { name: "Daikin", img: "https://superiorcomfort.com/wp-content/uploads/2023/03/daikin_logo-e1431462211946.jpg" },
  { name: "Rheem", img: "https://superiorcomfort.com/wp-content/uploads/2023/04/Rheem_logo.svg-e1431461989240.png" },
  { name: "Mitsubishi Electric", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Mitsubishi_logo_standart-removebg-preview.png" },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();

  return (
    <div>
      {/* ── HERO — real SC headline ── */}
      <section className="relative" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ minHeight: "560px" }}>
          <img
            src={HERO_IMAGE}
            alt="Superior Comfort Heating and Air Conditioning LLC — Ansonia CT"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
            onError={(e) => { (e.target as HTMLImageElement).src = "https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg"; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
          <div className="relative z-10 flex flex-col justify-center" style={{ minHeight: "560px" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
              <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-2xl">
                {/* Google Reviews badge */}
                <a href={reviews.googleMapsUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7 hover:bg-white/18 transition-colors"
                  aria-label={`Rated ${reviews.rating} stars — ${reviews.count} Google Reviews`}
                >
                  <span className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {reviews.rating} &middot; <span className="text-amber-300 font-bold">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                {/* Real SC headline */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4">
                  Stay Cool and Breathe Easy:<br />
                  <span style={{ color: colors.primaryHex }}>Professional AC Servicing at Your Doorstep</span>
                </h1>

                {/* Real SC bullet points */}
                <ul className="mb-7 space-y-2">
                  {WHY_US.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/85 text-base">
                      <Check className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href={`tel:${phone}`} className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-lg text-base hover:brightness-110 transition-all shadow-lg whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                    <Phone className="w-5 h-5" />
                    {phoneFormatted}
                  </a>
                  <Link to="/contact-us" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border-2 border-white/50 text-white font-bold rounded-lg text-base hover:bg-white/20 transition-all whitespace-nowrap">
                    Get A Quote
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <div className="py-5 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-10 text-center">
          {[
            { label: "Emergency HVAC", value: "24/7" },
            { label: "Years in Business", value: "26+" },
            { label: "Maintenance & Installation", value: "SW Connecticut" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold" style={{ color: colors.primaryHex }}>{s.value}</p>
              <p className="text-slate-500 text-sm">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <TrustBadges />

      {/* 3 Service cards — exact SC layout */}
      <section className="py-16 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>What We Do</p>
            <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900">
              Top Rated for Furnace and Air Conditioning Installation and Repair
            </h2>
            <p className="text-slate-500 mt-2 max-w-xl mx-auto">In New Haven &amp; Fairfield County. We stand behind our workmanship one hundred percent.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {HOME_SERVICES.map((svc) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group">
                <div className="relative h-48 overflow-hidden">
                  <img src={svc.img} alt={svc.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" decoding="async"
                    onError={(e) => { (e.target as HTMLImageElement).src = "https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg"; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-lg">{svc.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link to={svc.path} className="inline-flex items-center text-sm font-bold transition-colors" style={{ color: colors.primaryHex }}>
                    Learn More &rarr;
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us accordion content — from real site */}
      <section className="py-14 bg-white" aria-labelledby="why-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Why Choose Us</p>
              <h2 id="why-heading" className="text-3xl font-extrabold text-slate-900 mb-6">
                Why you should choose our services
              </h2>
              <div className="space-y-4">
                <details className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                    Heating &amp; Cooling Tune-Up!
                    <span className="group-open:rotate-45 transition-transform text-xl font-light">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">From experience, you know that preventive maintenance on your vehicle extends the life of your car, as well as ensures the best gas mileage. This is also true for your heating and cooling equipment. Not only will routine maintenance extend the life of your equipment, it also ensures that your system is running at peak efficiency.</p>
                </details>
                <details className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                    Preventative HVAC Maintenance
                    <span className="group-open:rotate-45 transition-transform text-xl font-light">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">Your heating and cooling equipment is a major financial investment, and a major factor in the smooth operation of your business or commercial space. We offer yearly Customized Service Agreements which will help protect your financial investment and avoid future system malfunctions.</p>
                </details>
                <details className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                    Quality HVAC Products
                    <span className="group-open:rotate-45 transition-transform text-xl font-light">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">Superior Comfort has built strong relationships with manufacturers of HVAC products from the best brands in the industry, including Rheem, Burnham Hydronics, Carrier, Honeywell, Weil-McLain, Buderus, Aprilaire and Daikin. We can provide product sales, installation and service for any brand.</p>
                </details>
                <details className="group rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 cursor-pointer">
                  <summary className="flex items-center justify-between font-semibold text-slate-900 list-none">
                    Other Services
                    <span className="group-open:rotate-45 transition-transform text-xl font-light">+</span>
                  </summary>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">Our team are also experienced in specialist services such as dehumidification systems for indoor pools, radiant heat and air quality control systems. We handle everything from design to implementation for residential and commercial properties.</p>
                </details>
              </div>
            </div>
            <div>
              <img src={TECHNICIAN_IMAGE} alt="Superior Comfort HVAC technician repairing AC" className="w-full h-96 object-cover rounded-2xl shadow-md"
                loading="lazy" decoding="async" onError={(e) => { (e.target as HTMLImageElement).src = HERO_IMAGE; }} />
            </div>
          </div>
        </div>
      </section>

      {/* Experts section */}
      <section className="py-12 bg-slate-50 border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-4">We are Heating &amp; Air Conditioning Experts in Southern CT</h2>
          <p className="text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            At Superior Comfort Heating &amp; Air Conditioning LLC we take pride in being the leading professionals in AC services. With years of experience and a team of skilled technicians, we are dedicated to providing top-quality air conditioning services that you can rely on.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center mb-8">
            {BRANDS.slice(0, 4).map((brand) => (
              <div key={brand.name} className="flex items-center justify-center bg-white rounded-xl p-3 shadow-sm border border-slate-100 w-28 h-16">
                <img src={brand.img} alt={brand.name} className="max-h-10 max-w-full object-contain" loading="lazy" decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }} />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            {[{ stat: "Reliable Service" }, { stat: "26+ Years of Experience" }, { stat: "A Friendly Service Team" }].map((item) => (
              <div key={item.stat} className="flex items-center gap-2">
                <Check className="w-5 h-5" style={{ color: colors.primaryHex }} />
                <span className="font-semibold text-slate-700">{item.stat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <GoogleReviews />

      {/* CTA Bar */}
      <div className="py-12" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-2">Do you have any questions?</p>
          <a href={`tel:${phone}`} className="text-3xl font-extrabold text-white underline underline-offset-4">{phoneFormatted}</a>
        </div>
      </div>
    </div>
  );
}