import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages — matching real superiorcomfort.com navigation exactly
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ResidentialPage from './pages/ResidentialPage';
import CommercialPage from './pages/CommercialPage';
import ProductsPage from './pages/ProductsPage';
import OtherServicesPage from './pages/OtherServicesPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-white focus:rounded-lg focus:shadow-lg focus:font-bold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/residential" element={<ResidentialPage />} />
          <Route path="/commercial" element={<CommercialPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<OtherServicesPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          {/* Legacy route aliases */}
          <Route path="/heating" element={<ResidentialPage />} />
          <Route path="/cooling" element={<ResidentialPage />} />
          <Route path="/indoor-air-quality" element={<OtherServicesPage />} />
          <Route path="/comfort-controls" element={<OtherServicesPage />} />
          <Route path="/financing" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
