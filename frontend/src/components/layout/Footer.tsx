import { Github, Linkedin, MapPin, Mail } from 'lucide-react';
import { site } from '../../data/site';
import { Reveal } from '../Reveal';

const SOCIAL_ICONS: Record<string, typeof Github> = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      aria-labelledby="footer-heading"
      className="relative border-t border-line bg-surface"
      data-testid="footer"
    >
      <div className="diagonal-hairline absolute inset-x-0 -top-px" aria-hidden="true" />
      <Reveal className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.4fr_1fr_1fr] md:px-10">
        <div>
          <img src="/brand/mgx-logo.png" alt="MGX-Tech logo" className="h-10 w-10 object-contain" />
          <p className="mt-6 font-display text-lg font-medium text-ink">{site.tagline}</p>
          <p className="mt-2 max-w-xs text-sm text-mute">
            {site.owner} — {site.role}, building web apps, mobile apps and AI systems since{' '}
            {site.founded}.
          </p>
        </div>

        <div>
          <h2
            id="footer-heading"
            className="font-mono text-xs tracking-[0.25em] text-cyan"
            data-testid="footer-contact-heading"
          >
            {'// CONTACT'}
          </h2>
          <ul className="mt-6 space-y-4 text-sm">
            <li className="flex items-center gap-3 text-mute" data-testid="footer-email">
              <Mail size={15} className="shrink-0 text-cyan" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="footer-legal-link">
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-3 text-mute" data-testid="footer-location">
              <MapPin size={15} className="shrink-0 text-cyan" aria-hidden="true" />
              <span>{site.location}</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-mono text-xs tracking-[0.25em] text-cyan" data-testid="footer-legal-heading">
            {'// LEGAL & SOCIAL'}
          </h2>
          <ul className="mt-6 space-y-3">
            <li>
              <a href={site.legal.impressum} className="footer-legal-link" data-testid="footer-impressum-link">
                Impressum
              </a>
            </li>
            <li>
              <a href={site.legal.datenschutz} className="footer-legal-link" data-testid="footer-datenschutz-link">
                Datenschutz
              </a>
            </li>
          </ul>
          <div className="mt-6 flex gap-3" data-testid="footer-socials">
            {site.socials.map((social) => {
              const Icon = SOCIAL_ICONS[social.label] ?? Github;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={`MGX-Tech on ${social.label}`}
                  className="social-icon-btn"
                  rel="noreferrer"
                  target="_blank"
                  data-testid={`footer-social-${social.label.toLowerCase()}`}
                >
                  <Icon size={16} aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>
      </Reveal>
      <div className="border-t border-line py-6 text-center font-mono text-xs tracking-[0.15em] text-mute">
        © {year} {site.name} — Berlin
      </div>
    </footer>
  );
}
