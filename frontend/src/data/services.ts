export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
}

export const services: Service[] = [
  {
    id: 'software',
    index: '01',
    title: 'Software Engineering',
    description: '[PLACEHOLDER: service description — see PRD §services]',
    tags: ['[PLACEHOLDER: tags — see PRD]'],
  },
  {
    id: 'web',
    index: '02',
    title: 'Web Applications',
    description: '[PLACEHOLDER: service description — see PRD §services]',
    tags: ['[PLACEHOLDER: tags — see PRD]'],
  },
  {
    id: 'mobile',
    index: '03',
    title: 'Mobile Apps',
    description: '[PLACEHOLDER: service description — see PRD §services]',
    tags: ['[PLACEHOLDER: tags — see PRD]'],
  },
  {
    id: 'ai',
    index: '04',
    title: 'AI Systems',
    description: '[PLACEHOLDER: service description — see PRD §services]',
    tags: ['[PLACEHOLDER: tags — see PRD]'],
  },
];
