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
  whatsappUrl: string;
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
  whatsappUrl:
    'https://wa.me/491775478441?text=Hi%20Mahmoud%2C%20I%27d%20like%20to%20book%20a%20free%2020-min%20call.',
  bookingUrl:
    'https://wa.me/491775478441?text=Hi%20Mahmoud%2C%20I%27d%20like%20to%20book%20a%20free%2020-min%20call.',
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
