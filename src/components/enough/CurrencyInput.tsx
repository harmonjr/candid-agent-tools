'use client';

import { useCallback, useState } from 'react';

interface CurrencyInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  helper?: string;
  id: string;
}

export default function CurrencyInput({
  label,
  value,
  onChange,
  helper,
  id,
}: CurrencyInputProps) {
  const [displayValue, setDisplayValue] = useState(
    value > 0 ? formatDisplay(value) : '',
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value.replace(/[^0-9]/g, '');
      if (raw === '') {
        setDisplayValue('');
        onChange(0);
        return;
      }
      const numeric = parseInt(raw, 10);
      setDisplayValue(formatDisplay(numeric));
      onChange(numeric);
    },
    [onChange],
  );

  const handleBlur = useCallback(() => {
    if (value > 0) {
      setDisplayValue(formatDisplay(value));
    }
  }, [value]);

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-sans text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-sans text-base text-ink-muted">
          $
        </span>
        <input
          id={id}
          type="text"
          inputMode="numeric"
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0"
          className="w-full border border-border bg-white py-3 pl-8 pr-4 font-sans text-base text-ink transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        />
      </div>
      {helper && (
        <p className="mt-1.5 font-sans text-xs text-ink-muted">
          {helper}
        </p>
      )}
    </div>
  );
}

function formatDisplay(value: number): string {
  return new Intl.NumberFormat('en-US').format(value);
}
