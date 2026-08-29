export interface ExperienceEntry {
  id: string;
  role: { en: string; de: string };
  company: string;
  location: { en: string; de: string };
  period: string;
  bullets: { en: string[]; de: string[] };
}

export const experience: ExperienceEntry[] = [
  {
    id: 'mgx-tech',
    role: { en: 'Software & AI Engineer', de: 'Software & AI Engineer' },
    company: 'MGX-Tech — Freelance',
    location: { en: 'Berlin, Germany', de: 'Berlin, Deutschland' },
    period: '12/2025 — Present',
    bullets: {
      en: [
        'Web apps for local businesses — driving school, car workshop, laundry service, barbershop, café — with professional email and integrated online booking.',
        'AI-powered chatbot resolving client inquiries in more than 5 languages.',
        'QR code check-in/check-out system with an employee database and automated weekly & monthly CSV timesheet exports.',
        'Autonomous AI agent that prospects new leads via Google Maps and runs automated cold-email outreach.',
      ],
      de: [
        'Web-Apps für lokale Unternehmen — Fahrschule, Kfz-Werkstatt, Wäscherei, Barbershop, Café — mit professioneller E-Mail und integrierten Online-Buchungssystemen.',
        'KI-gestützter Chatbot, der Kundenanfragen in mehr als 5 Sprachen beantwortet.',
        'QR-Code-Check-in/Check-out-System mit Mitarbeiterdatenbank und automatischen wöchentlichen & monatlichen CSV-Stundenzettel-Exporten.',
        'Autonomer KI-Agent, der über Google Maps neue Leads findet und automatische Cold-E-Mail-Ansprache durchführt.',
      ],
    },
  },
  {
    id: 'nitrex',
    role: { en: 'Flutter Developer · ML & AI Specialist', de: 'Flutter-Entwickler · ML- & KI-Spezialist' },
    company: 'Freelance — Nitrex',
    location: { en: 'Kyiv, Ukraine & Berlin, Germany', de: 'Kiew, Ukraine & Berlin, Deutschland' },
    period: '2020 — Present',
    bullets: {
      en: [
        'Cross-platform apps with Flutter, Dart and Firebase, delivering responsive UI/UX for Android and iOS.',
        'AI and ML features with TFLite, Flask, OpenAI and Gemini — image recognition, predictive analytics, chatbots.',
        'Real-time web applications combining Python and Flask with dynamic, data-driven functionality.',
        'Monetization via AdSense, AdMob, PayPal and Stripe; state management with GetX, Provider and Bloc.',
      ],
      de: [
        'Plattformübergreifende Apps mit Flutter, Dart und Firebase — responsives UI/UX für Android und iOS.',
        'KI- und ML-Features mit TFLite, Flask, OpenAI und Gemini — Bilderkennung, Predictive Analytics, Chatbots.',
        'Echtzeit-Webanwendungen mit Python und Flask und dynamischen, datengetriebenen Funktionen.',
        'Monetarisierung über AdSense, AdMob, PayPal und Stripe; State Management mit GetX, Provider und Bloc.',
      ],
    },
  },
  {
    id: 'goldentech',
    role: { en: 'Python Developer', de: 'Python-Entwickler' },
    company: 'Freelance — Goldentech',
    location: { en: 'Kyiv, Ukraine & Berlin, Germany', de: 'Kiew, Ukraine & Berlin, Deutschland' },
    period: '2019 — Present',
    bullets: {
      en: [
        'Python and PHP automation scripts for data extraction and web scraping with Selenium, Beautiful Soup and Scrapy.',
        'Chatbot with automated responses, multimedia sharing and personalized interactions.',
        'Machine learning models with Pandas, NumPy, Scikit-Learn, TensorFlow and PyTorch for predictive analytics and NLP.',
        'Large-scale data extraction and filtering pipelines exporting structured CSV.',
      ],
      de: [
        'Python- und PHP-Automatisierungsskripte für Datenextraktion und Web-Scraping mit Selenium, Beautiful Soup und Scrapy.',
        'Chatbot mit automatisierten Antworten, Multimedia-Sharing und personalisierten Interaktionen.',
        'Machine-Learning-Modelle mit Pandas, NumPy, Scikit-Learn, TensorFlow und PyTorch für Predictive Analytics und NLP.',
        'Pipelines für groß angelegte Datenextraktion und -filterung mit Export in strukturierte CSV.',
      ],
    },
  },
  {
    id: 'early-freelance',
    role: { en: 'Android & Web Developer', de: 'Android- & Web-Entwickler' },
    company: 'Freelance',
    location: { en: 'Biskra, Algeria', de: 'Biskra, Algerien' },
    period: '2016 — 2018',
    bullets: {
      en: [
        'WebView-based Android applications in Java and Kotlin.',
        'Landing pages in HTML/CSS for small businesses.',
        'Reskinned Android apps and games with AdMob monetization.',
      ],
      de: [
        'WebView-basierte Android-Apps in Java und Kotlin.',
        'Landingpages in HTML/CSS für kleine Unternehmen.',
        'Reskinning von Android-Apps und -Spielen mit AdMob-Monetarisierung.',
      ],
    },
  },
];
