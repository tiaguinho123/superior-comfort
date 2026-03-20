import { motion } from 'motion/react';
import { Phone, Calendar, Star, Zap, Shield, Clock, ChevronRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useSiteConfig } from '../config/SiteConfigContext';
import TrustBadges from '../components/TrustBadges';
import GoogleReviews from '../components/GoogleReviews';

// Superior Comfort real hero image (heat pump unit — verified 200 OK)
const HERO_IMAGE =
  'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg';

// Why-Us proof points (Pattern: problem/solution/outcome)
const WHY_US = [
  { icon: Clock,   title: 'Same-Day Response',  body: 'Call before noon — we show up today. No week-long waits.' },
  { icon: Shield,  title: 'Licensed & Insured',  body: 'CT certified technicians. Full liability coverage. Work done to code.' },
  { icon: Zap,     title: '30+ Year Track Record', body: 'Serving Connecticut homeowners since 1996. We\'ve seen every system.' },
];

// Service cards — from Superior Comfort site
const SERVICES = [
  {
    title: 'Heating & Furnace',
    tagline: 'Warm all winter, guaranteed.',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/service-man-adjusting-house-heating-system-683x1024.jpg',
    path: '/heating',
  },
  {
    title: 'AC Installation & Repair',
    tagline: 'Cool when it matters most.',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-ventilation-system-683x1024.jpg',
    path: '/cooling',
  },
  {
    title: 'Indoor Air Quality',
    tagline: 'Breathe cleaner every day.',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg',
    path: '/indoor-air-quality',
  },
  {
    title: 'Commercial HVAC',
    tagline: 'Keep your business running.',
    img: 'https://superiorcomfort.com/wp-content/uploads/2023/04/men-working-with-equipment-full-shot.jpg',
    path: '/cooling',
  },
];

// Quick-proof FAQs (Pattern: pre-answer objections)
const FAQS = [
  { q: 'Do you offer free estimates?', a: 'Yes — always. No obligation, no pressure. Call or use our quote form to get started today.' },
  { q: 'How fast can you respond to an emergency?', a: 'We offer 24-hour emergency service. If you call, we pick up. Most emergency calls are addressed same-day.' },
  { q: 'Are you licensed and insured in Connecticut?', a: 'Yes. We are fully licensed HVAC contractors in CT with complete liability insurance. Documentation available before any work begins.' },
  { q: 'What brands do you service?', a: 'All major brands: Carrier, Mitsubishi, Daikin, American Standard, Bryant, and more. We also supply and install new equipment.' },
  { q: 'Do you handle commercial projects?', a: 'Yes. We specialize in commercial HVAC for spaces from 1,200 to 12,000 sq ft — planning, installation, and maintenance contracts.' },
];

