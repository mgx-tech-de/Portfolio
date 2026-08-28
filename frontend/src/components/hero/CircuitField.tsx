const CYAN_PATHS = [
  'M-40 640 H280 L348 572 H620 L688 640 H900 L968 572 H1500',
  'M-40 220 H180 L248 288 H470 L538 220 H820 L888 288 H1120',
  'M120 900 V760 L188 692 V560',
  'M980 -40 V140 L1048 208 V360 L1116 428',
  'M-40 430 H120 L188 498 H340',
  'M1240 900 V720 L1308 652 V520 L1376 452 H1500',
];

const RED_PATHS = ['M700 900 V780 L768 712 V600 L836 532 H1010', 'M-40 60 H240 L308 128 H520'];

const NODES: ReadonlyArray<readonly [number, number]> = [
  [348, 572],
  [688, 640],
  [248, 288],
  [888, 288],
  [188, 692],
  [1048, 208],
  [768, 712],
  [308, 128],
];

interface CircuitFieldProps {
  testId?: string;
}

export function CircuitField({ testId }: CircuitFieldProps) {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      data-testid={testId}
    >
      {CYAN_PATHS.map((d) => (
        <path
          key={d}
          className="circuit-path"
          d={d}
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.1"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
        />
      ))}
      {RED_PATHS.map((d) => (
        <path
          key={d}
          className="circuit-path"
          d={d}
          fill="none"
          stroke="var(--accent-2)"
          strokeWidth="1"
          opacity="0.08"
          pathLength={1}
          strokeDasharray={1}
          strokeDashoffset={1}
        />
      ))}
      {NODES.map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3" fill="none" stroke="var(--accent)" strokeWidth="1" opacity="0.14" />
      ))}
    </svg>
  );
}
