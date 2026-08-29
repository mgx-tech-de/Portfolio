import { services } from '../../data/services';
import { useLanguage } from '../../i18n/LanguageContext';
import { Reveal } from '../Reveal';
import { SectionHeader } from '../SectionHeader';

export function Services() {
  const { lang, t } = useLanguage();

  return (
    <section id="services" aria-labelledby="services-title" data-testid="services-section">
      <Reveal className="mx-auto max-w-6xl px-6 py-24 md:px-10 md:py-36">
        <SectionHeader
          index="01"
          kicker={t.sections.services.kicker}
          title={t.sections.services.title}
          titleId="services-title"
        />
        {services.map((service) => (
          <article
            key={service.id}
            className="service-row mt-0 first-of-type:mt-16"
            data-testid={`service-${service.id}`}
          >
            <span className="font-mono text-sm text-cyan">/{service.index}</span>
            <h3 className="service-title font-display text-2xl font-medium md:text-4xl">
              {service.title[lang]}
            </h3>
            <div>
              <p className="max-w-md text-sm text-mute md:text-base">{service.description[lang]}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${service.title[lang]} technologies`}>
                {service.tags[lang].map((tag) => (
                  <li key={tag} className="chip">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
