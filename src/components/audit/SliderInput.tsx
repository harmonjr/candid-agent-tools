'use client';

import { useEffect } from 'react';
import type { Question } from '@/lib/audit-questions';

interface SliderInputProps {
  question: Question;
  value: number | undefined;
  onChange: (value: number) => void;
}

export default function SliderInput({
  question,
  value,
  onChange,
}: SliderInputProps) {
  const min = question.min ?? 0;
  const max = question.max ?? 100;
  const step = question.step ?? 1;
  const current = value ?? Math.round((min + max) / 2);

  useEffect(() => {
    if (value === undefined) {
      onChange(current);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="space-y-4">
      <div className="text-center">
        <span className="font-serif text-4xl font-light text-ink">
          {current}
        </span>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={current}
        onChange={(e) => onChange(Number(e.target.value))}
        className="slider-candid w-full cursor-pointer"
        aria-label={question.text}
      />

      {question.labels && (
        <div className="flex justify-between">
          <span className="font-sans text-xs text-ink-muted">
            {question.labels.low}
          </span>
          <span className="font-sans text-xs text-ink-muted">
            {question.labels.high}
          </span>
        </div>
      )}
    </div>
  );
}
