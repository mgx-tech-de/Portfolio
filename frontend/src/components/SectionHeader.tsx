interface SectionHeaderProps {
  index: string;
  kicker: string;
  title: string;
  titleId: string;
}

export function SectionHeader({ index, kicker, title, titleId }: SectionHeaderProps) {
  return (
    <div>
      <p
        className="font-mono text-xs tracking-[0.25em] text-cyan"
        data-testid={`${titleId}-kicker`}
      >
        {`// ${index} — ${kicker.toUpperCase()}`}
      </p>
      <h2
        id={titleId}
        className="mt-5 font-display text-3xl font-bold tracking-tight md:text-5xl"
      >
        {title}
      </h2>
      <div className="diagonal-hairline mt-8 w-28" aria-hidden="true" />
    </div>
  );
}
