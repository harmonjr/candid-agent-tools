'use client';

import { formatDollars, formatPercent, type TrueCostResult } from '@/lib/true-cost-calculator';
import CostBreakdown from './CostBreakdown';

interface CostComparisonProps {
  result: TrueCostResult;
}

function getGapIntensity(percent: number): string {
  if (percent > 60) return 'text-zone-red';
  if (percent > 30) return 'text-zone-amber';
  return 'text-zone-green';
}

export default function CostComparison({ result }: CostComparisonProps) {
  const gapColor = getGapIntensity(result.costGapPercent);

  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Step 4 of 5
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          The Full Picture
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          This is the moment most calculators skip. The gap between what
          they show and what you actually pay.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="border-t-2 border-border bg-cream-alt px-6 py-8">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-muted">
            What Most Calculators Show
          </span>
          <p className="mt-4 font-serif text-3xl font-light text-ink-muted sm:text-4xl">
            {formatDollars(Math.round(result.monthlyPrincipalInterest))}
          </p>
          <p className="mt-2 font-sans text-xs text-ink-muted">
            Monthly principal & interest only
          </p>
        </div>

        <div className="border-t-2 border-candid bg-ink px-6 py-8">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            What It Actually Costs
          </span>
          <p className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
            {formatDollars(Math.round(result.trueMonthlyCost))}
          </p>
          <p className="mt-2 font-sans text-xs text-cream/60">
            True monthly cost of ownership
          </p>
        </div>
      </div>

      <div className="mt-6 bg-ink px-6 py-8 text-center">
        <p className="font-sans text-sm text-cream/60">The true cost is</p>
        <p className={`mt-2 font-serif text-4xl font-light sm:text-5xl ${gapColor}`}>
          {formatPercent(result.costGapPercent)} more
        </p>
        <p className="mt-3 font-sans text-sm text-cream/60">
          than the mortgage payment alone
          <span className="mx-3 text-cream/20">|</span>
          <span className="font-semibold text-candid">
            +{formatDollars(Math.round(result.costGapDollars))}/mo
          </span>
        </p>
      </div>

      <div className="mt-6">
        <CostBreakdown result={result} />
      </div>
    </div>
  );
}
