import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { gsap } from '../../lib/gsap-setup';
import { projects, type Project } from '../../data/projects';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

function ProjectTile({ project }: { project: Project }) {
  const images = project.images ?? [];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = setInterval(() => setIdx((i) => (i + 1) % images.length), 3600);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="project-tile">
      <div className="project-tile-inner">
        {images.length > 0 ? (
          images.map((src, i) => (
            <img
              key={src}
              src={src}
              alt={i === 0 ? `${project.title} — screenshot` : ''}
              aria-hidden={i !== 0}
              loading="lazy"
              className="tile-img"
              style={{ opacity: i === idx ? 1 : 0 }}
            />
          ))
        ) : (
          <span className="tile-initials" aria-hidden="true">
            {project.monogram}
          </span>
        )}
        <span className="tile-slash" aria-hidden="true" />
      </div>
      {images.length > 1 && (
        <div className="tile-dots" aria-hidden="true">
          {images.map((_, i) => (
            <span key={i} className={i === idx ? 'on' : ''} />
          ))}
        </div>
      )}
      <span className="tile-year font-mono">{project.year}</span>
    </div>
  );
}

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
              <ProjectTile project={project} />
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
