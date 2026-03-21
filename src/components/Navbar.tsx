import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, ChevronDown, AlertTriangle } from "lucide-react";
import { useSiteConfig } from "../config/SiteConfigContext";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Services",
    path: "#",
    children: [
      { label: "Residential", path: "/residential" },
      { label: "Commercial", path: "/commercial" },
      { label: "Products", path: "/products" },
      { label: "Other Services", path: "/services" },
    ],
  },
  { label: "Contact Us", path: "/contact-us" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { phone, phoneFormatted, colors } = useSiteConfig();
  const location = useLocation();
  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      {/* Top info bar */}
      <div className="hidden md:block bg-slate-900 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a href="https://goo.gl/maps/bHboXJLivN4FTxd6A" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              390 East Main St, Ansonia, CT 06401
            </a>
            <a href="mailto:info.superiorcomfortllc@gmail.com" className="hover:text-white transition-colors">
              info.superiorcomfortllc@gmail.com
            </a>
          </div>
          <a href="https://www.facebook.com/people/Superior-Comfort-Heating-AC-LLC/100057861601123/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            Follow us on Facebook
          </a>
        </div>
      </div>

      {/* Emergency Strip */}
      <div className="bg-amber-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-center gap-3 text-sm font-bold">
          <AlertTriangle className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
          <span>24/7 Emergency HVAC Service — Call Now:</span>
          <a href={`tel:${phone}`} className="underline underline-offset-2 hover:opacity-80 whitespace-nowrap">
            {phoneFormatted}
          </a>
        </div>
      </div>

      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-slate-100" role="banner">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" aria-label="Superior Comfort - Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <img
              src="https://superiorcomfort.com/wp-content/uploads/2023/05/SuperiorComfort-removebg-preview.png"
              alt="Superior Comfort Heating and Air Conditioning LLC"
              className="h-14 object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) =>
              link.children ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-green-600 transition-colors py-2">
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-3 text-sm font-medium text-slate-700 hover:bg-green-50 hover:text-green-700 transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-sm font-semibold transition-colors pb-1 border-b-2"
                  style={{
                    color: isActive(link.path) ? colors.primaryHex : "#374151",
                    borderBottomColor: isActive(link.path) ? colors.primaryHex : "transparent",
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${phone}`}
              className="hidden md:inline-flex items-center gap-2 px-5 py-3 rounded-lg text-white font-bold text-sm hover:brightness-110 transition-all whitespace-nowrap"
              style={{ backgroundColor: colors.primaryHex }}
            >
              <Phone className="w-4 h-4" />
              {phoneFormatted}
            </a>
            <button
              className="hamburger-btn md:hidden p-2 text-slate-700"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="w-full flex items-center justify-between px-3 py-3 text-sm font-semibold text-slate-700 rounded-lg hover:bg-slate-50"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <Link key={child.path} to={child.path} className="block px-3 py-2.5 text-sm text-slate-600 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block px-3 py-3 text-sm font-semibold rounded-lg"
                    style={{ color: isActive(link.path) ? colors.primaryHex : "#374151" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                )
              )}
              <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 mt-3 px-4 py-3 rounded-lg text-white font-bold text-sm whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                <Phone className="w-4 h-4" />
                {phoneFormatted}
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}