'use client';

import {
  formatDollars,
  formatPercent,
  getMarginMessage,
  type MarginZone,
} from '@/lib/true-cost-calculator';

interface MarginResultProps {
  zone: MarginZone;
  ratio: number;
  remaining: number;
  trueMonthlyCost: number;
  monthlyIncome: number;
}

const ZONE_STYLES: Record<MarginZone, string> = {
  green: 'border-l-2 border-zone-green bg-zone-green/10 text-zone-green',
  amber: 'border-l-2 border-zone-amber bg-zone-amber/10 text-zone-amber',
  red: 'border-l-2 border-zone-red bg-zone-red/10 text-zone-red',
};

const ZONE_LABELS: Record<MarginZone, string> = {
  green: 'Healthy Margin',
  amber: 'Tight but Manageable',
  red: 'Overextended',
};

export default function MarginResult({
  zone,
  ratio,
  remaining,
  trueMonthlyCost,
  monthlyIncome,
}: MarginResultProps) {
  return (
    <div className="mt-6 space-y-6">
      <div className="bg-white px-6 py-8 text-center">
        <p className="font-sans text-sm text-ink-muted">
          After this payment, what is left?
        </p>
        <p className="mt-2 font-serif text-4xl font-light text-ink sm:text-5xl">
          {formatDollars(Math.round(remaining))}
        </p>
        <p className="mt-2 font-sans text-xs text-ink-muted">
          per month for everything else in your life
        </p>
      </div>

      <div className="bg-white px-6 py-6">
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm text-ink-muted">
            Housing-to-income ratio
          </span>
          <span className="font-sans text-lg font-semibold text-ink">
            {formatPercent(ratio)}
          </span>
        </div>
        <RatioBar ratio={ratio} />
        <div className="mt-2 flex justify-between font-sans text-[10px] text-ink-muted">
          <span>0%</span>
          <span>28%</span>
          <span>36%</span>
          <span>50%+</span>
        </div>
      </div>

      <div className={`px-6 py-6 ${ZONE_STYLES[zone]}`}>
        <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em]">
          {ZONE_LABELS[zone]}
        </p>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink">
          {getMarginMessage(zone)}
        </p>
      </div>

      <IncomeComparison
        trueMonthlyCost={trueMonthlyCost}
        monthlyIncome={monthlyIncome}
      />
    </div>
  );
}

function RatioBar({ ratio }: { ratio: number }) {
  const clampedWidth = Math.min(ratio, 50);
  const barPercent = (clampedWidth / 50) * 100;

  const barColor =
    ratio < 28
      ? 'bg-zone-green'
      : ratio <= 36
        ? 'bg-zone-amber'
        : 'bg-zone-red';

  return (
    <div className="relative mt-3 h-3 w-full bg-cream-alt">
      <div
        className={`absolute left-0 top-0 h-full transition-all duration-500 ease-out ${barColor}`}
        style={{ width: `${barPercent}%` }}
      />
      <div
        className="absolute top-0 h-full w-px bg-zone-green/50"
        style={{ left: '56%' }}
      />
      <div
        className="absolute top-0 h-full w-px bg-zone-red/50"
        style={{ left: '72%' }}
      />
    </div>
  );
}

function IncomeComparison({
  trueMonthlyCost,
  monthlyIncome,
}: {
  trueMonthlyCost: number;
  monthlyIncome: number;
}) {
  const bankApproved = monthlyIncome * 0.43;
  const marginTarget = monthlyIncome * 0.28;

  return (
    <div className="bg-white px-6 py-6">
      <div className="flex items-center justify-between border-b border-border pb-3">
        <span className="font-sans text-sm text-ink-muted">
          What the bank says you can afford
        </span>
        <span className="font-sans text-sm font-semibold text-ink-muted">
          {formatDollars(Math.round(bankApproved))}/mo
        </span>
      </div>
      <div className="flex items-center justify-between border-b border-border py-3">
        <span className="font-sans text-sm text-ink-muted">
          What leaves you margin (&lt;28%)
        </span>
        <span className="font-sans text-sm font-semibold text-zone-green">
          {formatDollars(Math.round(marginTarget))}/mo
        </span>
      </div>
      <div className="flex items-center justify-between pt-3">
        <span className="font-sans text-sm font-semibold text-ink">
          This home&apos;s true cost
        </span>
        <span className="font-sans text-sm font-semibold text-ink">
          {formatDollars(Math.round(trueMonthlyCost))}/mo
        </span>
      </div>
    </div>
  );
}
