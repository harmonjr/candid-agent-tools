'use client';

import { useState, useCallback } from 'react';
import {
  createEmptyInputs,
  calculateEnough,
  type EnoughInputs,
  type EnoughResult,
} from '@/lib/enough-calculator';
import ProgressIndicator from '@/components/audit/ProgressIndicator';
import EnoughStep from './EnoughStep';
import EnoughResults from './EnoughResults';

const STEP_NAMES = [
  'Life',
  'Practice',
  'Splits',
  'Market',
];

const TOTAL_STEPS = STEP_NAMES.length;

const STEP_REQUIRED_FIELDS: (keyof EnoughInputs)[][] = [
  ['monthlyExpenses'],
  ['annualMarketing', 'annualMlsDues', 'annualEO'],
  ['brokerSplitPercent'],
  ['averageSalePrice', 'commissionPercent'],
];

export default function EnoughWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState<EnoughInputs>(
    createEmptyInputs(),
  );
  const [result, setResult] = useState<EnoughResult | null>(null);

  const handleUpdate = useCallback(
    (field: keyof EnoughInputs, value: number) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const canContinue = STEP_REQUIRED_FIELDS[currentStep]?.every(
    (field) => inputs[field] > 0,
  ) ?? false;

  const handleNext = useCallback(() => {
    if (currentStep < TOTAL_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const enoughResult = calculateEnough(inputs);
      setResult(enoughResult);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, inputs]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleRetake = useCallback(() => {
    setInputs(createEmptyInputs());
    setCurrentStep(0);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if (result) {
    return <EnoughResults result={result} onRetake={handleRetake} />;
  }

  return (
    <div>
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        sectionNames={STEP_NAMES}
      />

      <EnoughStep
        step={currentStep}
        inputs={inputs}
        onUpdate={handleUpdate}
      />

      <div className="mt-10 flex items-center justify-between">
        {currentStep > 0 ? (
          <button
            type="button"
            onClick={handleBack}
            className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Back
          </button>
        ) : (
          <div />
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={!canContinue}
          className={`
            px-8 py-3 font-sans text-sm font-semibold transition-colors duration-200
            focus:outline-hidden focus:ring-2 focus:ring-accent/20
            ${canContinue
              ? 'bg-accent text-white hover:bg-accent-hover'
              : 'cursor-not-allowed bg-border text-ink-muted'
            }
          `}
        >
          {currentStep === TOTAL_STEPS - 1
            ? 'Show My Number'
            : 'Continue'}
        </button>
      </div>
    </div>
  );
}
