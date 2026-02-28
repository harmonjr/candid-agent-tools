'use client';

import {
  calculateMonthlyPI,
  calculateMonthlyPMI,
  type TrueCostInputs,
} from '@/lib/true-cost-calculator';
import { StepOneFields, StepTwoFields, StepThreeFields } from './StepFields';
import RunningSubtotal from './RunningSubtotal';

interface TrueCostStepProps {
  step: number;
  inputs: TrueCostInputs;
  onUpdate: (field: keyof TrueCostInputs, value: number) => void;
  onNext: () => void;
  onBack: () => void;
}

const STEP_META = [
  {
    label: 'Step 1 of 5',
    title: 'The Home',
    description: 'Start with the basics. These numbers drive everything else.',
  },
  {
    label: 'Step 2 of 5',
    title: 'The Expected Costs',
    description: 'The costs everyone knows about but often underestimates.',
  },
  {
    label: 'Step 3 of 5',
    title: 'The Costs Nobody Mentions',
    description: 'This is where the real picture starts to form.',
  },
];

export default function TrueCostStep({
  step,
  inputs,
  onUpdate,
  onNext,
  onBack,
}: TrueCostStepProps) {
  const meta = STEP_META[step];
  const subtotal = computeSubtotal(step, inputs);
  const canContinue = validateStep(step, inputs);

  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          {meta.label}
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          {meta.title}
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          {meta.description}
        </p>
      </div>

      <div className="border-t-2 border-candid bg-white px-6 py-8">
        <div className="space-y-6">
          {step === 0 && <StepOneFields inputs={inputs} onUpdate={onUpdate} />}
          {step === 1 && <StepTwoFields inputs={inputs} onUpdate={onUpdate} />}
          {step === 2 && <StepThreeFields inputs={inputs} onUpdate={onUpdate} />}
        </div>

        {subtotal > 0 && (
          <RunningSubtotal
            amount={subtotal}
            label={step === 0 ? 'Monthly P&I' : 'Monthly so far'}
          />
        )}
      </div>

      <div className="mt-10 flex items-center justify-between">
        {step > 0 ? (
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
          disabled={!canContinue}
          className={`px-8 py-3 font-sans text-sm font-semibold transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            canContinue
              ? 'bg-accent text-white hover:bg-accent-hover'
              : 'cursor-not-allowed bg-border text-ink-muted'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function computeSubtotal(step: number, inputs: TrueCostInputs): number {
  const loanAmount =
    inputs.purchasePrice * (1 - inputs.downPaymentPercent / 100);
  const pi = calculateMonthlyPI(
    loanAmount,
    inputs.interestRate,
    inputs.loanTermYears,
  );

  if (step === 0) return pi;

  const pmi = calculateMonthlyPMI(loanAmount, inputs.downPaymentPercent);
  let total =
    pi +
    pmi +
    inputs.propertyTaxAnnual / 12 +
    inputs.insuranceAnnual / 12 +
    inputs.hoaMonthly;

  if (step === 1) return total;

  total +=
    (inputs.purchasePrice * (inputs.maintenancePercent / 100)) / 12 +
    inputs.utilitiesMonthly +
    inputs.commuteChangeMonthly;

  return total;
}

function validateStep(step: number, inputs: TrueCostInputs): boolean {
  if (step === 0) {
    return inputs.purchasePrice > 0 && inputs.interestRate > 0;
  }
  return true;
}
