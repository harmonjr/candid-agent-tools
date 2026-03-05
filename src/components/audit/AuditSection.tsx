'use client';

import { useEffect } from 'react';
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

function smoothScroll(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)',
  ).matches;
  el.scrollIntoView({
    behavior: prefersReducedMotion ? 'instant' : 'smooth',
    block: 'start',
  });
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
  useEffect(() => {
    requestAnimationFrame(() => smoothScroll('audit-top'));
  }, [section]);

  const allAnswered = section.questions.every(
    (q) => answers[q.id] !== undefined,
  );

  function handleAnswer(questionId: string, value: number) {
    onAnswer(questionId, value);
    const currentIndex = section.questions.findIndex(
      (q) => q.id === questionId,
    );
    const nextId =
      currentIndex + 1 < section.questions.length
        ? `audit-q-${currentIndex + 1}`
        : 'audit-cta';
    setTimeout(() => smoothScroll(nextId), 50);
  }

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
          <div key={question.id} id={`audit-q-${i}`}>
            <QuestionCard
              question={question}
              value={answers[question.id]}
              onChange={handleAnswer}
              index={i}
            />
          </div>
        ))}
      </div>

      <div id="audit-cta" className="mt-10 flex items-center justify-between">
        {!isFirst ? (
          <button
            type="button"
            onClick={onBack}
            className="border border-border bg-cream px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
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
              ? 'bg-accent text-cream hover:bg-accent-hover'
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
