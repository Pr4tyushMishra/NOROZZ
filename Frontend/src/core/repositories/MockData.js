import heroImg from '@/assets/images/hero.png';
import cleanerImg from '@/assets/images/guarantee_cleaner.png';
import phoneMockImg from '@/assets/images/app_phone_mock.png';
import kitchenImg from '@/assets/images/signin_kitchen.png';
import proImg from '@/assets/images/register_pro.png';
import serviceFullHome from '@/assets/images/service_full_home.png';
import serviceBathroom from '@/assets/images/service_bathroom.png';
import servicePlumbing from '@/assets/images/service_plumbing.png';
import servicePest from '@/assets/images/service_pest.png';
import serviceKitchen from '@/assets/images/service_kitchen.png';
import serviceElectrician from '@/assets/images/service_electrician.png';
import storyImg from '@/assets/images/about_story.png';
import sameerImg from '@/assets/images/team_sameer.png';
import priyaImg from '@/assets/images/team_priya.png';
import rahulImg from '@/assets/images/team_rahul.png';
import aditiImg from '@/assets/images/team_aditi.png';
import badgeImg from '@/assets/images/trust_badge.png';
import mapImg from '@/assets/images/contact_map.png';

export const ASSETS = {
  hero: heroImg,
  guaranteeCleaner: cleanerImg,
  phoneMock: phoneMockImg,
  kitchen: kitchenImg,
  registerPro: proImg,
  story: storyImg,
  trustBadge: badgeImg,
  contactMap: mapImg,
  team: {
    sameer: sameerImg,
    priya: priyaImg,
    rahul: rahulImg,
    aditi: aditiImg,
  },
  services: {
    fullHome: serviceFullHome,
    bathroom: serviceBathroom,
    plumbing: servicePlumbing,
    pest: servicePest,
    kitchen: serviceKitchen,
    electrician: serviceElectrician,
  }
};

export const SEED_CATEGORIES = [
  { id: 'cat-cleaning', name: 'Cleaning', slug: 'cleaning', iconName: 'Sparkles', description: 'Deep house cleaning, kitchen, bathroom and sofa sanitation.', featured: true, serviceCount: 14 },
  { id: 'cat-plumbing', name: 'Plumbing', slug: 'plumbing', iconName: 'Droplets', description: 'Pipe leak repairs, fixture installations, and drainage solutions.', featured: true, serviceCount: 12 },
  { id: 'cat-electrical', name: 'Electrical', slug: 'electrical', iconName: 'Zap', description: 'Wiring, circuit breakers, light fixtures and appliance wiring.', featured: true, serviceCount: 16 },
  { id: 'cat-painting', name: 'Painting', slug: 'painting', iconName: 'Paintbrush', description: 'Full interior/exterior painting, waterproofing and wall textures.', featured: true, serviceCount: 8 },
  { id: 'cat-carpentry', name: 'Carpentry', slug: 'carpentry', iconName: 'Hammer', description: 'Custom furniture repairs, door lock fitting, and woodwork.', featured: true, serviceCount: 10 },
  { id: 'cat-pest', name: 'Pest Control', slug: 'pest-control', iconName: 'ShieldAlert', description: 'Herbal pest treatment, termite protection and bed bug eradication.', featured: true, serviceCount: 6 },
  { id: 'cat-appliance', name: 'Appliance Repair', slug: 'appliance-repair', iconName: 'Cpu', description: 'AC repair, washing machines, refrigerators and microwave fixes.', featured: true, serviceCount: 18 },
  { id: 'cat-renovation', name: 'Home Renovation', slug: 'home-renovation', iconName: 'Home', description: 'Modular kitchen overhaul, false ceiling, tile and bathroom makeover.', featured: true, serviceCount: 9 },
];

