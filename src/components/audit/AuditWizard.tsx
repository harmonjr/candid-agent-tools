'use client';

import { useState, useCallback } from 'react';
import { SECTIONS } from '@/lib/audit-questions';
import { calculateResults, type Answers, type AuditResult } from '@/lib/scoring';
import ProgressIndicator from './ProgressIndicator';
import AuditSection from './AuditSection';
import AuditResults from './AuditResults';

export default function AuditWizard() {
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
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const auditResult = calculateResults(answers);
      setResult(auditResult);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, answers]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleRetake = useCallback(() => {
    setAnswers({});
    setCurrentStep(0);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (isShowingResults) {
    return <AuditResults result={result} onRetake={handleRetake} />;
  }

  return (
    <div>
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
