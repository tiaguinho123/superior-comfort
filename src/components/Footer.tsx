import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useSiteConfig } from '../config/SiteConfigContext';

export default function Footer() {
  const {
    businessName, colors, phone, phoneFormatted,
    email, address, hours, license, serviceAreaTowns,
  } = useSiteConfig();

  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: colors.dark }} id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid md:grid-cols-3 gap-8">

          {/* Brand */}
          <div>
            <a href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="inline-block mb-4">
              <img
                src="https://superiorcomfort.com/wp-content/uploads/2023/05/SuperiorComfort-removebg-preview.png"
                alt={`${businessName} Logo`}
                className="h-12 object-contain brightness-0 invert"
                loading="lazy"
                decoding="async"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-3 max-w-xs">
              Family-owned HVAC in Ansonia, CT since 1996. Serving New Haven &amp; Fairfield County with honest pricing and expert technicians.
            </p>
            <p className="text-xs text-slate-500">{license}</p>
            <p className="text-xs text-slate-500 mt-1">© {year} {businessName}. All rights reserved.</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Contact</h4>
            <ul className="space-y-3 text-slate-300 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <span>{address.street}, {address.city}, {address.state} {address.zip}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`tel:${phone}`} className="hover:text-white font-semibold">{phoneFormatted}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <a href={`mailto:${email}`} className="hover:text-white">{email}</a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-4 h-4 shrink-0 mt-0.5" style={{ color: colors.primaryHex }} aria-hidden="true" />
                <div>
                  <p>{hours.weekdays}</p>
                  <p>{hours.saturday}</p>
                  {hours.emergency && (
                    <p className="font-semibold mt-0.5" style={{ color: colors.primaryHex }}>Emergency: Always Available</p>
                  )}
                </div>
              </li>
            </ul>
          </div>

          {/* Service Area — inline comma-separated to save vertical space */}
          <div>
            <h4 className="text-white font-semibold mb-4 uppercase tracking-wider text-xs">Service Area</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              {serviceAreaTowns.join(' · ')}
            </p>
            <p className="text-xs text-slate-500 mt-3">
              Don't see your town?{' '}
              <a href={`tel:${phone}`} style={{ color: colors.primaryHex }} className="hover:opacity-80">Call us</a>
              {' '}— we likely serve it.
            </p>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-500">
          <p>HomeAdvisor Top Rated · Google 4.8 ★ · Licensed &amp; Insured CT</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
