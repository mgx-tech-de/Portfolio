import type { Translations } from './en';

export const de: Translations = {
  nav: {
    services: 'Leistungen',
    projects: 'Projekte',
    experience: 'Erfahrung',
    skills: 'Skills',
    contact: 'Kontakt',
    backToTop: 'MGX-Tech — nach oben',
  },
  hero: {
    kicker: '// FREIBERUFLICHER SOFTWARE & AI ENGINEER — BERLIN',
    sub: 'Freiberuflicher Software & AI Engineer in Berlin — Web-Apps, mobile Apps und KI-Systeme seit 2018.',
    ctaBook: 'Kostenloses 20-Minuten-Gespräch',
    ctaProjects: 'Projekte ansehen',
    scroll: 'scrollen',
  },
  sections: {
    services: { kicker: 'Leistungen', title: 'Was ich baue' },
    projects: { kicker: 'Projekte', title: 'Ausgewählte Arbeiten' },
    experience: { kicker: 'Erfahrung', title: 'Über sieben Jahre, geliefert', education: 'AUSBILDUNG' },
    skills: { kicker: 'Skills', title: 'Der Werkzeugkasten' },
    contact: {
      kicker: 'Kontakt',
      title: 'Ein Projekt im Kopf?',
      sub: 'Buchen Sie ein kostenloses 20-minütiges Erstgespräch, schreiben Sie eine E-Mail oder rufen Sie direkt an — ansässig in Berlin, für Kunden überall.',
      ctaBook: 'Kostenloses 20-Minuten-Gespräch',
    },
  },
  footer: {
    blurb: (owner, founded) =>
      `${owner} — Freiberuflicher Software & AI Engineer. Web-Apps, mobile Apps und KI-Systeme seit ${founded}.`,
    contact: '// KONTAKT',
    legal: '// RECHTLICHES & SOCIAL',
  },
  chat: {
    title: 'MGX // ASSISTANT',
    greeting:
      'Hallo — ich bin der MGX-Tech-Assistent. Fragen Sie mich alles zu Leistungen, Projekten oder der Zusammenarbeit.',
    suggestions: [
      'Welche Leistungen bietet MGX-Tech?',
      'Entwickeln Sie Flutter-Apps?',
      'Wie kann ich Sie erreichen?',
    ],
    inputPlaceholder: 'Fragen zu Leistungen, Projekten…',
    leadKicker: '// IHRE DATEN HINTERLASSEN',
    leadEmailPlaceholder: 'ihre@email.de',
    leadIdeaPlaceholder: 'Ein, zwei Sätze zu Ihrer Projektidee…',
    leadSubmit: 'An Mahmoud senden',
    leadSending: 'Wird gesendet…',
    leadConfirm:
      'Danke — Ihre Daten sind bei Mahmoud, er meldet sich in Kürze. Für eine sofortige Antwort: WhatsApp +49 177 5478441.',
    leadError: 'Senden fehlgeschlagen — bitte schreiben Sie direkt an contact@mgx-tech.com.',
    openLabel: 'Chat-Assistent öffnen',
    closeLabel: 'Chat-Assistent schließen',
    closePanelLabel: 'Chat schließen',
  },
};
