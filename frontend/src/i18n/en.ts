export interface Translations {
  nav: {
    services: string;
    projects: string;
    experience: string;
    skills: string;
    contact: string;
    backToTop: string;
  };
  hero: {
    kicker: string;
    sub: string;
    ctaBook: string;
    ctaProjects: string;
    scroll: string;
  };
  sections: {
    services: { kicker: string; title: string };
    projects: { kicker: string; title: string };
    experience: { kicker: string; title: string; education: string };
    skills: { kicker: string; title: string };
    contact: { kicker: string; title: string; sub: string; ctaBook: string };
  };
  footer: {
    blurb: (owner: string, founded: number) => string;
    contact: string;
    legal: string;
  };
  chat: {
    title: string;
    greeting: string;
    suggestions: string[];
    inputPlaceholder: string;
    leadKicker: string;
    leadEmailPlaceholder: string;
    leadIdeaPlaceholder: string;
    leadSubmit: string;
    leadSending: string;
    leadConfirm: string;
    leadError: string;
    openLabel: string;
    closeLabel: string;
    closePanelLabel: string;
  };
}

export const en: Translations = {
  nav: {
    services: 'Services',
    projects: 'Projects',
    experience: 'Experience',
    skills: 'Skills',
    contact: 'Contact',
    backToTop: 'MGX-Tech — back to top',
  },
  hero: {
    kicker: '// FREELANCE SOFTWARE & AI ENGINEERING — BERLIN',
    sub: 'Freelance Software & AI Engineer in Berlin — building web apps, mobile apps and AI systems since 2018.',
    ctaBook: 'Book a free 20-min call',
    ctaProjects: 'See projects',
    scroll: 'scroll',
  },
  sections: {
    services: { kicker: 'Services', title: 'What I build' },
    projects: { kicker: 'Projects', title: 'Selected work' },
    experience: { kicker: 'Experience', title: 'Seven-plus years, shipped', education: 'EDUCATION' },
    skills: { kicker: 'Skills', title: 'The toolbox' },
    contact: {
      kicker: 'Contact',
      title: 'Have a project in mind?',
      sub: 'Book a free 20-minute intro call, write an email, or just phone directly — based in Berlin, working with clients anywhere.',
      ctaBook: 'Book a free 20-min call',
    },
  },
  footer: {
    blurb: (owner, founded) =>
      `${owner} — Freelance Software & AI Engineer, building web apps, mobile apps and AI systems since ${founded}.`,
    contact: '// CONTACT',
    legal: '// LEGAL & SOCIAL',
  },
  chat: {
    title: 'MGX // ASSISTANT',
    greeting:
      "Hi — I'm the MGX-Tech assistant. Ask me anything about services, projects, or working together.",
    suggestions: [
      'What services does MGX-Tech offer?',
      'Do you build Flutter apps?',
      'How can I reach you?',
    ],
    inputPlaceholder: 'Ask about services, projects…',
    leadKicker: '// LEAVE YOUR DETAILS',
    leadEmailPlaceholder: 'your@email.com',
    leadIdeaPlaceholder: 'A sentence or two about your project idea…',
    leadSubmit: 'Send to Mahmoud',
    leadSending: 'Sending…',
    leadConfirm:
      "Got it — your details are with Mahmoud and he'll get back to you shortly. For an instant answer, you can also WhatsApp him directly at +49 177 5478441.",
    leadError: "Couldn't send — please email contact@mgx-tech.com directly.",
    openLabel: 'Open chat assistant',
    closeLabel: 'Close chat assistant',
    closePanelLabel: 'Close chat',
  },
};
