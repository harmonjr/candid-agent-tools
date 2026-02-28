'use client';

import { useState, useCallback } from 'react';
import {
  createEmptyInputs,
  calculateTrueCost,
  type TrueCostInputs,
  type TrueCostResult,
} from '@/lib/true-cost-calculator';
import ProgressIndicator from '@/components/audit/ProgressIndicator';
import TrueCostStep from './TrueCostStep';
import CostComparison from './CostComparison';
import MarginCheck from './MarginCheck';

const TOTAL_STEPS = 5;
const INPUT_STEPS = 3;

const STEP_NAMES = [
  'The Home',
  'Expected Costs',
  'Hidden Costs',
  'The Reveal',
  'Margin Check',
];

export default function TrueCostWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [inputs, setInputs] = useState<TrueCostInputs>(createEmptyInputs());
  const [result, setResult] = useState<TrueCostResult | null>(null);

  const handleUpdate = useCallback(
    (field: keyof TrueCostInputs, value: number) => {
      setInputs((prev) => ({ ...prev, [field]: value }));
    },
    [],
  );

  const handleNext = useCallback(() => {
    if (currentStep < INPUT_STEPS - 1) {
      setCurrentStep((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === INPUT_STEPS - 1) {
      const computed = calculateTrueCost(inputs);
      setResult(computed);
      setCurrentStep(INPUT_STEPS);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (currentStep === INPUT_STEPS) {
      setCurrentStep(INPUT_STEPS + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep, inputs]);

  const handleBack = useCallback(() => {
    if (currentStep > 0) {
      if (currentStep === INPUT_STEPS) {
        setResult(null);
      }
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentStep]);

  const handleStartOver = useCallback(() => {
    setInputs(createEmptyInputs());
    setCurrentStep(0);
    setResult(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleIncomeChange = useCallback(
    (value: number) => {
      setInputs((prev) => ({ ...prev, monthlyIncome: value }));
      if (result) {
        const updated = calculateTrueCost({ ...inputs, monthlyIncome: value });
        setResult(updated);
      }
    },
    [inputs, result],
  );

  return (
    <div>
      <ProgressIndicator
        currentStep={currentStep}
        totalSteps={TOTAL_STEPS}
        sectionNames={STEP_NAMES}
      />

      {currentStep < INPUT_STEPS && (
        <TrueCostStep
          step={currentStep}
          inputs={inputs}
          onUpdate={handleUpdate}
          onNext={handleNext}
          onBack={handleBack}
        />
      )}

      {currentStep === INPUT_STEPS && result && (
        <div>
          <CostComparison result={result} />
          <div className="mt-10 flex items-center justify-between">
            <button
              type="button"
              onClick={handleBack}
              className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="bg-accent px-8 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              Check My Margin
            </button>
          </div>
        </div>
      )}

      {currentStep === INPUT_STEPS + 1 && result && (
        <MarginCheck
          result={result}
          monthlyIncome={inputs.monthlyIncome ?? 0}
          onIncomeChange={handleIncomeChange}
          onStartOver={handleStartOver}
        />
      )}
    </div>
  );
}
