'use client';

interface ScoreBarProps {
  score: number;
  zone: 'green' | 'amber' | 'red';
  title: string;
}

const ZONE_BG = {
  green: 'bg-zone-green',
  amber: 'bg-zone-amber',
  red: 'bg-zone-red',
};

export default function ScoreBar({ score, zone, title }: ScoreBarProps) {
  return (
    <div className="space-y-2">
      <div className="flex items-baseline justify-between">
        <span className="font-sans text-sm font-semibold text-ink">
          {title}
        </span>
        <span className="font-serif text-2xl font-light text-ink">
          {score}
        </span>
      </div>

      <div className="h-2 w-full bg-border">
        <div
          className={`h-full ${ZONE_BG[zone]} transition-all duration-700 ease-out`}
          style={{ width: `${score}%` }}
        />
      </div>

      <div className="flex justify-between font-sans text-[10px] uppercase tracking-[0.15em] text-ink-muted">
        <span>Over-extended</span>
        <span>Healthy</span>
      </div>
    </div>
  );
}
