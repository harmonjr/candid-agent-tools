'use client';

interface ScoreDisplayProps {
  score: number;
  zone: 'green' | 'amber' | 'red';
  label: string;
  size?: 'large' | 'small';
}

const ZONE_COLORS = {
  green: { text: 'text-zone-green', border: 'border-zone-green', bg: 'bg-zone-green' },
  amber: { text: 'text-zone-amber', border: 'border-zone-amber', bg: 'bg-zone-amber' },
  red: { text: 'text-zone-red', border: 'border-zone-red', bg: 'bg-zone-red' },
};

const ZONE_LABELS = {
  green: 'Healthy Margin',
  amber: 'Approaching Limits',
  red: 'Over-Extended',
};

export default function ScoreDisplay({
  score,
  zone,
  label,
  size = 'large',
}: ScoreDisplayProps) {
  const colors = ZONE_COLORS[zone];
  const isLarge = size === 'large';

  return (
    <div className="text-center">
      <div
        className={`
          inline-flex flex-col items-center justify-center
          border-2 ${colors.border} rounded-none
          ${isLarge ? 'h-40 w-40 sm:h-48 sm:w-48' : 'h-28 w-28'}
        `}
      >
        <span
          className={`
            font-serif font-light ${colors.text}
            ${isLarge ? 'text-6xl sm:text-7xl' : 'text-4xl'}
          `}
        >
          {score}
        </span>
        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
          / 100
        </span>
      </div>

      <div className="mt-4">
        <span
          className={`
            inline-block rounded-none px-3 py-1
            font-sans text-xs font-semibold uppercase tracking-[0.15em]
            ${colors.bg} text-white
          `}
        >
          {ZONE_LABELS[zone]}
        </span>
      </div>

      <p
        className={`
          mt-2 font-sans text-ink-muted
          ${isLarge ? 'text-sm' : 'text-xs'}
        `}
      >
        {label}
      </p>
    </div>
  );
}
