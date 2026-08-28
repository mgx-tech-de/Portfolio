export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    id: 'mobile',
    label: 'Flutter & Mobile',
    items: ['Flutter', 'Dart', 'Android (Java / Kotlin)', 'Provider', 'Riverpod', 'Bloc', 'GetX', 'Firebase', 'Play Store / App Store'],
  },
  {
    id: 'python',
    label: 'Python & Backend',
    items: ['Python', 'Flask', 'Django', 'REST APIs', 'PostgreSQL', 'MySQL', 'JWT / OAuth'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    items: ['OpenAI', 'Gemini', 'TFLite', 'TensorFlow', 'PyTorch', 'Scikit-Learn', 'MLKit'],
  },
  {
    id: 'data',
    label: 'Data & Automation',
    items: ['Selenium', 'Beautiful Soup', 'Scrapy', 'Pandas', 'NumPy', 'Matplotlib / Plotly'],
  },
  {
    id: 'payments',
    label: 'Payments & Monetization',
    items: ['Stripe', 'PayPal', 'AdMob', 'AdSense'],
  },
  {
    id: 'workflow',
    label: 'Tools & Workflow',
    items: ['Git', 'GitHub / GitLab', 'Jira / Scrum', 'Linux', 'Windows'],
  },
  {
    id: 'languages',
    label: 'Languages',
    items: ['Arabic — native', 'English — proficient', 'French — proficient', 'German — B2', 'Russian — advanced'],
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
