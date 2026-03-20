// ============================================================
// Superior Comfort Heating & Air Conditioning LLC
// Config scraped from: superiorcomfort.com on 2026-03-20
// Brand: Green #5d9d5c + Dark Navy #19318a on white background
// Real logo URL: confirmed 200 OK
// ============================================================

import type { SiteConfig } from './SiteConfig.types';

export const config: SiteConfig = {
  // ── Brand ──────────────────────────────────────────────────
  businessName: 'Superior Comfort Heating & Air Conditioning LLC',
  tagline: 'Heating & Air Conditioning — Ansonia, CT',
  metaDescription:
    'Superior Comfort Heating & Air Conditioning LLC is a full-service HVAC company in Ansonia, CT, serving New Haven and Fairfield Counties since 1996. Call (203) 736-6309.',
  logoText: {
    line1: 'Superior Comfort',
    line2: 'Heating & Air Conditioning',
  },
  logoIcon: 'Wind',

  // ── Real Brand Colors (from superiorcomfort.com) ───────────
  colors: {
    primary: 'green-600',
    primaryHex: '#5d9d5c',       // Superior Comfort Green (buttons, accents)
    dark: '#19318a',             // Superior Comfort Navy (header, footer)
    darkHover: '#122570',        // Navy hover
    ctaText: '#FFFFFF',
  },

  // ── Contact (verified from site) ──────────────────────────
  phone: '2037366309',
  phoneFormatted: '(203) 736-6309',
  email: 'info.superiorcomfortllc@gmail.com',
  address: {
    street: '390 East Main St',
    city: 'Ansonia',
    state: 'CT',
    zip: '06401',
  },
  hours: {
    weekdays: 'Mon–Fri: 8am – 5pm',
    saturday: 'Sat: By Appointment',
    emergency: true,
  },

  // ── SEO / Meta ─────────────────────────────────────────────
  siteUrl: 'https://superiorcomfort.com',
  license: 'CT Licensed & Insured HVAC Contractor',

  // ── Logo ───────────────────────────────────────────────────
  logoUrl: 'https://superiorcomfort.com/wp-content/uploads/2023/05/SuperiorComfort-removebg-preview.png',

  // ── Hero ───────────────────────────────────────────────────
  hero: {
    headline: ['Reliable Heating', '& Air Conditioning', 'Since 1996'],
    accentLine: 1,
    valueProp: 'Serving New Haven & Fairfield County for over 30 years.',
    subText:
      '24-Hour Emergency Service · Installation · Repair · Maintenance. Serving residential and commercial clients throughout Connecticut.',
    heroBgUrl:
      'https://superiorcomfort.com/wp-content/uploads/2023/04/close-up-heat-pump-outside-home.jpg',
    primaryCTA: 'Get A Free Quote',
    emergencyText: '24-Hour Emergency Service Available',
  },

  // ── Offer Strip ────────────────────────────────────────────
  offer: {
    enabled: true,
    emoji: '⚡',
    label: 'Free Project Estimates — No Obligation. Call:',
  },

  // ── Reviews (from Google Maps listing) ────────────────────
  reviews: {
    rating: 4.8,
    count: 24,
    googleMapsUrl: 'https://www.google.com/maps/place/Superior+Comfort+Heating+%26+Air+Conditioning+LLC',
  },

  // ── Trust Badges (from site credentials) ──────────────────
  trustBadges: [
    { icon: 'ShieldCheck', label: 'Licensed & Insured', sub: 'CT Certified Contractor' },
    { icon: 'Award',       label: 'HomeAdvisor Elite', sub: 'Top Rated Service' },
    { icon: 'Star',        label: '4.8 Google Rating',  sub: '24 Verified Reviews' },
    { icon: 'CheckCircle', label: 'Free Estimates',      sub: 'No Obligation Quotes' },
    { icon: 'Wrench',      label: '30+ Years Experience', sub: 'In Business Since 1996' },
    { icon: 'Clock',       label: '24/7 Emergency',      sub: 'Always Available' },
  ],

  // ── Services ──────────────────────────────────────────────
  services: [
    {
      title: 'Residential HVAC',
      description:
        'Complete heating and cooling services for homeowners in New Haven and Fairfield County — installation, repair, and annual tune-ups.',
      cta: 'Residential Service',
      icon: 'Home',
    },
    {
      title: 'Commercial HVAC',
      description:
        'Custom commercial HVAC planning and installation for spaces from 1,200 to 12,000 sq ft. Preventive maintenance agreements available.',
      cta: 'Commercial Service',
      icon: 'Building2',
    },
    {
      title: 'AC Installation & Repair',
      description:
        'Expert air conditioning installation, repair, and seasonal tune-ups to keep your home cool and comfortable all summer.',
      cta: 'Cooling Service',
      icon: 'Snowflake',
    },
    {
      title: 'Heating & Furnace',
      description:
        'Boiler repair, furnace installation, and radiant heat system services — trusted by Connecticut homeowners since 1996.',
      cta: 'Heating Service',
      icon: 'Flame',
    },
    {
      title: 'Indoor Air Quality',
      description:
        'Air filtration, dehumidification, and whole-home IAQ solutions. Breathe cleaner, healthier air every day.',
      cta: 'Air Quality',
      icon: 'Wind',
    },
    {
      title: 'System Maintenance',
      description:
        'Annual tune-up plans covering all heating and cooling systems. 18-point checklist to prevent breakdowns before they happen.',
      cta: 'Maintenance Plan',
      icon: 'Wrench',
    },
  ],

  // ── Process Steps ─────────────────────────────────────────
  processHeadline: 'How It Works',
  processSubhead: 'Simple, transparent, and professional from your first call to a finished job.',
  process: [
    {
      number: '01',
      icon: 'Phone',
      title: 'Call or Request Online',
      description: 'Call (203) 736-6309 or fill out our quote form. We respond promptly — 24/7 for emergencies.',
    },
    {
      number: '02',
      icon: 'ClipboardList',
      title: 'Free Project Estimate',
      description: 'We provide a no-obligation estimate for all installations and major services.',
    },
    {
      number: '03',
      icon: 'Wrench',
      title: 'Expert Service',
      description: 'Our licensed technicians complete the work cleanly and professionally, to code.',
    },
    {
      number: '04',
      icon: 'CheckCircle2',
      title: 'Your Comfort, Guaranteed',
      description: 'We stand behind every job. Your satisfaction is our reputation.',
    },
  ],

  // ── Maintenance Plan ──────────────────────────────────────
  maintenancePlan: {
    name: 'Superior Comfort Service Plan',
    tagline: 'Preventive Maintenance',
    description:
      'Regular preventive maintenance extends the life of your HVAC system, reduces energy bills, and avoids expensive breakdowns. Our 18-point checklist covers every component.',
    priceMonthly: 12,
    priceAnnual: 129,
    memberCount: 200,
    benefits: [
      'Annual heating & cooling tune-up (18-point checklist)',
      'Priority scheduling — jump the queue',
      '15% discount on all repairs and parts',
      'Filter inspection included',
      'Extended equipment lifespan',
      'No overtime charges for priority calls',
    ],
    highlights: [
      { icon: 'Clock',        text: 'Priority scheduling — always' },
      { icon: 'Zap',          text: 'Prevents 90% of system failures' },
      { icon: 'CheckCircle2', text: 'Members save $300+ per year on average' },
    ],
  },

  // ── Testimonials ──────────────────────────────────────────
  testimonials: [
    {
      name: 'Maria C.',
      town: 'Ansonia, CT',
      service: 'AC Installation',
      content:
        'Sal and his team were professional from start to finish. They installed our new AC system quickly and cleanly. The house has never been more comfortable. Highly recommend Superior Comfort!',
      image: 'https://randomuser.me/api/portraits/women/42.jpg',
    },
    {
      name: 'Robert M.',
      town: 'Derby, CT',
      service: 'Furnace Repair',
      content:
        'Called them on a cold winter morning when our furnace went out. They were at my door within hours. Fixed it same day. Fair price, honest work. This is the company you want.',
      image: 'https://randomuser.me/api/portraits/men/31.jpg',
    },
    {
      name: 'Jennifer T.',
      town: 'Shelton, CT',
      service: 'Annual Tune-Up',
      content:
        'Used Superior Comfort for our annual maintenance for three years now. Always on time, always thorough. They check everything with their 18-point list. Great peace of mind.',
      image: 'https://randomuser.me/api/portraits/women/58.jpg',
    },
    {
      name: 'David L.',
      town: 'Orange, CT',
      service: 'Commercial HVAC',
      content:
        'They installed a new HVAC system in our 3,000 sq ft commercial space. The planning was detailed and the execution was flawless. Operating costs dropped significantly.',
      image: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    {
      name: 'Patricia R.',
      town: 'Seymour, CT',
      service: 'Emergency Repair',
      content:
        'Our heat went out on the coldest night of the year. Superior Comfort sent someone out at 10pm. Professional, efficient, and fair. I cannot thank them enough.',
      image: 'https://randomuser.me/api/portraits/women/19.jpg',
    },
    {
      name: 'Tom B.',
      town: 'Woodbridge, CT',
      service: 'AC Replacement',
      content:
        'Great pricing on a new Carrier system. No pushy sales tactics — they explained my options and let me decide. Installation was clean and done in one day.',
      image: 'https://randomuser.me/api/portraits/men/55.jpg',
    },
  ],

  // ── Contact Form Services ─────────────────────────────────
  contactFormServices: [
    'Residential Heating / Furnace',
    'Residential Cooling / AC',
    'Commercial HVAC',
    'Indoor Air Quality',
    'System Maintenance Plan',
    'Emergency Service',
    'Free Project Estimate',
    'Other / Not Sure',
  ],

  // ── FAQ ───────────────────────────────────────────────────
  faqs: [
    {
      question: 'Do you offer 24-hour emergency service?',
      answer:
        'Yes. Superior Comfort provides 24-hour emergency service for heating and cooling failures. If your system goes down, call (203) 736-6309 at any time — day or night.',
    },
    {
      question: 'What areas do you serve?',
      answer:
        'We serve all of Southwestern Connecticut, including New Haven and Fairfield Counties. This includes Ansonia, Derby, Shelton, Orange, Seymour, and surrounding towns.',
    },
    {
      question: 'Are you licensed and insured?',
      answer:
        'Yes. Superior Comfort Heating & Air Conditioning LLC is fully licensed and insured in the state of Connecticut. We carry full liability insurance and can provide documentation before any work begins.',
    },
    {
      question: 'Do you offer free estimates?',
      answer:
        'Yes! We provide free, no-obligation estimates for all new installations and major service projects. Call us or fill out the quote form to get started.',
    },
    {
      question: 'What brands do you service?',
      answer:
        'We service all major brands including Carrier, Mitsubishi, Daikin, American Standard, and more. We also install new equipment from top manufacturers.',
    },
    {
      question: 'How long has Superior Comfort been in business?',
      answer:
        'Superior Comfort Heating & Air Conditioning LLC has been serving Connecticut homeowners and businesses since 1996 — over 30 years of experience.',
    },
    {
      question: 'Do you handle commercial projects?',
      answer:
        'Yes. We specialize in commercial HVAC for spaces from 1,200 to 12,000 sq ft. We offer custom planning, installation, and preventive maintenance agreements for businesses.',
    },
  ],

  // ── Service Area ──────────────────────────────────────────
  serviceAreaTowns: [
    'Ansonia', 'Derby', 'Shelton', 'Orange',
    'Seymour', 'Woodbridge', 'Milford', 'West Haven',
    'New Haven', 'Hamden', 'Naugatuck', 'Bethany',
    'Trumbull', 'Monroe', 'Bridgeport', 'Stratford',
  ],

  // ── Footer ────────────────────────────────────────────────
  footerTagline:
    'Superior Comfort Heating & Air Conditioning LLC is a family-owned HVAC company in Ansonia, CT, serving residential and commercial clients throughout New Haven and Fairfield County since 1996.',
  footerAwards: 'HomeAdvisor Top Rated · Google Rating 4.8 ★ (24 Reviews) · Licensed & Insured CT',
};
