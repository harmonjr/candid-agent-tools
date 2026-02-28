'use client';

import {
  getMarginZone,
  type TrueCostResult,
} from '@/lib/true-cost-calculator';
import MarginResult from './MarginResult';

interface MarginCheckProps {
  result: TrueCostResult;
  monthlyIncome: number;
  onIncomeChange: (value: number) => void;
  onStartOver: () => void;
}

export default function MarginCheck({
  result,
  monthlyIncome,
  onIncomeChange,
  onStartOver,
}: MarginCheckProps) {
  const hasIncome = monthlyIncome > 0;
  const ratio = hasIncome
    ? (result.trueMonthlyCost / monthlyIncome) * 100
    : 0;
  const remaining = hasIncome
    ? monthlyIncome - result.trueMonthlyCost
    : 0;
  const zone = hasIncome ? getMarginZone(ratio) : null;

  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Step 5 of 5
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          The Margin Check
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          What the bank says you can afford and what leaves you margin
          are two different numbers. This is the one that matters.
        </p>
      </div>

      <div className="border-t-2 border-candid bg-white px-6 py-8">
        <label
          htmlFor="monthly-income"
          className="font-sans text-sm font-semibold text-ink"
        >
          Monthly Household Income (before taxes)
        </label>
        <p className="mt-1 font-sans text-xs text-ink-muted">
          Combined gross monthly income for everyone on the mortgage
        </p>
        <div className="relative mt-3">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-sm text-ink-muted">
            $
          </span>
          <input
            id="monthly-income"
            type="number"
            inputMode="numeric"
            min={0}
            value={monthlyIncome || ''}
            onChange={(e) => onIncomeChange(Number(e.target.value))}
            placeholder="8,500"
            className="w-full border border-border bg-white py-3 pl-8 pr-4 font-sans text-base text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          />
        </div>
      </div>

      {hasIncome && zone && (
        <MarginResult
          zone={zone}
          ratio={ratio}
          remaining={remaining}
          trueMonthlyCost={result.trueMonthlyCost}
          monthlyIncome={monthlyIncome}
        />
      )}

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => window.print()}
          className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Print / Save Results
        </button>
        <button
          type="button"
          onClick={onStartOver}
          className="bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Start Over
        </button>
      </div>
    </div>
  );
}
