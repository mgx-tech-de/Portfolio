import { Mail, Phone, MapPin } from 'lucide-react';
import { site } from '../../data/site';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';
import { CircuitField } from '../hero/CircuitField';

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      data-testid="contact-section"
      className="relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-70" aria-hidden="true">
        <CircuitField testId="circuit-field-contact" />
      </div>
      <Reveal className="relative mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeader index="05" kicker="Contact" title="Have a project in mind?" titleId="contact-title" />
        <p className="mt-6 max-w-lg text-base text-mute md:text-lg" data-testid="contact-sub">
          Book a free 20-minute intro call, write an email, or just phone directly — based in
          Berlin, working with clients anywhere.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a href={`mailto:${site.email}`} className="btn-primary" data-testid="contact-cta-email">
            <span>Book a free 20-min call</span>
          </a>
          <a href={site.phoneHref} className="btn-ghost" data-testid="contact-cta-phone">
            <span>{site.phoneDisplay}</span>
          </a>
        </div>
        <ul className="mt-14 flex flex-wrap gap-x-10 gap-y-4 font-mono text-xs tracking-[0.12em] text-mute">
          <li className="flex items-center gap-2" data-testid="contact-email">
            <Mail size={14} className="text-cyan" aria-hidden="true" />
            <a href={`mailto:${site.email}`} className="footer-legal-link font-mono">
              {site.email}
            </a>
          </li>
          <li className="flex items-center gap-2" data-testid="contact-phone">
            <Phone size={14} className="text-cyan" aria-hidden="true" />
            <span>{site.phoneDisplay}</span>
          </li>
          <li className="flex items-center gap-2" data-testid="contact-location">
            <MapPin size={14} className="text-red" aria-hidden="true" />
            <span>{site.location}</span>
          </li>
        </ul>
      </Reveal>
    </section>
  );
}
