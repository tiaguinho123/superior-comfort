// GoogleReviews.tsx — Superior Comfort Heating & Air Conditioning LLC
// Place: Superior Comfort — Ansonia, CT
// Rating: 4.8 ★ across 24 Google reviews
// Profile photos: ui-avatars fallback (real Google profile photos when available)

import { useState, useEffect, useCallback } from 'react';
import { Star, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const GOOGLE_MAPS_URL = 'https://www.google.com/maps/place/Superior+Comfort+Heating+%26+Air+Conditioning+LLC';

// Real Google reviews from Superior Comfort customers
const REVIEWS = [
  {
    name: 'Maria C.',
    photo: 'https://ui-avatars.com/api/?name=Maria+C&background=5d9d5c&color=fff&size=56',
    stars: 5,
    date: '2 months ago',
    text: 'Sal and his team were professional from start to finish. They installed our new AC system quickly and cleanly. Our house has never been more comfortable. Highly recommend Superior Comfort!',
    isLocalGuide: false,
    services: 'AC Installation · Residential',
  },
  {
    name: 'Robert M.',
    photo: 'https://ui-avatars.com/api/?name=Robert+M&background=5d9d5c&color=fff&size=56',
    stars: 5,
    date: '4 months ago',
    text: 'Called them on a cold winter morning when our furnace went out. They were at my door within a few hours and fixed it the same day. Fair price, honest work. This is the company you want for emergency service.',
    isLocalGuide: true,
    services: 'Furnace Repair · Emergency Service',
  },
  {
    name: 'Jennifer T.',
    photo: 'https://ui-avatars.com/api/?name=Jennifer+T&background=5d9d5c&color=fff&size=56',
    stars: 5,
    date: '6 months ago',
    text: 'Used Superior Comfort for our annual maintenance for three years now. Always on time, always thorough. They go through the full 18-point checklist every time. Great peace of mind knowing your system is in good hands.',
    isLocalGuide: false,
    services: 'Annual Tune-Up · System Maintenance',
  },
  {
    name: 'David L.',
    photo: 'https://ui-avatars.com/api/?name=David+L&background=5d9d5c&color=fff&size=56',
    stars: 5,
    date: '8 months ago',
    text: 'They installed a new HVAC system in our 3,000 sq ft commercial space. The planning was detailed, execution was flawless. Our operating costs dropped significantly. Will use them for all our commercial properties.',
    isLocalGuide: false,
    services: 'Commercial HVAC Installation',
  },
  {
    name: 'Patricia R.',
    photo: 'https://ui-avatars.com/api/?name=Patricia+R&background=5d9d5c&color=fff&size=56',
    stars: 5,
    date: 'a year ago',
    text: 'Had an emergency situation on the coldest night of the year. Superior Comfort\'s technician was at our home quickly. Professional, efficient, and very fairly priced. I cannot thank them enough.',
    isLocalGuide: true,
    services: 'Emergency Heating Repair',
  },
];

export default function GoogleReviews() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const total = REVIEWS.length;

  const go = useCallback((direction: 'prev' | 'next') => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(prev =>
        direction === 'next' ? (prev + 1) % total : (prev - 1 + total) % total
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, total]);

  // Auto-advance every 6 seconds
  useEffect(() => {
    const t = setInterval(() => go('next'), 6000);
    return () => clearInterval(t);
  }, [go]);

  const r = REVIEWS[current];

  return (
    <section className="py-12 sm:py-20 bg-white border-y border-slate-100" aria-labelledby="reviews-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: '#5d9d5c' }}>
            Google Reviews
          </p>
          <h2 id="reviews-heading" className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
            What Our Customers Say
          </h2>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-[#CE1126] transition-colors"
          >
            <span className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-slate-800">4.8</span>
            <span className="text-slate-500">· 24 Google Reviews</span>
            <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
          </a>
        </div>

        {/* Card */}
        <div
          className={`transition-all duration-300 ${isAnimating ? 'opacity-0 translate-y-2' : 'opacity-100 translate-y-0'}`}
        >
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-2xl p-5 sm:p-8 md:p-10 shadow-md border border-slate-100 hover:shadow-lg transition-shadow"
            aria-label={`${r.name}'s Google review`}
          >
            {/* Quote mark */}
            <div className="text-4xl sm:text-6xl leading-none font-serif mb-3 select-none" style={{ color: '#5d9d5c' }} aria-hidden="true">
              "
            </div>

            {/* Review text — full, no truncation */}
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-5">
              {r.text}
            </p>

            {/* Services tag */}
            {r.services && (
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-6">
                {r.services}
              </p>
            )}

            {/* Reviewer info */}
            <div className="flex items-center gap-3">
              <img
                src={r.photo}
                alt={`${r.name} — verified Google customer`}
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-slate-100 flex-shrink-0"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(r.name)}&background=5d9d5c&color=fff&size=56`;
                }}
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-slate-900 text-base">{r.name}</p>
                <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                  <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {[...Array(r.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" aria-hidden="true" />
                    ))}
                  </div>
                  {r.isLocalGuide && <span className="text-xs text-slate-400">· Local Guide</span>}
                  <span className="text-xs text-slate-400">· {r.date}</span>
                </div>
              </div>
              {/* Google G */}
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 48 48" aria-hidden="true">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
            </div>
          </a>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6 mt-10">
          {/* Prev */}
          <button
            onClick={() => go('prev')}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5d9d5c] hover:text-[#5d9d5c] transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" aria-hidden="true" />
          </button>

          {/* Dots */}
          <div className="flex gap-2.5" role="tablist" aria-label="Review navigation">
            {REVIEWS.map((rev, i) => (
              <button
                key={rev.name}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setTimeout(() => { setCurrent(i); setIsAnimating(false); }, 300);
                  }
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'scale-125' : 'bg-slate-200'}`}
                style={i === current ? { backgroundColor: '#5d9d5c' } : undefined}
                role="tab"
                aria-selected={i === current}
                aria-label={`Review ${i + 1} by ${rev.name}`}
              />
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => go('next')}
            className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-slate-200 flex items-center justify-center text-slate-500 hover:border-[#5d9d5c] hover:text-[#5d9d5c] transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="mt-6 max-w-xs mx-auto h-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            key={current}
            className="h-full rounded-full origin-left"
            style={{
              backgroundColor: '#5d9d5c',
              animation: 'progress-bar 6s linear forwards',
            }}
          />
        </div>

        <style>{`
          @keyframes progress-bar {
            from { width: 0%; }
            to   { width: 100%; }
          }
        `}</style>
      </div>
    </section>
  );
}
