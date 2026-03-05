'use client';

import { useRef, useState, useCallback } from 'react';
import { SECTIONS } from '@/lib/audit-questions';
import { calculateResults, type Answers, type AuditResult } from '@/lib/scoring';
import ProgressIndicator from './ProgressIndicator';
import AuditSection from './AuditSection';
import AuditResults from './AuditResults';

function scrollToWizard(ref: React.RefObject<HTMLDivElement | null>) {
  requestAnimationFrame(() => {
    if (!ref.current) return;
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;
    ref.current.scrollIntoView({
      behavior: prefersReducedMotion ? 'instant' : 'smooth',
      block: 'start',
    });
  });
}

export default function AuditWizard() {
  const wizardRef = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [result, setResult] = useState<AuditResult | null>(null);

  const sectionNames = SECTIONS.map((s) => s.title);
  const isShowingResults = result !== null;

  const handleAnswer = useCallback(
    (questionId: string, value: number) => {
      setAnswers((prev) => ({ ...prev, [questionId]: value }));
    },
    [],
  );

  const handleNext = useCallback(() => {
    if (currentStep < SECTIONS.length - 1) {
      setCurrentStep((prev) => prev + 1);
    } else {
      const auditResult = calculateResults(answers);
      setResult(auditResult);
    }
  }, [currentStep, answers]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  }, [currentStep]);

  const handleRetake = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    scrollToWizard(wizardRef);
  }, []);

  if (isShowingResults) {
    return <AuditResults result={result} onRetake={handleRetake} />;
  }

  return (
    <div ref={wizardRef}>
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={SECTIONS.length}
        sectionNames={sectionNames}
      />

      <AuditSection
        section={SECTIONS[currentStep]}
        answers={answers}
        onAnswer={handleAnswer}
        onNext={handleNext}
        onBack={handleBack}
        isFirst={currentStep === 0}
        isLast={currentStep === SECTIONS.length - 1}
      />
    </div>
  );
}
