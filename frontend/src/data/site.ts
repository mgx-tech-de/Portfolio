export interface SocialLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  owner: string;
  tagline: string;
  role: string;
  location: string;
  email: string;
  phoneDisplay: string;
  phoneHref: string;
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
  owner: 'Mahmoud Amrous',
  tagline: 'Software. Web. Apps. AI.',
  role: 'Freelance Software & AI Engineer',
  location: 'Berlin, Germany',
  email: 'contact@mgx-tech.com',
  phoneDisplay: '+49 177 5478441',
  phoneHref: 'tel:+491775478441',
  bookingUrl: '[PLACEHOLDER: booking / calendar link — not in CV]',
  founded: 2018,
  socials: [
    { label: 'GitHub', href: 'https://github.com/mgx-tech-de' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mgx-tech' },
  ],
  legal: {
    impressum: '/impressum',
    datenschutz: '/datenschutz',
  },
};
