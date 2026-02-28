'use client';

import type { Section } from '@/lib/audit-questions';
import type { Answers } from '@/lib/scoring';
import QuestionCard from './QuestionCard';

interface AuditSectionProps {
  section: Section;
  answers: Answers;
  onAnswer: (questionId: string, value: number) => void;
  onNext: () => void;
  onBack: () => void;
  isFirst: boolean;
  isLast: boolean;
}

export default function AuditSection({
  section,
  answers,
  onAnswer,
  onNext,
  onBack,
  isFirst,
  isLast,
}: AuditSectionProps) {
  const allAnswered = section.questions.every(
    (q) => answers[q.id] !== undefined,
  );

  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          {section.subtitle}
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          {section.title}
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          {section.description}
        </p>
      </div>

      <div className="space-y-6">
        {section.questions.map((question, i) => (
          <QuestionCard
            key={question.id}
            question={question}
            value={answers[question.id]}
            onChange={onAnswer}
            index={i}
          />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between">
        {!isFirst ? (
          <button
            type="button"
            onClick={onBack}
            className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={onNext}
          disabled={!allAnswered}
          className={`
            px-8 py-3 font-sans text-sm font-semibold transition-colors duration-200
            focus:outline-hidden focus:ring-2 focus:ring-accent/20
            ${allAnswered
              ? 'bg-accent text-white hover:bg-accent-hover'
              : 'cursor-not-allowed bg-border text-ink-muted'
            }
          `}
        >
          {isLast ? 'See My Results' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
