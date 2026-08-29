import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap-setup';
import { experience } from '../../data/experience';
import { education } from '../../data/education';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

export function Experience() {
  const root = useRef<HTMLElement>(null);
  const progress = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          progress.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: '.tl-list',
              start: 'top 70%',
              end: 'bottom 55%',
              scrub: true,
            },
          },
        );
      });
      mm.add('(prefers-reduced-motion: reduce)', () => {
        gsap.set(progress.current, { scaleY: 1 });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="experience"
      aria-labelledby="experience-title"
      data-testid="experience-section"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader
            index="03"
            kicker={t.sections.experience.kicker}
            title={t.sections.experience.title}
            titleId="experience-title"
          />
        </Reveal>
        <div className="tl-list relative mt-16">
          <div className="tl-spine" aria-hidden="true" />
          <div ref={progress} className="tl-progress" aria-hidden="true" />
          <Reveal className="space-y-16 pl-12">
            {experience.map((entry) => (
              <article key={entry.id} className="relative" data-testid={`experience-${entry.id}`}>
                <span className="tl-dot" aria-hidden="true" />
                <p className="font-mono text-xs tracking-[0.2em] text-cyan">{entry.period}</p>
                <h3 className="mt-3 font-display text-xl font-medium md:text-2xl">
                  {entry.role[lang]}
                </h3>
                <p className="mt-1 text-sm text-mute">
                  {entry.company} · {entry.location[lang]}
                </p>
                <ul className="mt-4 max-w-2xl space-y-2 text-sm text-mute">
                  {entry.bullets[lang].map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-[7px] h-px w-4 shrink-0 bg-line" aria-hidden="true" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </Reveal>
        </div>
        <Reveal className="mt-20">
          <p className="font-mono text-xs tracking-[0.25em] text-cyan" data-testid="education-kicker">
            {`// ${t.sections.experience.education}`}
          </p>
          <ul className="mt-6 grid gap-6 md:grid-cols-3">
            {education.map((entry) => (
              <li
                key={entry.id}
                className="border border-line bg-surface p-5"
                data-testid={`education-${entry.id}`}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] text-mute">{entry.period}</p>
                <p className="mt-3 text-sm font-medium text-ink">{entry.title[lang]}</p>
                <p className="mt-1 text-xs text-mute">
                  {entry.school} · {entry.location[lang]}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
