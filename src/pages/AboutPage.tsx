import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

// Real Superior Comfort Vimeo video extracted from superiorcomfort.com/about-us/
const SC_VIMEO_URL = 'https://player.vimeo.com/video/498457551?title=0&byline=0&portrait=0';

export default function AboutPage() {
  const { phone, phoneFormatted } = useSiteConfig();

  return (
    <div className="pt-20">
      {/* Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src="https://superiorcomfort.com/wp-content/uploads/2023/04/img-3.jpg"
          alt="Superior Comfort — About Us"
          className="w-full h-full object-cover object-center"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl md:text-5xl font-extrabold text-white uppercase">
                About Us
              </h1>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <nav className="text-sm text-slate-500" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#CE1126] transition-colors">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-slate-700 font-medium">About Us</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Superior Comfort Heating & Air Conditioning LLC
              </h2>
              <div
                className="w-12 h-1 rounded-full mb-8"
                style={{ backgroundColor: '#CE1126' }}
                aria-hidden="true"
              />

              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Superior Comfort is a family owned heating &amp; air conditioning company
                located in Ansonia, CT. We have been servicing local homeowners for more than 20
                years.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We are an award-winning HVAC company that delivers unparalleled quality in
                installing and maintaining all types of residential heating and air conditioning
                systems. Our team of licensed technicians is committed to providing honest,
                transparent service with upfront pricing — no surprises, no upsells.
              </p>
              <p className="text-slate-600 mb-10 leading-relaxed">
                As a family-owned business, our reputation is everything. Every technician who
                enters your home represents the Superior Comfort name, and we take that responsibility
                seriously. We treat every home like it's our own.
              </p>

              <h3 className="text-xl font-bold text-slate-900 mb-4">What Sets Us Apart:</h3>
              <ul className="space-y-3 mb-10">
                {[
                  'Family-owned and operated in Ansonia, CT since 2003',
                  'CT Licensed: HTG.0404292-S1 · Fully insured',
                  '24-Hour Emergency Service, 365 days a year',
                  'Sales, Service, and Installation — all in one call',
                  'Expertise.com Best HVAC Professionals in Ansonia 2021',
                  'All major brands: Carrier, Lennox, Trane, Rheem & more',
                  'Transparent pricing — full estimate before any work begins',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: '#CE1126' }}
                      aria-hidden="true"
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-xl text-lg"
                style={{ backgroundColor: '#CE1126' }}
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                Call Us: {phoneFormatted}
              </a>
            </motion.div>

            {/* Right — Vimeo video from their real site + Award + License */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* ─── Real Superior Comfort Vimeo Video ─── */}
              <div
                className="relative w-full overflow-hidden rounded-2xl shadow-lg bg-black"
                style={{ paddingTop: '56.25%' /* 16:9 */ }}
              >
                <iframe
                  src={SC_VIMEO_URL}
                  title="Superior Comfort — Company Video"
                  className="absolute inset-0 w-full h-full"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                />
              </div>

              {/* Award */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100 text-center">
                <img
                  src="https://superiorcomfort.com/wp-content/uploads/2023/04/img-3.jpg"
                  alt="Expertise.com Best HVAC Professionals in Ansonia 2021"
                  className="h-36 mx-auto object-contain mb-4"
                  loading="lazy"
                  decoding="async"
                />
                <p className="text-slate-600 text-sm font-medium">
                  Recognized as one of the Best HVAC Professionals in Ansonia by Expertise.com
                </p>
              </div>

              {/* License Box */}
              <div className="rounded-2xl p-6 text-white" style={{ backgroundColor: '#003DA5' }}>
                <h4 className="font-bold text-lg mb-3">Fully Licensed & Insured</h4>
                <p className="text-white/80 mb-2">
                  CT HVAC License:{' '}
                  <strong className="text-white">HTG.0404292-S1</strong>
                </p>
                <p className="text-white/80 text-sm">
                  We carry full liability insurance and workers' compensation. Happy to provide
                  documentation before any work begins.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
