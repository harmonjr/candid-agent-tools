'use client';

import type { Question } from '@/lib/audit-questions';
import SliderInput from './SliderInput';
import RadioInput from './RadioInput';
import SelectInput from './SelectInput';

interface QuestionCardProps {
  question: Question;
  value: number | undefined;
  onChange: (questionId: string, value: number) => void;
  index: number;
}

export default function QuestionCard({
  question,
  value,
  onChange,
  index,
}: QuestionCardProps) {
  const handleChange = (val: number) => {
    onChange(question.id, val);
  };

  return (
    <div className="border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
      <div className="mb-6">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Question {index + 1}
        </span>
        <h3 className="mt-2 font-serif text-xl font-light leading-relaxed text-ink sm:text-2xl">
          {question.text}
        </h3>
        {question.subtext && (
          <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
            {question.subtext}
          </p>
        )}
      </div>

      {question.inputType === 'slider' && (
        <SliderInput
          question={question}
          value={value}
          onChange={handleChange}
        />
      )}
      {question.inputType === 'radio' && (
        <RadioInput
          question={question}
          value={value}
          onChange={handleChange}
        />
      )}
      {question.inputType === 'select' && (
        <SelectInput
          question={question}
          value={value}
          onChange={handleChange}
        />
      )}
    </div>
  );
}
