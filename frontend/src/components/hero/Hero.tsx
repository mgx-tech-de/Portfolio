import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap-setup';
import { useScrollTo } from '../../lib/lenis';
import { CircuitField } from './CircuitField';

const HEADLINE_LINES = ['Software.', 'Web.', 'Apps.'];

interface HeroProps {
  onPinProgress?: (pastHero: boolean) => void;
}

export function Hero({ onPinProgress }: HeroProps) {
  const root = useRef<HTMLElement>(null);
  const logoWrap = useRef<HTMLDivElement>(null);
  const logo = useRef<HTMLImageElement>(null);
  const wipe = useRef<HTMLDivElement>(null);
  const scrollTo = useScrollTo();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      const lines = gsap.utils.toArray<HTMLElement>('.hero-line-inner', root.current);
      const fadeIns = gsap.utils.toArray<HTMLElement>('.hero-fade', root.current);

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
        intro
          .fromTo(
            logo.current,
            { autoAlpha: 0, filter: 'blur(20px)', scale: 0.94 },
            { autoAlpha: 1, filter: 'blur(0px)', scale: 1, duration: 1.2 },
          )
          .fromTo(
            lines,
            { yPercent: 118, filter: 'blur(8px)' },
            { yPercent: 0, filter: 'blur(0px)', duration: 0.95, stagger: 0.09 },
            '-=0.6',
          )
          .fromTo(
            fadeIns,
            { autoAlpha: 0, y: 20 },
            { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.09 },
            '-=0.55',
          );

        const tl = gsap.timeline({
          defaults: { ease: 'none' },
          scrollTrigger: {
            trigger: root.current,
            start: 'top top',
            end: '+=160%',
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => onPinProgress?.(self.progress > 0.86),
          },
        });

        tl.fromTo(
          '.circuit-path',
          { strokeDashoffset: 1 },
          { strokeDashoffset: 0, duration: 0.55, stagger: 0.035 },
          0,
        );
        tl.to(
          logo.current,
          {
            x: () => {
              const slot = document.getElementById('nav-logo-slot');
              if (!slot || !logoWrap.current) return 0;
              const s = slot.getBoundingClientRect();
              const l = logoWrap.current.getBoundingClientRect();
              return s.left + s.width / 2 - (l.left + l.width / 2);
            },
            y: () => {
              const slot = document.getElementById('nav-logo-slot');
              if (!slot || !logoWrap.current) return 0;
              const s = slot.getBoundingClientRect();
              const l = logoWrap.current.getBoundingClientRect();
              return s.top + s.height / 2 - (l.top + l.height / 2);
            },
            scale: () => {
              if (!logoWrap.current) return 0.1;
              return 28 / logoWrap.current.getBoundingClientRect().height;
            },
            duration: 0.72,
            ease: 'power1.inOut',
          },
          0.08,
        );
        tl.to('.hero-copy', { autoAlpha: 0, y: -56, duration: 0.4, ease: 'power1.in' }, 0.14);
        tl.to('.hero-scrollcue', { autoAlpha: 0, duration: 0.12 }, 0.05);
        tl.fromTo(
          wipe.current,
          { xPercent: -130 },
          { xPercent: 130, duration: 0.3, ease: 'power2.in' },
          0.72,
        );
        tl.to(logo.current, { autoAlpha: 0, duration: 0.08 }, 0.94);
        return () => {};
      });

      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set('.circuit-path', { strokeDashoffset: 0 });
        gsap.fromTo(
          [logo.current, ...lines, ...fadeIns],
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.6, stagger: 0.06, ease: 'power1.out' },
        );
        onPinProgress?.(true);
        return () => onPinProgress?.(false);
      });
    }, root);
    return () => ctx.revert();
  }, [onPinProgress]);

  return (
    <section
      ref={root}
      id="hero"
      aria-labelledby="hero-heading"
      className="relative flex min-h-screen items-center overflow-hidden"
      data-testid="hero"
    >
      <CircuitField testId="circuit-field-hero" />
      <div className="hero-grid mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-[1.25fr_1fr] md:px-10">
        <div className="hero-copy order-2 md:order-1">
          <p
            className="hero-fade font-mono text-xs tracking-[0.25em] text-cyan"
            data-testid="hero-kicker"
          >
            {'// FREELANCE SOFTWARE & AI ENGINEERING — BERLIN'}
          </p>
          <h1
            id="hero-heading"
            className="mt-6 font-display text-[clamp(3.1rem,8.5vw,6.75rem)] font-bold leading-[0.96] tracking-tight"
            data-testid="hero-headline"
          >
            {HEADLINE_LINES.map((line) => (
              <span key={line} className="hero-line">
                <span className="hero-line-inner block">{line}</span>
              </span>
            ))}
            <span className="hero-line">
              <span className="hero-line-inner text-split block">AI.</span>
            </span>
          </h1>
          <p className="hero-fade mt-8 max-w-md text-base text-mute md:text-lg" data-testid="hero-sub">
            Freiberuflicher Software &amp; AI Engineer in Berlin — building web apps, mobile apps
            and AI systems since 2018.
          </p>
          <div className="hero-fade mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              className="btn-primary"
              onClick={() => scrollTo('#contact')}
              data-testid="hero-cta-book"
            >
              <span>Book a free 20-min call</span>
            </button>
            <button
              type="button"
              className="btn-ghost"
              onClick={() => scrollTo('#projects')}
              data-testid="hero-cta-projects"
            >
              <span>See projects</span>
            </button>
          </div>
        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <div ref={logoWrap} className="hero-logo-wrap">
            <img
              ref={logo}
              src="/brand/mgx-logo.png"
              alt="MGX-Tech logo"
              className="hero-logo w-[min(50vw,300px)] md:w-[min(32vw,380px)]"
              data-testid="hero-logo"
            />
          </div>
        </div>
      </div>
      <div className="hero-scrollcue hero-fade" aria-hidden="true" data-testid="hero-scrollcue">
        scroll
      </div>
      <div ref={wipe} className="hero-wipe" aria-hidden="true" data-testid="hero-wipe" />
    </section>
  );
}
