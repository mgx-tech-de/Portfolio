export interface Project {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 'project-1',
    index: '01',
    title: '[PLACEHOLDER: project title — see PRD §projects]',
    description: '[PLACEHOLDER: project description — see PRD §projects]',
    tags: ['[PLACEHOLDER: stack — see PRD]'],
    year: '[PLACEHOLDER: year]',
    link: '[PLACEHOLDER: case study or live URL — see PRD]',
  },
  {
    id: 'project-2',
    index: '02',
    title: '[PLACEHOLDER: project title — see PRD §projects]',
    description: '[PLACEHOLDER: project description — see PRD §projects]',
    tags: ['[PLACEHOLDER: stack — see PRD]'],
    year: '[PLACEHOLDER: year]',
    link: '[PLACEHOLDER: case study or live URL — see PRD]',
  },
  {
    id: 'project-3',
    index: '03',
    title: '[PLACEHOLDER: project title — see PRD §projects]',
    description: '[PLACEHOLDER: project description — see PRD §projects]',
    tags: ['[PLACEHOLDER: stack — see PRD]'],
    year: '[PLACEHOLDER: year]',
    link: '[PLACEHOLDER: case study or live URL — see PRD]',
  },
];
