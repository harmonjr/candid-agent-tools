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
        <div className="border-t-2 border-border bg-white px-6 py-8">
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

        <div className="border-t-2 border-candid bg-highlight px-6 py-8">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            What It Actually Costs
          </span>
          <p className="mt-4 font-serif text-3xl font-light text-ink sm:text-4xl">
            {formatDollars(Math.round(result.trueMonthlyCost))}
          </p>
          <p className="mt-2 font-sans text-xs text-ink-muted">
            True monthly cost of ownership
          </p>
        </div>
      </div>

      <div className="mt-6 bg-white px-6 py-6 text-center">
        <p className="font-sans text-sm text-ink-muted">The true cost is</p>
        <p className={`mt-1 font-serif text-2xl font-light ${gapColor}`}>
          {formatPercent(result.costGapPercent)} more
        </p>
        <p className="mt-1 font-sans text-sm text-ink-muted">
          than the mortgage payment alone
          <span className="mx-2 text-border">|</span>
          <span className="font-semibold text-ink">
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
