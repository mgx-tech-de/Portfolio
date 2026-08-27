export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
}

export const experience: ExperienceEntry[] = [
  {
    id: 'mgx-tech',
    role: 'Freelance Software & AI Engineer',
    company: 'MGX-Tech',
    location: 'Berlin, Germany',
    period: '2018 — Present',
    summary: '[PLACEHOLDER: engagement highlights — see PRD §experience]',
  },
  {
    id: 'previous-role',
    role: '[PLACEHOLDER: earlier role — see PRD §experience]',
    company: '[PLACEHOLDER: company]',
    location: '[PLACEHOLDER: location]',
    period: '[PLACEHOLDER: period]',
    summary: '[PLACEHOLDER: summary — see PRD §experience]',
  },
];
