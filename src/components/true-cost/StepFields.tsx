'use client';

import { formatDollars, calculateMonthlyPMI, type TrueCostInputs } from '@/lib/true-cost-calculator';
import { CurrencyField, PercentField, LoanTermToggle } from './FormFields';

type FieldUpdater = (field: keyof TrueCostInputs, value: number) => void;

interface StepFieldsProps {
  inputs: TrueCostInputs;
  onUpdate: FieldUpdater;
}

export function StepOneFields({ inputs, onUpdate }: StepFieldsProps) {
  const downPaymentDollars =
    inputs.purchasePrice * (inputs.downPaymentPercent / 100);

  return (
    <>
      <CurrencyField
        id="purchase-price"
        label="Purchase Price"
        value={inputs.purchasePrice}
        placeholder="350,000"
        onChange={(v) => onUpdate('purchasePrice', v)}
      />
      <PercentField
        id="down-payment"
        label="Down Payment"
        value={inputs.downPaymentPercent}
        placeholder="20"
        onChange={(v) => onUpdate('downPaymentPercent', v)}
        previewDollars={downPaymentDollars}
      />
      <PercentField
        id="interest-rate"
        label="Interest Rate"
        value={inputs.interestRate}
        placeholder="6.5"
        onChange={(v) => onUpdate('interestRate', v)}
      />
      <LoanTermToggle
        value={inputs.loanTermYears}
        onChange={(v) => onUpdate('loanTermYears', v as 15 | 30)}
      />
    </>
  );
}

export function StepTwoFields({ inputs, onUpdate }: StepFieldsProps) {
  const loanAmount =
    inputs.purchasePrice * (1 - inputs.downPaymentPercent / 100);
  const monthlyPMI = calculateMonthlyPMI(
    loanAmount,
    inputs.downPaymentPercent,
  );

  return (
    <>
      <CurrencyField
        id="property-tax"
        label="Property Taxes (annual)"
        help="Check your county assessor's website"
        value={inputs.propertyTaxAnnual}
        placeholder="4,200"
        onChange={(v) => onUpdate('propertyTaxAnnual', v)}
        annualToMonthly
      />
      <CurrencyField
        id="insurance"
        label="Homeowner's Insurance (annual)"
        value={inputs.insuranceAnnual}
        placeholder="1,800"
        onChange={(v) => onUpdate('insuranceAnnual', v)}
        annualToMonthly
      />
      <CurrencyField
        id="hoa"
        label="HOA Fees (monthly)"
        help="Enter 0 if no HOA"
        value={inputs.hoaMonthly}
        placeholder="0"
        onChange={(v) => onUpdate('hoaMonthly', v)}
      />
      {inputs.downPaymentPercent < 20 && (
        <div className="border-l-2 border-zone-amber bg-zone-amber/10 px-4 py-3">
          <p className="font-sans text-xs font-semibold text-zone-amber">
            PMI Required
          </p>
          <p className="mt-1 font-sans text-xs text-ink-muted">
            With less than 20% down, PMI adds{' '}
            <span className="font-semibold text-ink">
              {formatDollars(Math.round(monthlyPMI))}
            </span>
            /month until you reach 80% loan-to-value.
          </p>
        </div>
      )}
    </>
  );
}

export function StepThreeFields({ inputs, onUpdate }: StepFieldsProps) {
  const maintenanceMonthly =
    (inputs.purchasePrice * (inputs.maintenancePercent / 100)) / 12;

  return (
    <>
      <div>
        <PercentField
          id="maintenance"
          label="Maintenance Reserve (% of home value per year)"
          help="The 1% rule: budget 1% of your home's value annually for maintenance and repairs"
          value={inputs.maintenancePercent}
          placeholder="1"
          onChange={(v) => onUpdate('maintenancePercent', v)}
        />
        {maintenanceMonthly > 0 && (
          <p className="mt-1 font-sans text-xs text-ink-muted">
            = {formatDollars(Math.round(maintenanceMonthly))}/month set aside
          </p>
        )}
      </div>
      <CurrencyField
        id="utilities"
        label="Utilities Estimate (monthly)"
        help="Electric, gas, water, trash, internet"
        value={inputs.utilitiesMonthly}
        placeholder="300"
        onChange={(v) => onUpdate('utilitiesMonthly', v)}
      />
      <CurrencyField
        id="commute"
        label="Commute Cost Change (monthly)"
        help="Will this move change your commute costs? Enter a negative number if moving closer to work."
        value={inputs.commuteChangeMonthly}
        placeholder="0"
        onChange={(v) => onUpdate('commuteChangeMonthly', v)}
        allowNegative
      />
    </>
  );
}
