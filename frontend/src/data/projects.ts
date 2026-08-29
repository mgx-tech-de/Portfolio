export interface Project {
  id: string;
  index: string;
  title: string;
  monogram: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'alzheimer-detector',
    index: '01',
    title: 'Alzheimer Detector & Analyzer',
    monogram: 'AD',
    category: 'AI / Healthcare',
    description:
      'Two Python models — MobileNetV2 classification and a neural-network predictor — behind a Flutter app that analyzes uploaded MRI scans on-device via TFLite, with a Gemini API chatbot explaining results.',
    tags: ['Flutter', 'Python', 'TFLite', 'Gemini'],
    year: '2024 — Present',
    images: [
      '/projects/alzheimer-1.jpg',
      '/projects/alzheimer-2.jpg',
      '/projects/alzheimer-3.jpg',
      '/projects/alzheimer-4.jpg',
    ],
  },
  {
    id: 'ai-startup-scraper',
    index: '02',
    title: 'AI New-Startup Scraper',
    monogram: 'AS',
    category: 'AI / Automation',
    description:
      'Autonomous AI agent that scans Google Maps for newly opened businesses in any area, verifies them via reviews, opening dates and metadata, extracts contact details — name, category, address, phone, website, email, ratings — and exports clean CSV. Paired with a startup database enriched by AI, with a natural-language assistant for insights.',
    tags: ['AI agents', 'Google Maps API', 'Web scraping', 'CSV export', 'AI assistant'],
    year: '2025 — Present',
    images: ['/projects/ai-scraper-1.png', '/projects/ai-scraper-2.png'],
  },
  {
    id: 'client-websites',
    index: '03',
    title: 'Client Websites',
    monogram: 'CW',
    category: 'Web / Local Business',
    description:
      'Modern business websites powered by AI chatbots, smart booking systems and admin panels — multilingual, fully responsive and SEO-optimized, built for local businesses from laundries to barbershops to markets.',
    tags: ['AI chatbot', 'Smart booking', 'Admin panels', 'Multilingual', 'SEO', 'Responsive'],
    year: '2025 — Present',
    images: [
      '/projects/site-htv24.jpg',
      '/projects/site-dilam.jpg',
      '/projects/site-dzmarket.jpg',
    ],
  },
  {
    id: 'orientstation',
    index: '04',
    title: 'Orientstation Ordering',
    monogram: 'OR',
    category: 'Gastronomy / Mobile & Web',
    description:
      'Restaurant ordering platform for mobile and web with full order customization, real-time order management for the kitchen, and PayPal checkout.',
    tags: ['Flutter', 'Web', 'Realtime', 'PayPal'],
    year: '2023 — Present',
    images: [
      '/projects/orientstation-1.jpg',
      '/projects/orientstation-2.jpg',
      '/projects/orientstation-3.jpg',
    ],
  },
  {
    id: 'stampwich',
    index: '05',
    title: 'Stampwich Loyalty',
    monogram: 'ST',
    category: 'Gastronomy / Loyalty',
    description:
      'Loyalty app for mobile and web built around QR code generation — customers collect stamps with every visit and redeem them for rewards.',
    tags: ['Flutter', 'Web', 'QR codes'],
    year: '2024 — Present',
    images: ['/projects/stampwich.jpg'],
  },
  {
    id: 'nitrex',
    index: '06',
    title: 'Nitrex Trading Dashboard',
    monogram: 'NI',
    category: 'Fintech / Mobile',
    description:
      'Cross-platform trading platform dashboard for Android and iOS, rendering live market data with Flutter and Syncfusion Charts.',
    tags: ['Flutter', 'Syncfusion', 'Charts', 'iOS / Android'],
    year: '2020 — 2021',
    images: ['/projects/nitrex.png'],
  },
];
