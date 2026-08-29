import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { SkipLink } from './layout/SkipLink';
import { Footer } from './layout/Footer';

export function LegalLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SkipLink />
      <header className="border-b border-line bg-surface">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            className="flex items-center gap-3"
            aria-label="MGX-Tech — back to home"
            data-testid="legal-logo-link"
          >
            <img src="/brand/mgx-logo.png" alt="" className="h-7 w-7 object-contain" />
            <span className="font-mono text-xs tracking-[0.25em] text-mute">MGX-TECH</span>
          </Link>
          <Link to="/" className="nav-link" data-testid="legal-back-link">
            ← Back to site
          </Link>
        </div>
      </header>
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
