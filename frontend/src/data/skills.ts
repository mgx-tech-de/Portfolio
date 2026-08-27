export interface SkillGroup {
  id: string;
  label: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  {
    id: 'languages',
    label: 'Languages',
    items: ['[PLACEHOLDER: languages — see PRD §skills]'],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['[PLACEHOLDER: frontend stack — see PRD §skills]'],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    items: ['[PLACEHOLDER: mobile stack — see PRD §skills]'],
  },
  {
    id: 'ai-ml',
    label: 'AI / ML',
    items: ['[PLACEHOLDER: AI stack — see PRD §skills]'],
  },
  {
    id: 'backend-infra',
    label: 'Backend & Infrastructure',
    items: ['[PLACEHOLDER: backend/infra — see PRD §skills]'],
  },
];