export default function HomePage() {
  const { phone, phoneFormatted, reviews, colors } = useSiteConfig();

  return (
    <div>
      {/* ── OFFER STRIP (Pattern: Urgency + Free Value) ──────── */}
      <div
        className="fixed top-20 left-0 right-0 z-40 flex items-center justify-center gap-2 px-4 py-2 text-white text-sm font-bold"
        style={{ backgroundColor: colors.dark }}
        role="banner"
        aria-label="Special offer"
      >
        <Zap className="w-4 h-4 flex-shrink-0 text-amber-400" aria-hidden="true" />
        <span>Free Estimates on All Projects — No Obligation.{' '}
          <a href={`tel:${phone}`} className="underline underline-offset-2 decoration-white/50 hover:decoration-white">Call {phoneFormatted}</a>
        </span>
      </div>

      {/* ── HERO (Pattern: Specific Promise + Social Proof + Dual CTA) ── */}
      <section className="relative pt-28 pb-0" aria-label="Hero">
        <div className="relative overflow-hidden" style={{ minHeight: '560px' }}>
          <img
            src={HERO_IMAGE}
            alt="Superior Comfort HVAC technician servicing an air conditioning unit in Connecticut"
            className="absolute inset-0 w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                'https://superiorcomfort.com/wp-content/uploads/2023/04/repairman-doing-air-conditioner-service-e1680322323522.jpg';
            }}
          />
          {/* Gradient overlay — left 60% dark, fades to transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

          <div className="relative z-10 flex flex-col justify-center h-full" style={{ minHeight: '560px' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-16">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75 }}
                className="max-w-xl"
              >
                {/* Social proof anchor — above fold (Pattern 2) */}
                <a
                  href={reviews.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Rated ${reviews.rating} stars — ${reviews.count} Google Reviews, click to read`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm mb-7 hover:bg-white/18 transition-colors"
                >
                  <span className="flex gap-0.5" aria-hidden="true">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
                  </span>
                  <span className="text-white text-sm font-semibold">
                    {reviews.rating} · <span className="text-amber-300 font-bold">{reviews.count} Google Reviews</span>
                  </span>
                </a>

                {/* Headline — Specific outcome + location (Pattern 1) */}
                <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-[1.1] mb-4">
                  CT's Trusted HVAC Team —{' '}
                  <span style={{ color: colors.primaryHex }}>Heat, AC & Air Quality</span>{' '}
                  Done Right.
                </h1>

                {/* Sub-headline — who/what/where (Pattern: specificity) */}
                <p className="text-lg text-white/85 mb-3 leading-relaxed">
                  Superior Comfort has served New Haven &amp; Fairfield County homeowners since 1996. Licensed, insured, and available 24/7.
                </p>

                {/* Proof bullets — micro-commitments */}
                <ul className="mb-8 space-y-1.5" aria-label="Key guarantees">
                  {['Free project estimates — always', 'Same-day emergency response', '30+ years of Connecticut service'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/80 text-sm">
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Dual CTA (Pattern: Primary = low friction, Secondary = urgency) */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to="/contact-us"
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 text-white font-bold rounded-lg text-base transition-all shadow-lg hover:brightness-110 whitespace-nowrap"
                    style={{ backgroundColor: colors.primaryHex }}
                  >
                    <Calendar className="w-5 h-5" aria-hidden="true" />
                    Get A Free Quote
                  </Link>
                  <a
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 border-2 border-white/50 text-white font-bold rounded-lg text-base hover:bg-white/20 transition-all whitespace-nowrap"
                  >
                    <Phone className="w-5 h-5" aria-hidden="true" />
                    Call Us 24/7
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BADGES (Pattern: Credibility strip) ─────────── */}
      <TrustBadges />

      {/* ── VALUE PROP BLOCK (Pattern: Problem → Solution → Outcome) ── */}
      <section className="py-16 bg-white" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>
              Why Superior Comfort
            </p>
            <h2 id="why-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              We Show Up. We Fix It. You Rest Easy.
            </h2>
            <p className="mt-3 text-slate-500 max-w-xl mx-auto text-base">
              No runaround. No hidden fees. Just experienced HVAC professionals who treat your home like their own.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {WHY_US.map(({ icon: Icon, title, body }) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-2xl border border-slate-100 bg-slate-50 p-7 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: colors.primaryHex + '18' }}>
                  <Icon className="w-6 h-6" style={{ color: colors.primaryHex }} aria-hidden="true" />
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES (Pattern: Image + Outcome-driven title) ──── */}
      <section className="py-16 bg-slate-50" id="services" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>
              What We Do
            </p>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Full-Service HVAC — One Call Covers It All
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {SERVICES.map((svc) => (
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
                  <h3 className="absolute bottom-3 left-4 text-white font-bold text-base leading-tight">
                    {svc.title}
                  </h3>
                </div>
                <div className="px-5 py-4">
                  <p className="text-slate-500 text-sm mb-3">{svc.tagline}</p>
                  <Link
                    to={svc.path}
                    className="inline-flex items-center gap-1 text-sm font-bold transition-colors"
                    style={{ color: colors.primaryHex }}
                  >
                    Learn More <ChevronRight className="w-4 h-4" aria-hidden="true" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOOGLE REVIEWS (Social proof) ─────────────────────── */}
      <GoogleReviews />

      {/* ── FAQ (Pattern: Pre-answer objections before final CTA) ─ */}
      <section className="py-16 bg-white" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: colors.primaryHex }}>
              Common Questions
            </p>
            <h2 id="faq-heading" className="text-3xl font-extrabold text-slate-900">
              Everything You Need to Know
            </h2>
          </div>
          <div className="space-y-4">
            {FAQS.map(({ q, a }) => (
              <details key={q} className="group rounded-xl border border-slate-200 bg-slate-50 px-6 py-4 cursor-pointer">
                <summary className="flex items-center justify-between font-semibold text-slate-900 text-base list-none gap-4">
                  <span>{q}</span>
                  <ChevronRight className="w-5 h-5 text-slate-400 group-open:rotate-90 transition-transform flex-shrink-0" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-slate-600 text-sm leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA (Pattern: Urgent + frictionless + phone) ── */}
      <section className="py-16" style={{ backgroundColor: colors.dark }} aria-label="Call to action">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Ready for Reliable Comfort?
          </h2>
          <p className="text-white/75 mb-8 text-lg">
            Free estimates. Same-day emergency response. 30 years of trust in Connecticut.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg shadow-xl hover:brightness-110 transition-all"
              style={{ backgroundColor: colors.primaryHex }}
            >
              <Calendar className="w-5 h-5" aria-hidden="true" />
              Get A Free Quote
            </Link>
            <a
              href={`tel:${phone}`}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-lg border-2 border-white/40 hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              {phoneFormatted} — 24/7
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
