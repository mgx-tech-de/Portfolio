import { useLayoutEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useScrollTo } from '../../lib/lenis';
import { gsap, ScrollTrigger } from '../../lib/gsap-setup';

const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
] as const;

interface NavbarProps {
  solid: boolean;
}

export function Navbar({ solid }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');
  const scrollTo = useScrollTo();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      NAV_LINKS.forEach(({ href }) => {
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
          aria-label="MGX-Tech — back to top"
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

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex" data-testid="nav-desktop">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              type="button"
              className="nav-link"
              aria-current={active === link.href ? 'true' : undefined}
              onClick={() => go(link.href)}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center p-2 text-mute md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          data-testid="mobile-menu-button"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav-panel"
          aria-label="Mobile"
          className="border-b border-line bg-surface md:hidden"
          data-testid="mobile-nav-panel"
        >
          <div className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                type="button"
                className="nav-link py-3 text-left"
                aria-current={active === link.href ? 'true' : undefined}
                onClick={() => go(link.href)}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
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
