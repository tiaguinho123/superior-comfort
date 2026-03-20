import React from 'react';
import { ShieldCheck, Award, Star, CheckCircle, Wrench, Clock } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';
import { Marquee } from './ui/marquee';

const iconMap: Record<string, React.ElementType> = {
  Award, ShieldCheck, Star, CheckCircle, Wrench, Clock,
};

export default function TrustBadges() {
  const { trustBadges, colors } = useSiteConfig();

  return (
    <section className="bg-white border-b border-slate-100 py-8 overflow-hidden" aria-label="Certifications and trust signals">
      <p className="text-center text-xs text-slate-400 uppercase tracking-widest font-semibold mb-6">
        Certified &amp; Trusted by Local Homeowners
      </p>

      {/* ── Scrolling marquee (all screen sizes) ── */}
      <Marquee duration={28} pauseOnHover fade fadeAmount={8}>
        {trustBadges.map((badge, i) => {
          const Icon = iconMap[badge.icon] ?? ShieldCheck;
          return (
            <div
              key={i}
              className="flex items-center gap-3 mx-5 px-5 py-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-red-200 hover:bg-red-50/30 transition-colors whitespace-nowrap"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: `${colors.primaryHex}18` }}
              >
                <Icon className="w-5 h-5" style={{ color: colors.primaryHex }} aria-hidden="true" />
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm leading-tight">{badge.label}</p>
                <p className="text-xs text-slate-500 leading-snug">{badge.sub}</p>
              </div>
            </div>
          );
        })}
      </Marquee>
    </section>
  );
}