export const SEED_SERVICES = [
  {
    id: 'srv-1',
    title: 'Full Home Deep Cleaning',
    slug: 'full-home-deep-cleaning',
    categorySlug: 'cleaning',
    categoryName: 'Cleaning & Pest',
    rating: 4.8,
    reviewCount: 12000,
    duration: '4-5 Hours',
    priceFrom: 2499,
    image: serviceFullHome,
    badge: 'Popular',
    description: 'Complete top-to-bottom residential sanitation covering living spaces, bedrooms, bathrooms, balcony and kitchen degreasing.',
    inclusions: [
      'Floor scrubbing with single-disc motorized machine',
      'Ceiling fan, window pane and balcony grill wiping',
      'Complete bathroom tile descaling and disinfection',
      'Kitchen oil/grease removal and cabinet exterior wipe down'
    ],
    exclusions: ['Inside utensil washing', 'Wall scrubbing that may damage paint'],
    tiers: [
      { id: '1bhk', name: '1 BHK / Studio', price: 2499, duration: '3-4 Hours', description: 'Ideal for standard 1BHK apartment' },
      { id: '2bhk', name: '2 BHK Apartment', price: 3499, duration: '4-5 Hours', description: 'Comprehensive clean for 2 bedrooms + 2 baths' },
      { id: '3bhk', name: '3 BHK / Villa', price: 4799, duration: '5-6 Hours', description: 'Full deep cleaning for large apartments and villas' }
    ]
  },
  {
    id: 'srv-2',
    title: 'Bathroom Deep Clean',
    slug: 'bathroom-deep-clean',
    categorySlug: 'cleaning',
    categoryName: 'Cleaning & Pest',
    rating: 4.7,
    reviewCount: 8000,
    duration: '1.5 Hours',
    priceFrom: 499,
    image: serviceBathroom,
    badge: 'Best Seller',
    description: 'Specialized hard water stain removal, toilet sanitization, mirror polishing and tile grout cleaning.',
    inclusions: ['Tile grout dirt removal with acid-free solvents', 'Mirror and glass partition buffing', 'Exhaust fan and geyser outer surface wipe down', 'High-pressure chemical wash'],
    exclusions: ['Plumbing repairs of broken fixtures'],
    tiers: [
      { id: 'single', name: '1 Bathroom Express', price: 499, duration: '1.5 Hours', description: 'Fast hygienic refresh' },
      { id: 'dual', name: '2 Bathrooms Combo', price: 899, duration: '2.5 Hours', description: 'Full deep scrub for 2 washrooms' }
    ]
  },
  {
    id: 'srv-3',
    title: 'Plumbing Repair & Install',
    slug: 'plumbing-repair-install',
    categorySlug: 'plumbing',
    categoryName: 'Electricians & Plumbers',
    rating: 4.9,
    reviewCount: 4000,
    duration: 'Depends on job',
    priceFrom: 249,
    image: servicePlumbing,
    badge: 'Verified Pro',
    description: 'Expert diagnostic and repair of leaking taps, blocked drains, flush tanks, sink installations and shower fixtures.',
    inclusions: ['Accurate fault diagnosis', '30-day post-service service warranty', 'Standard replacement fitting using OEM components'],
    exclusions: ['Material/spare parts cost invoiced at transparent MRP'],
    tiers: [
      { id: 'inspection', name: 'General Inspection & Fix', price: 249, duration: '45 Mins', description: 'Minor tap, valve or leak repair' },
      { id: 'installation', name: 'Fixture Installation', price: 499, duration: '1.5 Hours', description: 'Sink, toilet seat or mixer installation' }
    ]
  },
  {
    id: 'srv-4',
    title: 'Complete Pest Treatment',
    slug: 'complete-pest-treatment',
    categorySlug: 'pest-control',
    categoryName: 'Cleaning & Pest',
    rating: 4.6,
    reviewCount: 6000,
    duration: '2 Hours',
    priceFrom: 1299,
    image: servicePest,
    badge: 'Eco Safe',
    description: 'Odorless, government-approved herbal gel and spray application against cockroaches, ants, termites and spiders.',
    inclusions: ['Herbal dot placement in kitchen corners and cabinets', 'Drainage pipe spray barrier', '90-day free re-treatment guarantee'],
    exclusions: ['Major structural wood replacement'],
    tiers: [
      { id: 'pest-std', name: 'Cockroach & Ant Gel', price: 1299, duration: '2 Hours', description: 'Standard 2-room cover with 90-day warranty' },
      { id: 'pest-pro', name: 'Full Pest & Termite Pro', price: 2199, duration: '3.5 Hours', description: 'Advanced barrier treatment with 180-day warranty' }
    ]
  },
  {
    id: 'srv-5',
    title: 'Kitchen Deep Clean',
    slug: 'kitchen-deep-clean',
    categorySlug: 'cleaning',
    categoryName: 'Cleaning & Pest',
    rating: 4.8,
    reviewCount: 10000,
    duration: '3 Hours',
    priceFrom: 1599,
    image: serviceKitchen,
    badge: 'Trending',
    description: 'Intensive degreasing of chimney filters, cooktops, countertops, tiled walls, sink and external appliance exteriors.',
    inclusions: ['Heavy grease removal from chimney mesh and stove', 'Inside/outside cabinet wiping', 'Floor scrub with bio-safe degreaser'],
    exclusions: ['Chimney motor overhaul'],
    tiers: [
      { id: 'kitchen-basic', name: 'Standard Kitchen Clean', price: 1599, duration: '3 Hours', description: 'Countertops, tiles, stove and outer cabinets' },
      { id: 'kitchen-deep', name: 'Heavy Degrease & Inside Cabinets', price: 2299, duration: '4.5 Hours', description: 'Complete inside-cabinet emptying and deep degreasing' }
    ]
  },
  {
    id: 'srv-6',
    title: 'Electrician Call-Out',
    slug: 'electrician-call-out',
    categorySlug: 'electrical',
    categoryName: 'Electricians & Plumbers',
    rating: 4.8,
    reviewCount: 15000,
    duration: 'Hourly standard',
    priceFrom: 199,
    image: serviceElectrician,
    badge: 'Verified Pro',
    description: 'Certified electrical technicians for switchboard repairs, short circuits, ceiling fan mounting, MCB replacement and chandelier installation.',
    inclusions: ['Voltage and safety check', 'Clean insulation and cabling', '30-day rework warranty'],
    exclusions: ['External grid connection issues'],
    tiers: [
      { id: 'elec-callout', name: '1-Hour Callout Diagnostic', price: 199, duration: '1 Hour', description: 'Diagnosis + fix of up to 2 minor points' },
      { id: 'elec-halfday', name: 'Half-Day Multi-Point Fix', price: 699, duration: '4 Hours', description: 'Full apartment electrical overhaul & fixture installs' }
    ]
  }
];

