import { useLayoutEffect, useRef } from 'react';
import { gsap } from '../../lib/gsap-setup';
import { projects } from '../../data/projects';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

export function Projects() {
  const root = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.project-tile-inner', root.current).forEach((el) => {
          gsap.fromTo(
            el,
            { yPercent: -6 },
            {
              yPercent: 6,
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('.project-card') as HTMLElement,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        });
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      id="projects"
      aria-labelledby="projects-title"
      data-testid="projects-section"
      className="relative border-t border-line bg-surface"
    >
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader index="02" kicker="Projects" title="Selected work" titleId="projects-title" />
        </Reveal>
        <Reveal className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.id} className="project-card" data-testid={`project-${project.id}`}>
              <div className="project-tile" aria-hidden="true">
                <div className="project-tile-inner">
                  <span className="tile-initials">{project.monogram}</span>
                  <span className="tile-slash" />
                </div>
                <span className="tile-year font-mono">{project.year}</span>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs text-cyan">/{project.index}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-mute">
                    {project.category}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-xl font-medium md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-mute">{project.description}</p>
                <ul
                  className="mt-5 flex flex-wrap gap-2"
                  aria-label={`${project.title} technologies`}
                >
                  {project.tags.map((tag) => (
                    <li key={tag} className="chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
