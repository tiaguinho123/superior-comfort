import { motion } from 'motion/react';
import { Phone, Calendar, Star, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';

// Superior Comfort real images (all verified 200 OK from superiorcomfort.com)
const SC_HERO_IMAGE =
  'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg';

// Service card images (all verified 200 OK)
const services = [
  {
    title: 'Residential HVAC',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/service-man-adjusting-house-heating-system-683x1024.jpg',
    path: '/heating',
    desc: 'Complete heating and cooling services for homeowners in New Haven and Fairfield County.',
  },
  {
    title: 'Commercial HVAC',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/men-working-with-equipment-full-shot.jpg',
    path: '/cooling',
    desc: 'Custom commercial HVAC planning and installation for spaces from 1,200 to 12,000 sq ft.',
  },
  {
    title: 'Indoor Air Quality',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-ventilation-system-683x1024.jpg',
    path: '/indoor-air-quality',
    desc: 'Air filtration, dehumidification, and whole-home IAQ solutions for healthier air.',
  },
  {
    title: 'System Maintenance',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/residential-units-narrow.jpg',
    path: '/comfort-controls',
    desc: '18-point annual tune-up plans to extend system life and prevent unexpected breakdowns.',
  },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();

  return (
    <div>
      {/* ─── Financing Announcement Strip ──────────────────── */}
      <div
        className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center gap-3 px-4 py-2.5 text-white text-sm font-semibold"
        style={{ backgroundColor: colors.dark }}
        role="banner"
        aria-label="Financing announcement"
      >
        <AlertCircle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
        <span>
          Free Project Estimates — No Obligation.{' '}
          <strong className="underline-offset-2 underline decoration-white/60">
            Call Us Today!
          </strong>
        </span>
      </div>

      {/* ─── Hero ──────────────────────────────────────────── */}
      <section className="relative pt-28" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ height: '540px' }}>
          {/* Real Superior Comfort heat pump photo */}
          <img
            src={SC_HERO_IMAGE}
            alt="Superior Comfort Heating & Air Conditioning — HVAC service in Ansonia, CT"
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-transparent" />

          {/* Hero content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="max-w-2xl"
              >
                {/* Review badge */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-6"
                  aria-label={`${reviews.rating} stars — ${reviews.count} Google Reviews`}
                >
                  <div className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-white text-sm font-semibold">
                    {reviews.rating} ·{' '}
                    <span className="text-amber-300">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4">
                  Superior Comfort
                  <br />
                  <span style={{ color: colors.primaryHex }}>Heating & Air Conditioning</span>
                </h1>
                <p className="text-xl text-white/90 mb-3 font-medium">
                  Family-Owned • Ansonia, CT • Since 1996
                </p>
                <p className="text-base text-white/75 mb-8">
                  Serving New Haven & Fairfield County for 30+ years.
                  <br />
                  Sales • Service • Installation — 24 Hour Emergency Service
                </p>

                {/* CTA Row */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-lg text-lg transition-colors shadow-lg whitespace-nowrap"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Get A Free Quote
                  </Link>

                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-bold rounded-lg text-lg transition-colors hover:bg-amber-50 shadow-lg border-2 border-amber-400 whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5 text-green-600" aria-hidden="true" />
                    Emergency Call 24/7
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Badges ─── */}
      <TrustBadges />

      {/* ─── About Blurb ─── */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>
            About Us
          </p>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-5">
            Superior Comfort Heating & Air Conditioning LLC
          </h2>
          <p className="text-lg text-slate-600 mb-4 leading-relaxed">
            Superior Comfort is a full-service HVAC company based in Ansonia, CT, committed to excellence in design and customer satisfaction since 1996.
          </p>
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            Serving residential and commercial clients throughout New Haven and Fairfield County with expert heating, cooling, and indoor air quality solutions.
          </p>
          <img
            src="https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg"
            alt="Superior Comfort HVAC technician performing professional air conditioning service"
            className="mx-auto h-40 w-full max-w-md object-cover rounded-xl shadow"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      {/* ─── Our Services ─── */}
      <section className="py-20 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 id="services-heading" className="text-3xl font-extrabold text-slate-900 mb-3">
              OUR SERVICES
            </h2>
            <div
              className="w-16 h-1 mx-auto rounded-full"
              style={{ backgroundColor: colors.primaryHex }}
              aria-hidden="true"
            />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((svc) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all group"
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={svc.img}
                    alt={svc.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-white font-bold text-lg">
                    {svc.title}
                  </h3>
                </div>
                <div className="p-5">
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{svc.desc}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center text-sm font-bold transition-colors"
                    style={{ color: colors.primaryHex }}
                  >
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Google Reviews ─── */}
      <GoogleReviews />

      {/* ─── Emergency CTA Bar ─── */}
      <div className="py-12" style={{ backgroundColor: colors.dark }}>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-2xl font-extrabold text-white mb-2">24 Hour Emergency Service</p>
          <p className="text-white/80 mb-6">
            No heat or cooling? We respond fast — any time of day or night.
          </p>
          <a
            href={`tel:${phone}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg text-lg font-bold text-white border-2 border-white hover:bg-white transition-colors"
            style={{ '--hover-text': colors.dark } as React.CSSProperties}
          >
            <Phone className="w-5 h-5" />
            Emergency Call 24/7 — {phoneFormatted}
          </a>
        </div>
      </div>
    </div>
  );
}