export const SEED_TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'Super fast! The cleaner arrived on time, had their own kit, and left my apartment sparkling. Highly recommended!',
    name: 'Rohit K.',
    role: 'Mumbai homeowner',
    avatarInitial: 'R',
    city: 'Mumbai',
    rating: 5,
  },
  {
    id: 't-2',
    quote: 'Norozz made finding a reliable plumber so easy. Clear upfront pricing, professional behavior. Loved it.',
    name: 'Ananya S.',
    role: 'Bangalore resident',
    avatarInitial: 'A',
    city: 'Bangalore',
    rating: 5,
  },
  {
    id: 't-3',
    quote: 'Very detailed deep-clean. Background-checked pros gave us complete ease of mind during the painting.',
    name: 'Vikram M.',
    role: 'Delhi NCR resident',
    avatarInitial: 'V',
    city: 'Delhi NCR',
    rating: 5,
  }
];

export const SEED_TEAM = [
  { id: 'lead-1', name: 'Sameer Shah', role: 'Co-Founder & CEO', image: sameerImg, bio: 'Ex-Operations leader at top logistics platforms, driving standard of living improvements.' },
  { id: 'lead-2', name: 'Priya Patel', role: 'Head of Quality Assurance', image: priyaImg, bio: 'Pioneered our 5-stage background check and pro certification framework.' },
  { id: 'lead-3', name: 'Rahul Nair', role: 'VP Operations & Logistics', image: rahulImg, bio: 'Oversees 50+ city hubs and ensures on-time pro arrival SLAs.' },
  { id: 'lead-4', name: 'Aditi Rao', role: 'Head of Customer Success', image: aditiImg, bio: 'Championing 100% money-back guarantee and zero-friction resolution.' }
];

