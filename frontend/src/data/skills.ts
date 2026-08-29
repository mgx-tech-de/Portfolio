export interface SkillGroup {
  id: string;
  label: { en: string; de: string };
  items: { en: string[]; de: string[] };
}

export const skills: SkillGroup[] = [
  {
    id: 'mobile',
    label: { en: 'Flutter & Mobile', de: 'Flutter & Mobile' },
    items: {
      en: ['Flutter', 'Dart', 'Android (Java / Kotlin)', 'Provider', 'Riverpod', 'Bloc', 'GetX', 'Firebase', 'Play Store / App Store'],
      de: ['Flutter', 'Dart', 'Android (Java / Kotlin)', 'Provider', 'Riverpod', 'Bloc', 'GetX', 'Firebase', 'Play Store / App Store'],
    },
  },
  {
    id: 'python',
    label: { en: 'Python & Backend', de: 'Python & Backend' },
    items: {
      en: ['Python', 'Flask', 'Django', 'REST APIs', 'PostgreSQL', 'MySQL', 'JWT / OAuth'],
      de: ['Python', 'Flask', 'Django', 'REST-APIs', 'PostgreSQL', 'MySQL', 'JWT / OAuth'],
    },
  },
  {
    id: 'ai-ml',
    label: { en: 'AI / ML', de: 'KI / ML' },
    items: {
      en: ['OpenAI', 'Gemini', 'TFLite', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'MLKit'],
      de: ['OpenAI', 'Gemini', 'TFLite', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'MLKit'],
    },
  },
  {
    id: 'data',
    label: { en: 'Data & Automation', de: 'Daten & Automatisierung' },
    items: {
      en: ['Selenium', 'Beautiful Soup', 'Scrapy', 'Pandas', 'NumPy', 'Matplotlib / Plotly'],
      de: ['Selenium', 'Beautiful Soup', 'Scrapy', 'Pandas', 'NumPy', 'Matplotlib / Plotly'],
    },
  },
  {
    id: 'payments',
    label: { en: 'Payments & Monetization', de: 'Zahlungen & Monetarisierung' },
    items: {
      en: ['Stripe', 'PayPal', 'AdMob', 'AdSense'],
      de: ['Stripe', 'PayPal', 'AdMob', 'AdSense'],
    },
  },
  {
    id: 'workflow',
    label: { en: 'Tools & Workflow', de: 'Tools & Workflow' },
    items: {
      en: ['Git', 'GitHub / GitLab', 'Jira / Scrum', 'Linux', 'Windows'],
      de: ['Git', 'GitHub / GitLab', 'Jira / Scrum', 'Linux', 'Windows'],
    },
  },
  {
    id: 'languages',
    label: { en: 'Languages', de: 'Sprachen' },
    items: {
      en: ['Arabic — native', 'English — proficient', 'French — proficient', 'German — B2', 'Russian — advanced'],
      de: ['Arabisch — Muttersprache', 'Englisch — fließend', 'Französisch — fließend', 'Deutsch — B2', 'Russisch — fortgeschritten'],
    },
  },
];

export const marqueeSkills: string[] = [
  'Flutter',
  'Dart',
  'Python',
  'Flask',
  'OpenAI',
  'Gemini',
  'TensorFlow',
  'TFLite',
  'Firebase',
  'Stripe',
  'PostgreSQL',
  'Scrapy',
];
