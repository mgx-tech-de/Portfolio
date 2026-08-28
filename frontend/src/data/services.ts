export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'web',
    index: '01',
    title: 'Web Applications',
    description:
      'Modern websites and web apps for local businesses — driving schools, workshops, barbershops, cafés — with professional email, integrated online booking and real-time features built on Python and Flask.',
    tags: ['Python', 'Flask', 'Realtime', 'Booking systems'],
  },
  {
    id: 'mobile',
    index: '02',
    title: 'Mobile Apps',
    description:
      'Cross-platform Android & iOS apps with Flutter and Dart — responsive UI/UX, solid state management, store deployment and built-in monetization.',
    tags: ['Flutter', 'Dart', 'Firebase', 'Stripe / AdMob'],
  },
  {
    id: 'ai',
    index: '03',
    title: 'AI Systems',
    description:
      'AI chatbots that answer customer inquiries in 5+ languages, on-device ML with TFLite, predictive analytics — and autonomous agents that prospect new leads on their own.',
    tags: ['OpenAI', 'Gemini', 'TFLite', 'AI agents'],
  },
  {
    id: 'automation',
    index: '04',
    title: 'Automation & Data',
    description:
      'Python automation that does the busywork: web scraping at scale, data extraction into structured CSV, and internal tools like QR check-in systems with automated timesheet exports.',
    tags: ['Python', 'Selenium', 'Scrapy', 'Pandas'],
  },
];
