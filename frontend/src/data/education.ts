export interface EducationEntry {
  id: string;
  title: { en: string; de: string };
  school: string;
  location: { en: string; de: string };
  period: string;
}

export const education: EducationEntry[] = [
  {
    id: 'cs-degree',
    title: {
      en: 'Computer Science — algorithms, data structures, mathematics',
      de: 'Informatik — Algorithmen, Datenstrukturen, Mathematik',
    },
    school: 'University of Mohamed Khider',
    location: { en: 'Biskra, Algeria', de: 'Biskra, Algerien' },
    period: '2012 — 2015',
  },
  {
    id: 'spiced',
    title: { en: 'Machine Learning & AI Bootcamp', de: 'Machine-Learning- & KI-Bootcamp' },
    school: 'Spiced Academy',
    location: { en: 'Berlin, Germany', de: 'Berlin, Deutschland' },
    period: '2024',
  },
  {
    id: 'german-b2',
    title: { en: 'German Course — B2 Level', de: 'Deutschkurs — Niveau B2' },
    school: 'JobKonzept',
    location: { en: 'Berlin, Germany', de: 'Berlin, Deutschland' },
    period: '2023 — 2025',
  },
];
