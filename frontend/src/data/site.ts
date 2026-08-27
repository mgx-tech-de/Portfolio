export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  role: string;
  location: string;
  email: string;
  bookingUrl: string;
  founded: number;
  socials: SocialLink[];
  legal: {
    impressum: string;
    datenschutz: string;
  };
}

export const site: SiteConfig = {
  name: 'MGX-Tech',
  tagline: 'Software. Web. Apps. AI.',
  role: 'Freelance Software & AI Engineer',
  location: 'Berlin, Germany',
  email: '[PLACEHOLDER: contact email — see PRD §site]',
  bookingUrl: '[PLACEHOLDER: booking / calendar link — see PRD §site]',
  founded: 2018,
  socials: [
    { label: 'GitHub', href: '[PLACEHOLDER: GitHub profile URL — see PRD §site]' },
    { label: 'LinkedIn', href: '[PLACEHOLDER: LinkedIn profile URL — see PRD §site]' },
    { label: 'X', href: '[PLACEHOLDER: X profile URL — see PRD §site]' },
  ],
  legal: {
    impressum: '/impressum',
    datenschutz: '/datenschutz',
  },
};
