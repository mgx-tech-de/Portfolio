import { LegalLayout } from '../components/LegalLayout';
import { site } from '../data/site';

export default function Datenschutz() {
  return (
    <LegalLayout>
      <article className="mx-auto max-w-3xl px-6 py-20 md:py-28" data-testid="datenschutz-page">
        <p className="font-mono text-xs tracking-[0.25em] text-cyan">{'// PRIVACY'}</p>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight md:text-5xl">
          Datenschutzerklärung
        </h1>
        <div className="diagonal-hairline mt-8 w-28" aria-hidden="true" />
        <div className="legal-body">
          <h2>1. Verantwortlicher</h2>
          <p>
            MGX-Tech — {site.owner}
            <br />
            Alexanderplatz 1, 10178 Berlin, Deutschland
            <br />
            E-Mail: {site.email} · Telefon: {site.phoneDisplay}
          </p>
          <h2>2. Hosting und Server-Logdateien</h2>
          <p>
            Diese Website wird bei einem Hosting-Dienstleister betrieben. Beim Aufruf der Seiten
            werden technisch bedingt Verbindungsdaten (z.&nbsp;B. IP-Adresse, Datum und Uhrzeit,
            abgerufene Datei) verarbeitet. Diese Daten dienen ausschließlich dem sicheren Betrieb
            der Website (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO).
          </p>
          <h2>3. Kontaktaufnahme</h2>
          <p>
            Bei Kontaktaufnahme per E-Mail oder Telefon werden die übermittelten Daten zur
            Bearbeitung der Anfrage verarbeitet (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b DSGVO). Die
            Schaltflächen für Anrufe verlinken auf WhatsApp; beim Anklicken verlassen Sie diese
            Website und es gelten die Datenschutzbestimmungen der WhatsApp Ireland Ltd.
          </p>
          <h2>4. KI-Chat-Assistent</h2>
          <p>
            Diese Website bietet einen KI-Chat-Assistenten an. Die eingegebenen Nachrichten werden
            zusammen mit einer pseudonymen Sitzungskennung gespeichert und zur Beantwortung über
            eine Schnittstelle der OpenAI API verarbeitet. Zweck ist die Beantwortung von Fragen zu
            den angebotenen Leistungen (Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;b und f DSGVO).
            Freiwillig im Chat hinterlassene Kontaktdaten (E-Mail-Adresse, Projektidee) werden
            ausschließlich zur Kontaktaufnahme verwendet. Auf Anfrage an {site.email} werden
            gespeicherte Chatverläufe und Kontaktdaten gelöscht.
          </p>
          <h2>5. Lokale Speicherung im Browser</h2>
          <p>
            Die Website speichert eine zufällige Sitzungskennung im lokalen Speicher (localStorage)
            Ihres Browsers, damit der Chatverlauf beim erneuten Besuch fortgesetzt werden kann. Es
            werden keine Cookies gesetzt und kein Tracking- oder Analyse-Werkzeug eingesetzt.
          </p>
          <h2>6. Schriftarten</h2>
          <p>
            Die verwendeten Schriftarten sind lokal eingebunden. Es findet keine Verbindung zu
            Servern von Schriftarten-Anbietern (z.&nbsp;B. Google Fonts) statt.
          </p>
          <h2>7. Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
            Verarbeitung Ihrer personenbezogenen Daten sowie das Recht auf Datenübertragbarkeit und
            Widerspruch. Wenden Sie sich dazu an {site.email}.
          </p>
          <h2>8. Beschwerderecht</h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren,
            insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des
            Orts des mutmaßlichen Verstoßes.
          </p>
        </div>
      </article>
    </LegalLayout>
  );
}
