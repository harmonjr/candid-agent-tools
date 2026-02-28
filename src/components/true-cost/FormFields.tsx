'use client';

import { formatDollars } from '@/lib/true-cost-calculator';

interface CurrencyFieldProps {
  id: string;
  label: string;
  help?: string;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
  annualToMonthly?: boolean;
  allowNegative?: boolean;
}

export function CurrencyField({
  id,
  label,
  help,
  value,
  placeholder,
  onChange,
  annualToMonthly,
  allowNegative,
}: CurrencyFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-sans text-sm font-semibold text-ink">
        {label}
      </label>
      {help && (
        <p className="mt-1 font-sans text-xs text-ink-muted">{help}</p>
      )}
      <div className="relative mt-2">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 font-sans text-sm text-ink-muted">
          $
        </span>
        <input
          id={id}
          type="number"
          inputMode="numeric"
          min={allowNegative ? undefined : 0}
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          className="w-full border border-border bg-white py-3 pl-8 pr-4 font-sans text-base text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        />
      </div>
      {annualToMonthly && value > 0 && (
        <p className="mt-1 font-sans text-xs text-ink-muted">
          = {formatDollars(Math.round(value / 12))}/month
        </p>
      )}
    </div>
  );
}

interface PercentFieldProps {
  id: string;
  label: string;
  help?: string;
  value: number;
  placeholder?: string;
  onChange: (value: number) => void;
  previewDollars?: number;
}

export function PercentField({
  id,
  label,
  help,
  value,
  placeholder,
  onChange,
  previewDollars,
}: PercentFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="font-sans text-sm font-semibold text-ink">
        {label}
      </label>
      {help && (
        <p className="mt-1 font-sans text-xs text-ink-muted">{help}</p>
      )}
      <div className="relative mt-2">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          min={0}
          step={0.1}
          value={value || ''}
          onChange={(e) => onChange(Number(e.target.value))}
          placeholder={placeholder}
          className="w-full border border-border bg-white px-4 py-3 pr-10 font-sans text-base text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        />
        <span className="absolute right-4 top-1/2 -translate-y-1/2 font-sans text-sm text-ink-muted">
          %
        </span>
      </div>
      {previewDollars !== undefined && previewDollars > 0 && (
        <p className="mt-1 font-sans text-xs text-ink-muted">
          = {formatDollars(Math.round(previewDollars))}
        </p>
      )}
    </div>
  );
}

interface LoanTermToggleProps {
  value: 15 | 30;
  onChange: (value: number) => void;
}

export function LoanTermToggle({ value, onChange }: LoanTermToggleProps) {
  return (
    <div>
      <span className="font-sans text-sm font-semibold text-ink">
        Loan Term
      </span>
      <div className="mt-2 flex">
        <button
          type="button"
          onClick={() => onChange(30)}
          className={`flex-1 py-3 font-sans text-sm font-semibold transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            value === 30
              ? 'bg-accent text-white'
              : 'border border-border bg-white text-ink hover:border-accent hover:text-accent'
          }`}
        >
          30 Years
        </button>
        <button
          type="button"
          onClick={() => onChange(15)}
          className={`flex-1 py-3 font-sans text-sm font-semibold transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            value === 15
              ? 'bg-accent text-white'
              : 'border border-border bg-white text-ink hover:border-accent hover:text-accent'
          }`}
        >
          15 Years
        </button>
      </div>
    </div>
  );
}
