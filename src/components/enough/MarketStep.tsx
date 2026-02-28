'use client';

import type { EnoughInputs } from '@/lib/enough-calculator';
import { formatCurrency } from '@/lib/enough-calculator';
import CurrencyInput from './CurrencyInput';
import PercentInput from './PercentInput';
import StepHeader from './StepHeader';

interface MarketStepProps {
  inputs: EnoughInputs;
  onUpdate: (field: keyof EnoughInputs, value: number) => void;
}

export default function MarketStep({
  inputs,
  onUpdate,
}: MarketStepProps) {
  const grossPerDeal =
    inputs.averageSalePrice * (inputs.commissionPercent / 100);
  const afterSplit =
    grossPerDeal * (1 - inputs.brokerSplitPercent / 100);
  const netPerDeal = afterSplit - inputs.transactionFee;
  const showPreview =
    inputs.averageSalePrice > 0 && inputs.commissionPercent > 0;

  return (
    <div>
      <StepHeader
        label="Step 4 of 4"
        title="Your Market"
        description="What does a typical transaction look like in your market?"
      />
      <div className="mt-8 space-y-6">
        <CurrencyInput
          id="averageSalePrice"
          label="Average sale price in your market"
          value={inputs.averageSalePrice}
          onChange={(v) => onUpdate('averageSalePrice', v)}
          helper="Look at your last 5 closings, or your market's median"
        />
        <PercentInput
          id="commissionPercent"
          label="Your commission rate"
          value={inputs.commissionPercent}
          onChange={(v) => onUpdate('commissionPercent', v)}
          helper="Typically 2.5% - 3%"
          max={10}
          step={0.25}
        />
      </div>

      {showPreview && (
        <div className="mt-8 border-t-2 border-candid bg-highlight px-6 py-6">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            Per Transaction Preview
          </span>
          <div className="mt-4 space-y-3">
            <PreviewRow
              label="Gross commission"
              value={formatCurrency(grossPerDeal)}
            />
            <PreviewRow
              label="After broker split"
              value={formatCurrency(afterSplit)}
            />
            <div className="border-t border-border pt-3">
              <PreviewRow
                label="Net per transaction"
                value={formatCurrency(netPerDeal)}
                bold
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

interface PreviewRowProps {
  label: string;
  value: string;
  bold?: boolean;
}

function PreviewRow({ label, value, bold }: PreviewRowProps) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-sans text-sm text-ink-muted">{label}</span>
      <span
        className={`font-sans text-base ${bold ? 'font-semibold text-ink' : 'text-ink'}`}
      >
        {value}
      </span>
    </div>
  );
}
