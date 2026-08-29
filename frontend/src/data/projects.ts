export interface Project {
  id: string;
  index: string;
  title: string;
  monogram: string;
  category: { en: string; de: string };
  description: { en: string; de: string };
  tags: { en: string[]; de: string[] };
  year: string;
  images?: string[];
}

export const projects: Project[] = [
  {
    id: 'alzheimer-detector',
    index: '01',
    title: 'Alzheimer Detector & Analyzer',
    monogram: 'AD',
    category: { en: 'AI / Healthcare', de: 'KI / Gesundheit' },
    description: {
      en: 'Two Python models — MobileNetV2 classification and a neural-network predictor — behind a Flutter app that analyzes uploaded MRI scans on-device via TFLite, with a Gemini API chatbot explaining results.',
      de: 'Zwei Python-Modelle — MobileNetV2-Klassifikation und ein Neural-Network-Prädiktor — hinter einer Flutter-App, die hochgeladene MRT-Scans on-device per TFLite analysiert; ein Gemini-API-Chatbot erklärt die Ergebnisse.',
    },
    tags: {
      en: ['Flutter', 'Python', 'TFLite', 'Gemini'],
      de: ['Flutter', 'Python', 'TFLite', 'Gemini'],
    },
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
    category: { en: 'AI / Automation', de: 'KI / Automatisierung' },
    description: {
      en: 'Autonomous AI agent that scans Google Maps for newly opened businesses in any area, verifies them via reviews, opening dates and metadata, extracts contact details — name, category, address, phone, website, email, ratings — and exports clean CSV. Paired with a startup database enriched by AI, with a natural-language assistant for insights.',
      de: 'Autonomer KI-Agent, der Google Maps nach neu eröffneten Unternehmen in jeder Region durchsucht, sie über Bewertungen, Eröffnungsdaten und Metadaten verifiziert, Kontaktdaten extrahiert — Name, Kategorie, Adresse, Telefon, Website, E-Mail, Bewertungen — und saubere CSV-Dateien exportiert. Dazu eine KI-angereicherte Startup-Datenbank mit Assistent für natürlichsprachliche Abfragen.',
    },
    tags: {
      en: ['AI agents', 'Google Maps API', 'Web scraping', 'CSV export', 'AI assistant'],
      de: ['KI-Agenten', 'Google Maps API', 'Web-Scraping', 'CSV-Export', 'KI-Assistent'],
    },
    year: '2025 — Present',
    images: ['/projects/ai-scraper-1.png', '/projects/ai-scraper-2.png'],
  },
  {
    id: 'client-websites',
    index: '03',
    title: 'Client Websites',
    monogram: 'CW',
    category: { en: 'Web / Local Business', de: 'Web / Lokale Unternehmen' },
    description: {
      en: 'Modern business websites powered by AI chatbots, smart booking systems and admin panels — multilingual, fully responsive and SEO-optimized, built for local businesses from laundries to barbershops to markets.',
      de: 'Moderne Business-Websites mit KI-Chatbots, intelligenten Buchungssystemen und Admin-Panels — mehrsprachig, voll responsiv und SEO-optimiert, gebaut für lokale Unternehmen von Wäscherei bis Barbershop bis Markt.',
    },
    tags: {
      en: ['AI chatbot', 'Smart booking', 'Admin panels', 'Multilingual', 'SEO', 'Responsive'],
      de: ['KI-Chatbot', 'Smarte Buchung', 'Admin-Panels', 'Mehrsprachig', 'SEO', 'Responsiv'],
    },
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
    category: { en: 'Gastronomy / Mobile & Web', de: 'Gastronomie / Mobile & Web' },
    description: {
      en: 'Restaurant ordering platform for mobile and web with full order customization, real-time order management for the kitchen, and PayPal checkout.',
      de: 'Restaurant-Bestellplattform für Mobile und Web mit vollständiger Bestellanpassung, Echtzeit-Bestellmanagement für die Küche und PayPal-Checkout.',
    },
    tags: {
      en: ['Flutter', 'Web', 'Realtime', 'PayPal'],
      de: ['Flutter', 'Web', 'Echtzeit', 'PayPal'],
    },
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
    category: { en: 'Gastronomy / Loyalty', de: 'Gastronomie / Loyalty' },
    description: {
      en: 'Loyalty app for mobile and web built around QR code generation — customers collect stamps with every visit and redeem them for rewards.',
      de: 'Loyalty-App für Mobile und Web rund um QR-Code-Generierung — Kunden sammeln bei jedem Besuch Stempel und lösen sie gegen Prämien ein.',
    },
    tags: {
      en: ['Flutter', 'Web', 'QR codes'],
      de: ['Flutter', 'Web', 'QR-Codes'],
    },
    year: '2024 — Present',
    images: ['/projects/stampwich.jpg'],
  },
  {
    id: 'nitrex',
    index: '06',
    title: 'Nitrex Trading Dashboard',
    monogram: 'NI',
    category: { en: 'Fintech / Mobile', de: 'Fintech / Mobile' },
    description: {
      en: 'Cross-platform trading platform dashboard for Android and iOS, rendering live market data with Flutter and Syncfusion Charts.',
      de: 'Plattformübergreifendes Trading-Dashboard für Android und iOS, das Live-Marktdaten mit Flutter und Syncfusion Charts rendert.',
    },
    tags: {
      en: ['Flutter', 'Syncfusion', 'Charts', 'iOS / Android'],
      de: ['Flutter', 'Syncfusion', 'Charts', 'iOS / Android'],
    },
    year: '2020 — 2021',
    images: ['/projects/nitrex.png'],
  },
];
