import { marqueeSkills, skills } from '../../data/skills';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

export function Skills() {
  const track = [...marqueeSkills, ...marqueeSkills];
  return (
    <section
      id="skills"
      aria-labelledby="skills-title"
      data-testid="skills-section"
      className="relative border-t border-line bg-surface"
    >
      <div className="marquee mt-0" aria-hidden="true" data-testid="skills-marquee">
        <div className="marquee-track">
          {track.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-12">
              <span className={`marquee-item ${i % 2 === 1 ? 'marquee-item--outline' : ''}`}>
                {item}
              </span>
              <span className="marquee-slash" />
            </span>
          ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <Reveal>
          <SectionHeader index="04" kicker="Skills" title="The toolbox" titleId="skills-title" />
        </Reveal>
        <Reveal className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.id} data-testid={`skills-${group.id}`}>
              <h3 className="font-mono text-xs tracking-[0.25em] text-cyan">
                {`// ${group.label.toUpperCase()}`}
              </h3>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={group.label}>
                {group.items.map((item) => (
                  <li key={item} className="chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
