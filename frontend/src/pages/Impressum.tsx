import { LegalLayout } from '../components/LegalLayout';
import { site } from '../data/site';

export default function Impressum() {
  return (
    <LegalLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28" data-testid="impressum-page">
        <p className="font-mono text-xs tracking-[0.25em] text-cyan">{'// LEGAL'}</p>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Impressum
        </h1>
        <div className="diagonal-hairline mt-8 w-28" aria-hidden="true" />
        <div className="legal-body">
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            MGX-Tech — {site.owner} (Freiberufler)
            <br />
            <span data-testid="impressum-address">Alexanderplatz 1</span>
            <br />
            10178 Berlin, Deutschland
          </p>
          <h2>Kontakt</h2>
          <p>
            Telefon: {site.phoneDisplay}
            <br />
            E-Mail: {site.email}
          </p>
          <h2>Steuerliche Angaben</h2>
          <p>
            Steuernummer: 18/207/00396
            <br />
            Freiberufler gemäß § 18 EStG.
          </p>
          <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
          <p>
            {site.owner}, Anschrift wie oben.
          </p>
          <h2>Haftung für Inhalte</h2>
          <p>
            Die Inhalte dieser Seiten wurden mit großer Sorgfalt erstellt. Für die Richtigkeit,
            Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden.
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten
            nach den allgemeinen Gesetzen verantwortlich.
          </p>
          <h2>Haftung für Links</h2>
          <p>
            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte kein
            Einfluss besteht. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
            Anbieter oder Betreiber der Seiten verantwortlich. Zum Zeitpunkt der Verlinkung waren
            keine Rechtsverstöße erkennbar.
          </p>
          <h2>Urheberrecht</h2>
          <p>
            Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen
            Urheberrecht. Jede Verwertung außerhalb der Grenzen des Urheberrechts bedarf der
            vorherigen schriftlichen Zustimmung des jeweiligen Autors.
          </p>
        </div>
      </article>
    </LegalLayout>
  );
}
