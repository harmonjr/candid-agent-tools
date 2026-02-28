'use client';

import { formatDollars } from '@/lib/true-cost-calculator';

interface RunningSubtotalProps {
  amount: number;
  label?: string;
}

export default function RunningSubtotal({
  amount,
  label = 'Monthly so far',
}: RunningSubtotalProps) {
  if (amount <= 0) return null;

  return (
    <div className="mt-8 border-t border-border pt-6">
      <div className="flex items-baseline justify-between">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          {label}
        </span>
        <span className="font-serif text-2xl font-light text-ink">
          {formatDollars(Math.round(amount))}
        </span>
      </div>
    </div>
  );
}
