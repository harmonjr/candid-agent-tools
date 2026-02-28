'use client';

import type { EnoughInputs } from '@/lib/enough-calculator';
import CurrencyInput from './CurrencyInput';
import PercentInput from './PercentInput';
import StepHeader from './StepHeader';
import MarketStep from './MarketStep';

interface EnoughStepProps {
  step: number;
  inputs: EnoughInputs;
  onUpdate: (field: keyof EnoughInputs, value: number) => void;
}

export default function EnoughStep({
  step,
  inputs,
  onUpdate,
}: EnoughStepProps) {
  switch (step) {
    case 0:
      return <LifeStep inputs={inputs} onUpdate={onUpdate} />;
    case 1:
      return <PracticeStep inputs={inputs} onUpdate={onUpdate} />;
    case 2:
      return <SplitsStep inputs={inputs} onUpdate={onUpdate} />;
    case 3:
      return <MarketStep inputs={inputs} onUpdate={onUpdate} />;
    default:
      return null;
  }
}

interface StepContentProps {
  inputs: EnoughInputs;
  onUpdate: (field: keyof EnoughInputs, value: number) => void;
}

function LifeStep({ inputs, onUpdate }: StepContentProps) {
  return (
    <div>
      <StepHeader
        label="Step 1 of 4"
        title="The Life You Want"
        description="Start with the life you want to live, not the income you chase. What does it actually cost to live well?"
      />
      <div className="mt-8 space-y-6">
        <CurrencyInput
          id="monthlyExpenses"
          label="Monthly living expenses"
          value={inputs.monthlyExpenses}
          onChange={(v) => onUpdate('monthlyExpenses', v)}
          helper="Rent/mortgage, food, utilities, insurance, car, subscriptions -- everything personal"
        />
        <CurrencyInput
          id="annualSavings"
          label="Annual savings goal"
          value={inputs.annualSavings}
          onChange={(v) => onUpdate('annualSavings', v)}
          helper="Retirement, emergency fund, investments -- your future self needs this"
        />
        <CurrencyInput
          id="annualGiving"
          label="Annual giving goal"
          value={inputs.annualGiving}
          onChange={(v) => onUpdate('annualGiving', v)}
          helper="Charitable giving, tithing, generosity you want to protect"
        />
      </div>
    </div>
  );
}

function PracticeStep({ inputs, onUpdate }: StepContentProps) {
  return (
    <div>
      <StepHeader
        label="Step 2 of 4"
        title="Your Practice Costs"
        description="The business has bills too. Be honest about what it costs to run your practice well."
      />
      <div className="mt-8 space-y-6">
        <CurrencyInput
          id="annualMarketing"
          label="Annual marketing spend"
          value={inputs.annualMarketing}
          onChange={(v) => onUpdate('annualMarketing', v)}
          helper="Typical range: $2,000 - $15,000/year"
        />
        <CurrencyInput
          id="annualMlsDues"
          label="Annual MLS & association dues"
          value={inputs.annualMlsDues}
          onChange={(v) => onUpdate('annualMlsDues', v)}
          helper="Typical range: $1,000 - $3,000/year"
        />
        <CurrencyInput
          id="annualEO"
          label="Annual E&O insurance"
          value={inputs.annualEO}
          onChange={(v) => onUpdate('annualEO', v)}
          helper="Typical range: $300 - $1,500/year"
        />
        <CurrencyInput
          id="annualOtherBusiness"
          label="Other annual business expenses"
          value={inputs.annualOtherBusiness}
          onChange={(v) => onUpdate('annualOtherBusiness', v)}
          helper="CRM, tools, continuing education, transaction coordinator, etc."
        />
      </div>
    </div>
  );
}

function SplitsStep({ inputs, onUpdate }: StepContentProps) {
  return (
    <div>
      <StepHeader
        label="Step 3 of 4"
        title="Your Splits"
        description="How much of each commission check do you actually keep?"
      />
      <div className="mt-8 space-y-6">
        <PercentInput
          id="brokerSplitPercent"
          label="Broker split percentage"
          value={inputs.brokerSplitPercent}
          onChange={(v) => onUpdate('brokerSplitPercent', v)}
          helper="What your broker takes. If your broker takes 30%, enter 30."
          max={99}
        />
        <CurrencyInput
          id="transactionFee"
          label="Average transaction fee"
          value={inputs.transactionFee}
          onChange={(v) => onUpdate('transactionFee', v)}
          helper="Flat fees per closing (transaction fee, E&O per deal, etc.)"
        />
      </div>
    </div>
  );
}
