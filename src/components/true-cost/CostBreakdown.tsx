'use client';

import { formatDollars, type TrueCostResult } from '@/lib/true-cost-calculator';

interface CostBreakdownProps {
  result: TrueCostResult;
}

interface LineItem {
  label: string;
  monthly: number;
  highlight?: boolean;
}

function buildLineItems(result: TrueCostResult): LineItem[] {
  const items: LineItem[] = [
    { label: 'Principal & Interest', monthly: result.monthlyPrincipalInterest },
    { label: 'Property Taxes', monthly: result.monthlyPropertyTax },
    { label: 'Homeowner\'s Insurance', monthly: result.monthlyInsurance },
  ];

  if (result.monthlyPMI > 0) {
    items.push({ label: 'Private Mortgage Insurance (PMI)', monthly: result.monthlyPMI });
  }
  if (result.monthlyHOA > 0) {
    items.push({ label: 'HOA Fees', monthly: result.monthlyHOA });
  }

  items.push(
    { label: 'Maintenance Reserve', monthly: result.monthlyMaintenance },
    { label: 'Utilities', monthly: result.monthlyUtilities },
  );

  if (result.monthlyCommuteChange !== 0) {
    items.push({
      label: result.monthlyCommuteChange > 0 ? 'Added Commute Cost' : 'Commute Savings',
      monthly: result.monthlyCommuteChange,
    });
  }

  return items;
}

export default function CostBreakdown({ result }: CostBreakdownProps) {
  const items = buildLineItems(result);

  return (
    <div className="border-t-2 border-candid bg-white px-6 py-8">
      <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Itemized Breakdown
      </h3>

      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="font-sans text-sm text-ink-muted">{item.label}</span>
            <span className="font-sans text-sm font-semibold text-ink">
              {formatDollars(Math.round(item.monthly))}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t border-border pt-4">
        <div className="flex items-center justify-between">
          <span className="font-sans text-sm font-semibold text-ink">
            True Monthly Cost
          </span>
          <span className="font-serif text-xl font-light text-ink">
            {formatDollars(Math.round(result.trueMonthlyCost))}
          </span>
        </div>
        <div className="mt-2 flex items-center justify-between">
          <span className="font-sans text-sm text-ink-muted">
            Annual Total
          </span>
          <span className="font-sans text-sm font-semibold text-ink-muted">
            {formatDollars(Math.round(result.annualTotalCost))}
          </span>
        </div>
      </div>
    </div>
  );
}
