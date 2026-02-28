'use client';

import { useCallback, useState } from 'react';

interface PercentInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  helper?: string;
  id: string;
  max?: number;
  step?: number;
}

export default function PercentInput({
  label,
  value,
  onChange,
  helper,
  id,
  max = 100,
  step = 0.5,
}: PercentInputProps) {
  const [displayValue, setDisplayValue] = useState(
    value > 0 ? String(value) : '',
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      if (raw === '' || raw === '.') {
        setDisplayValue(raw);
        onChange(0);
        return;
      }
      const numeric = parseFloat(raw);
      if (!isNaN(numeric) && numeric <= max) {
        setDisplayValue(raw);
        onChange(numeric);
      }
    },
    [onChange, max],
  );

  const handleBlur = useCallback(() => {
    if (value > 0) {
      const rounded = Math.round(value / step) * step;
      setDisplayValue(String(rounded));
      onChange(rounded);
    } else {
      setDisplayValue('');
    }
  }, [value, step, onChange]);

  return (
    <div>
      <label
        htmlFor={id}
        className="block font-sans text-sm font-semibold text-ink"
      >
        {label}
      </label>
      <div className="relative mt-2">
        <input
          id={id}
          type="text"
          inputMode="decimal"
          value={displayValue}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="0"
          className="w-full border border-border bg-white py-3 pl-4 pr-10 font-sans text-base text-ink transition-colors duration-200 placeholder:text-ink-muted/40 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        />
        <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 font-sans text-base text-ink-muted">
          %
        </span>
      </div>
      {helper && (
        <p className="mt-1.5 font-sans text-xs text-ink-muted">
          {helper}
        </p>
      )}
    </div>
  );
}
