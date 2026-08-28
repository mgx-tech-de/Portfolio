export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: 'mgx-tech',
    role: 'Software & AI Engineer',
    company: 'MGX-Tech — Freelance',
    location: 'Berlin, Germany',
    period: '12/2025 — Present',
    bullets: [
      'Web apps for local businesses — driving school, car workshop, laundry service, barbershop, café — with professional email and integrated online booking.',
      'AI-powered chatbot resolving client inquiries in more than 5 languages.',
      'QR code check-in/check-out system with an employee database and automated weekly & monthly CSV timesheet exports.',
      'Autonomous AI agent that prospects new leads via Google Maps and runs automated cold-email outreach.',
    ],
  },
  {
    id: 'nitrex',
    role: 'Flutter Developer · ML & AI Specialist',
    company: 'Freelance — Nitrex',
    location: 'Kyiv, Ukraine & Berlin, Germany',
    period: '2020 — Present',
    bullets: [
      'Cross-platform apps with Flutter, Dart and Firebase, delivering responsive UI/UX for Android and iOS.',
      'AI and ML features with TFLite, Flask, OpenAI and Gemini — image recognition, predictive analytics, chatbots.',
      'Real-time web applications combining Python and Flask with dynamic, data-driven functionality.',
      'Monetization via AdSense, AdMob, PayPal and Stripe; state management with GetX, Provider and Bloc.',
    ],
  },
  {
    id: 'goldentech',
    role: 'Python Developer',
    company: 'Freelance — Goldentech',
    location: 'Kyiv, Ukraine & Berlin, Germany',
    period: '2019 — Present',
    bullets: [
      'Python and PHP automation scripts for data extraction and web scraping with Selenium, Beautiful Soup and Scrapy.',
      'Chatbot with automated responses, multimedia sharing and personalized interactions.',
      'Machine learning models with Pandas, NumPy, Scikit-Learn, TensorFlow and PyTorch for predictive analytics and NLP.',
      'Large-scale data extraction and filtering pipelines exporting structured CSV.',
    ],
  },
  {
    id: 'early-freelance',
    role: 'Android & Web Developer',
    company: 'Freelance',
    location: 'Biskra, Algeria',
    period: '2016 — 2018',
    bullets: [
      'WebView-based Android applications in Java and Kotlin.',
      'Landing pages in HTML/CSS for small businesses.',
      'Reskinned Android apps and games with AdMob monetization.',
    ],
  },
];
