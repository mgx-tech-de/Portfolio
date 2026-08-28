export interface EducationEntry {
  id: string;
  title: string;
  school: string;
  location: string;
  period: string;
}

export const education: EducationEntry[] = [
  {
    id: 'cs-degree',
    title: 'Computer Science — algorithms, data structures, mathematics',
    school: 'University of Mohamed Khider',
    location: 'Biskra, Algeria',
    period: '2012 — 2015',
  },
  {
    id: 'spiced',
    title: 'Machine Learning & AI Bootcamp',
    school: 'Spiced Academy',
    location: 'Berlin, Germany',
    period: '2024',
  },
  {
    id: 'german-b2',
    title: 'German Course — B2 Level',
    school: 'JobKonzept',
    location: 'Berlin, Germany',
    period: '2023 — 2025',
  },
];