export const SEED_FAQS = [
  {
    id: 'faq-1',
    topic: 'booking',
    question: 'How does Norozz guarantee quality?',
    answer: 'Every specialist undergoes rigorous skill testing and high-quality background training. In the rare case of issues, our 100% money-back redo policy covers your service with zero hassle.'
  },
  {
    id: 'faq-2',
    topic: 'safety',
    question: 'What if something gets damaged during the service?',
    answer: 'All bookings on Norozz are backed by up to ₹10,000 property damage insurance cover. We ensure completely worry-free operations from start to finish.'
  },
  {
    id: 'faq-3',
    topic: 'cancellations',
    question: 'Can I cancel or reschedule my booking?',
    answer: 'Yes! You can reschedule or cancel your bookings up to 3 hours before the scheduled time slot completely free of charge directly via the app.'
  },
  {
    id: 'faq-4',
    topic: 'payments',
    question: 'Are there any hidden fees or surge pricing?',
    answer: 'None at all. All service quotes are fixed and transparent upfront before you confirm. What you see is what you pay.'
  },
  {
    id: 'faq-5',
    topic: 'partners',
    question: 'How do partners get paid?',
    answer: 'Partners receive instant daily/weekly direct bank payouts with complete transparency on earnings, bonuses, and tip splits.'
  }
];

export const SEED_CITIES = [
  { id: 'c-blr', name: 'Bangalore', slug: 'bangalore', state: 'Karnataka', activePros: 8500, rating: 4.9, isHub: true },
  { id: 'c-mum', name: 'Mumbai', slug: 'mumbai', state: 'Maharashtra', activePros: 7200, rating: 4.8, isHub: true },
  { id: 'c-del', name: 'Delhi NCR', slug: 'delhi-ncr', state: 'Delhi', activePros: 9100, rating: 4.8, isHub: true },
  { id: 'c-hyd', name: 'Hyderabad', slug: 'hyderabad', state: 'Telangana', activePros: 4300, rating: 4.9, isHub: false },
  { id: 'c-che', name: 'Chennai', slug: 'chennai', state: 'Tamil Nadu', activePros: 3800, rating: 4.7, isHub: false },
  { id: 'c-pun', name: 'Pune', slug: 'pune', state: 'Maharashtra', activePros: 3200, rating: 4.8, isHub: false }
];

export const SEED_OFFERS = [
  { id: 'off-1', code: 'NOROZZFIRST', title: 'First Booking Offer', discountText: 'Flat ₹500 OFF', description: 'Get instant ₹500 off on your first full home or bathroom deep cleaning service.', validUntil: '31 Dec 2026', badge: 'WELCOME' },
  { id: 'off-2', code: 'PESTSAFE', title: 'Monsoon Pest Protection', discountText: '25% Cashback', description: 'Complete odorless herbal pest & termite treatment with 90-day warranty.', validUntil: '30 Sep 2026', badge: 'SEASONAL' },
  { id: 'off-3', code: 'REFER500', title: 'Refer a Neighbor', discountText: 'Earn ₹500 Credit', description: 'Share your referral code. When your friend completes their first service, you both get ₹500 wallet credit.', validUntil: 'Ongoing', badge: 'REFERRAL' }
];

export const SEED_BLOGS = [
  {
    id: 'b-1',
    title: 'Top 7 Warning Signs Your Home Wiring Needs an Upgrade',
    slug: 'warning-signs-home-wiring-upgrade',
    excerpt: 'Flickering lights, warm outlets, and frequent breaker trips? Here is what professional electricians look for.',
    author: 'Rahul Nair',
    readTime: '4 min read',
    publishedAt: 'August 2026',
    category: 'Electrical Safety',
    tags: ['Electrical', 'Home Safety', 'Maintenance']
  },
  {
    id: 'b-2',
    title: 'The Essential Deep Cleaning Checklist for Monsoon Season',
    slug: 'essential-deep-cleaning-checklist-monsoon',
    excerpt: 'How to prevent mold, odor, and dampness from ruining your wooden cabinets and bathroom tiles.',
    author: 'Priya Patel',
    readTime: '5 min read',
    publishedAt: 'July 2026',
    category: 'Cleaning Guides',
    tags: ['Cleaning', 'Monsoon', 'DIY & Pro Tips']
  }
];
