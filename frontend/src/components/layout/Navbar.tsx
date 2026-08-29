import { useLayoutEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollTo } from '../../lib/lenis';
import { gsap, ScrollTrigger } from '../../lib/gsap-setup';
import { useLanguage, type Lang } from '../../i18n/LanguageContext';

const NAV_HREFS = ['#services', '#projects', '#experience', '#skills', '#contact'] as const;

function LangToggle({ compact = false }: { compact?: boolean }) {
  const { lang, setLang } = useLanguage();
  const btn = (value: Lang, label: string) => (
    <button
      type="button"
      className={`lang-btn ${lang === value ? 'lang-btn--on' : ''}`}
      onClick={() => setLang(value)}
      aria-pressed={lang === value}
      data-testid={`lang-${value}`}
    >
      {label}
    </button>
  );
  return (
    <div
      className={`lang-switch ${compact ? 'lang-switch--compact' : ''}`}
      role="group"
      aria-label="Language / Sprache"
      data-testid="lang-switch"
    >
      {btn('en', 'EN')}
      <span className="lang-divider" aria-hidden="true" />
      {btn('de', 'DE')}
    </div>
  );
}

interface NavbarProps {
  solid: boolean;
}

export function Navbar({ solid }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const scrollTo = useScrollTo();
  const { t } = useLanguage();

  const links = [
    { label: t.nav.services, href: '#services' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.experience, href: '#experience' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      NAV_HREFS.forEach((href) => {
        const el = document.querySelector(href);
        if (!el) return;
        ScrollTrigger.create({
          trigger: el,
          start: 'top 55%',
          end: 'bottom 55%',
          onToggle: (self) => {
            if (self.isActive) setActive(href);
          },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  const go = (href: string) => {
    setOpen(false);
    scrollTo(href);
  };

  return (
    <header className={`nav ${solid ? 'nav--solid' : ''}`} data-testid="navbar">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-6 md:px-10">
        <button
          type="button"
          onClick={() => go('#hero')}
          className="flex items-center gap-3"
          aria-label={t.nav.backToTop}
          data-testid="nav-brand"
        >
          <span id="nav-logo-slot" className="nav-logo-slot" aria-hidden="true">
            <img
              src="/brand/mgx-logo.png"
              alt=""
              className={`nav-logo ${solid ? 'nav-logo--in' : ''}`}
              data-testid="nav-logo"
            />
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          <nav aria-label="Primary" className="flex items-center gap-8" data-testid="nav-desktop">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                className="nav-link"
                aria-current={active === link.href ? 'true' : undefined}
                onClick={() => go(link.href)}
                data-testid={`nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <LangToggle />
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <LangToggle compact />
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-mute"
            aria-expanded={open}
            aria-controls="mobile-nav-panel"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            data-testid="mobile-menu-button"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="border-b border-line bg-surface md:hidden"
          data-testid="mobile-nav-panel"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {links.map((link) => (
              <button
                key={link.href}
                type="button"
                className="nav-link py-3 text-left"
                aria-current={active === link.href ? 'true' : undefined}
                onClick={() => go(link.href)}
                data-testid={`mobile-nav-link-${link.href.slice(1)}`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
