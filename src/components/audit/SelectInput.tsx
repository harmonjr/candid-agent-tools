'use client';

import type { Question } from '@/lib/audit-questions';

interface SelectInputProps {
  question: Question;
  value: number | undefined;
  onChange: (value: number) => void;
}

export default function SelectInput({
  question,
  value,
  onChange,
}: SelectInputProps) {
  if (!question.options) return null;

  return (
    <fieldset className="space-y-3">
      <legend className="sr-only">{question.text}</legend>
      {question.options.map((option) => {
        const isSelected = value === option.value;

        return (
          <label
            key={option.value}
            className={`
              flex cursor-pointer items-start gap-4 rounded-none border px-5 py-4
              font-sans text-sm leading-relaxed transition-colors duration-200
              ${isSelected
                ? 'border-candid bg-highlight text-ink'
                : 'border-border bg-white text-ink-muted hover:border-accent hover:text-ink'
              }
              focus-within:ring-2 focus-within:ring-accent/20
            `}
          >
            <input
              type="radio"
              name={question.id}
              value={option.value}
              checked={isSelected}
              onChange={() => onChange(option.value)}
              className="mt-0.5 h-4 w-4 shrink-0 accent-candid"
            />
            <span>{option.label}</span>
          </label>
        );
      })}
    </fieldset>
  );
}
