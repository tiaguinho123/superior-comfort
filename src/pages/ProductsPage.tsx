import { motion } from "motion/react";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { useSiteConfig } from "../config/SiteConfigContext";

const BRANDS = [
  { name: "Rheem", img: "https://superiorcomfort.com/wp-content/uploads/2023/04/Rheem_logo.svg-e1431461989240.png" },
  { name: "Burnham Hydronics", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/images-removebg-preview.png" },
  { name: "Carrier", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Carrier_logo_logotype-removebg-preview.png" },
  { name: "Daikin", img: "https://superiorcomfort.com/wp-content/uploads/2023/03/daikin_logo-e1431462211946.jpg" },
  { name: "Mitsubishi", img: "https://superiorcomfort.com/wp-content/uploads/2023/05/Mitsubishi_logo_standart-removebg-preview.png" },
];

export default function ProductsPage() {
  const { phone, phoneFormatted, colors } = useSiteConfig();
  return (
    <div className="pt-20">
      <div className="relative h-56 md:h-72 overflow-hidden">
        <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/boiler-piping.jpg" alt="HVAC boiler piping" className="w-full h-full object-cover object-center" fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 w-full">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-extrabold text-white">
              HVAC Products
            </motion.h1>
          </div>
        </div>
      </div>

      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: colors.primaryHex }}>Products</p>
              <h2 className="text-2xl font-extrabold text-slate-900 mb-5">Quality HVAC Products</h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                We are very proud of our extensive product line offerings. Superior Comfort Heating &amp; Air Conditioning LLC has built strong relationships with the manufacturers of HVAC products from the best brands in the industry, including Rheem, Burnham Hydronics, Carrier, Honeywell, Weil-McLain, Buderus, Aprilaire and Daikin.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                In addition to these top brands, Superior Comfort Heating &amp; Air Conditioning LLC can provide product sales, installation and service for any other brand that may be specified for a project.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                For more detailed product information, call <a href={`tel:${phone}`} className="underline" style={{ color: colors.primaryHex }}>{phoneFormatted}</a>.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-white font-bold hover:brightness-110 transition-all whitespace-nowrap" style={{ backgroundColor: colors.primaryHex }}>
                  <Phone className="w-4 h-4" />
                  Get Estimate
                </a>
                <Link to="/contact-us" className="inline-flex items-center px-6 py-3 rounded-lg font-bold border-2 border-slate-300 hover:border-green-500 transition-colors">
                  Free Estimate
                </Link>
              </div>
            </div>
            <div>
              <img src="https://superiorcomfort.com/wp-content/uploads/2023/04/boiler-piping.jpg" alt="Commercial HVAC boiler piping installation" className="w-full h-72 object-cover rounded-2xl shadow-md" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <div className="py-8 text-white text-center" style={{ backgroundColor: colors.dark }}>
        <p className="font-bold text-lg mb-3">FREE Heating System Estimate or Air-Conditioning Estimate</p>
        <Link to="/contact-us" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-white transition-all hover:bg-slate-100" style={{ color: colors.dark }}>
          Get Estimate
        </Link>
      </div>

      <section className="py-14 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-10 text-center">We Work with These Brands</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {BRANDS.map((brand) => (
              <div key={brand.name} className="flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-slate-100 h-24">
                <img
                  src={brand.img}
                  alt={brand.name}
                  className="max-h-14 max-w-full object-contain"
                  loading="lazy"
                  decoding="async"
                  onError={(e) => { (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="font-bold text-slate-700 text-sm text-center">${brand.name}</span>`; }}
                />
              </div>
            ))}
          </div>
          <p className="text-center text-slate-500 text-sm mt-6">Rheem &middot; Burnham Hydronics &middot; Carrier &middot; Honeywell &middot; Weil-McLain &middot; Buderus &middot; Aprilaire &middot; Daikin &middot; Mitsubishi</p>
        </div>
      </section>
    </div>
  );
}