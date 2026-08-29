export interface Service {
  id: string;
  index: string;
  title: { en: string; de: string };
  description: { en: string; de: string };
  tags: { en: string[]; de: string[] };
}

export const services: Service[] = [
  {
    id: 'web',
    index: '01',
    title: { en: 'Web Applications', de: 'Webanwendungen' },
    description: {
      en: 'Modern websites and web apps for local businesses — driving schools, workshops, barbershops, cafés — with professional email, integrated online booking and real-time features built on Python and Flask.',
      de: 'Moderne Websites und Web-Apps für lokale Unternehmen — Fahrschulen, Werkstätten, Barbershops, Cafés — mit professioneller E-Mail, integrierten Online-Buchungssystemen und Echtzeit-Funktionen auf Basis von Python und Flask.',
    },
    tags: {
      en: ['Python', 'Flask', 'Realtime', 'Booking systems'],
      de: ['Python', 'Flask', 'Echtzeit', 'Buchungssysteme'],
    },
  },
  {
    id: 'mobile',
    index: '02',
    title: { en: 'Mobile Apps', de: 'Mobile Apps' },
    description: {
      en: 'Cross-platform Android & iOS apps with Flutter and Dart — responsive UI/UX, solid state management, store deployment and built-in monetization.',
      de: 'Plattformübergreifende Android- & iOS-Apps mit Flutter und Dart — responsives UI/UX, solides State Management, Store-Veröffentlichung und integrierte Monetarisierung.',
    },
    tags: {
      en: ['Flutter', 'Dart', 'Firebase', 'Stripe / AdMob'],
      de: ['Flutter', 'Dart', 'Firebase', 'Stripe / AdMob'],
    },
  },
  {
    id: 'ai',
    index: '03',
    title: { en: 'AI Systems', de: 'KI-Systeme' },
    description: {
      en: 'AI chatbots that answer customer inquiries in 5+ languages, on-device ML with TFLite, predictive analytics — and autonomous agents that prospect new leads on their own.',
      de: 'KI-Chatbots, die Kundenanfragen in über 5 Sprachen beantworten, On-Device-ML mit TFLite, Predictive Analytics — und autonome Agenten, die eigenständig neue Leads finden.',
    },
    tags: {
      en: ['OpenAI', 'Gemini', 'TFLite', 'AI agents'],
      de: ['OpenAI', 'Gemini', 'TFLite', 'KI-Agenten'],
    },
  },
  {
    id: 'automation',
    index: '04',
    title: { en: 'Automation & Data', de: 'Automatisierung & Daten' },
    description: {
      en: 'Python automation that does the busywork: web scraping at scale, data extraction into structured CSV, and internal tools like QR check-in systems with automated timesheet exports.',
      de: 'Python-Automatisierung für die Fleißarbeit: Web-Scraping im großen Stil, Datenextraktion in strukturierte CSV-Dateien und interne Tools wie QR-Check-in-Systeme mit automatischen Stundenzettel-Exporten.',
    },
    tags: {
      en: ['Python', 'Selenium', 'Scrapy', 'Pandas'],
      de: ['Python', 'Selenium', 'Scrapy', 'Pandas'],
    },
  },
];
