export interface Project {
  id: string;
  index: string;
  title: string;
  monogram: string;
  category: string;
  description: string;
  tags: string[];
  year: string;
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
  },
  {
    id: 'orientstation',
    index: '02',
    title: 'Orientstation Ordering',
    monogram: 'OR',
    category: 'Gastronomy / Mobile & Web',
    description:
      'Restaurant ordering platform for mobile and web with full order customization, real-time order management for the kitchen, and PayPal checkout.',
    tags: ['Flutter', 'Web', 'Realtime', 'PayPal'],
    year: '2023 — Present',
  },
  {
    id: 'stampwich',
    index: '03',
    title: 'Stampwich Loyalty',
    monogram: 'ST',
    category: 'Gastronomy / Loyalty',
    description:
      'Loyalty app for mobile and web built around QR code generation — customers collect stamps with every visit and redeem them for rewards.',
    tags: ['Flutter', 'Web', 'QR codes'],
    year: '2024 — Present',
  },
  {
    id: 'nitrex',
    index: '04',
    title: 'Nitrex Trading Dashboard',
    monogram: 'NI',
    category: 'Fintech / Mobile',
    description:
      'Cross-platform trading platform dashboard for Android and iOS, rendering live market data with Flutter and Syncfusion Charts.',
    tags: ['Flutter', 'Syncfusion', 'Charts', 'iOS / Android'],
    year: '2020 — 2021',
  },
];
