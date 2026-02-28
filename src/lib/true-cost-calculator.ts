export interface TrueCostInputs {
  purchasePrice: number;
  downPaymentPercent: number;
  interestRate: number;
  loanTermYears: 15 | 30;
  propertyTaxAnnual: number;
  insuranceAnnual: number;
  hoaMonthly: number;
  maintenancePercent: number;
  utilitiesMonthly: number;
  commuteChangeMonthly: number;
  monthlyIncome?: number;
}

export interface TrueCostResult {
  loanAmount: number;
  downPaymentDollars: number;
  monthlyPrincipalInterest: number;
  monthlyPMI: number;
  monthlyPropertyTax: number;
  monthlyInsurance: number;
  monthlyHOA: number;
  monthlyMaintenance: number;
  monthlyUtilities: number;
  monthlyCommuteChange: number;
  trueMonthlyCost: number;
  annualTotalCost: number;
  costGapDollars: number;
  costGapPercent: number;
  housingToIncomeRatio?: number;
  monthlyRemaining?: number;
  marginZone?: 'green' | 'amber' | 'red';
}

export type MarginZone = 'green' | 'amber' | 'red';

const PMI_RATE = 0.007;
const PMI_THRESHOLD = 0.2;

export function createEmptyInputs(): TrueCostInputs {
  return {
    purchasePrice: 0,
    downPaymentPercent: 20,
    interestRate: 6.5,
    loanTermYears: 30,
    propertyTaxAnnual: 0,
    insuranceAnnual: 0,
    hoaMonthly: 0,
    maintenancePercent: 1,
    utilitiesMonthly: 0,
    commuteChangeMonthly: 0,
  };
}

export function calculateMonthlyPI(
  loanAmount: number,
  annualRate: number,
  termYears: number,
): number {
  if (loanAmount <= 0 || annualRate <= 0) return 0;
  const r = annualRate / 100 / 12;
  const n = termYears * 12;
  const factor = Math.pow(1 + r, n);
  return loanAmount * (r * factor) / (factor - 1);
}

export function calculateMonthlyPMI(
  loanAmount: number,
  downPaymentPercent: number,
): number {
  if (downPaymentPercent >= PMI_THRESHOLD * 100) return 0;
  return (loanAmount * PMI_RATE) / 12;
}

export function calculateTrueCost(
  inputs: TrueCostInputs,
): TrueCostResult {
  const downPaymentDollars =
    inputs.purchasePrice * (inputs.downPaymentPercent / 100);
  const loanAmount = inputs.purchasePrice - downPaymentDollars;

  const monthlyPI = calculateMonthlyPI(
    loanAmount,
    inputs.interestRate,
    inputs.loanTermYears,
  );
  const monthlyPMI = calculateMonthlyPMI(
    loanAmount,
    inputs.downPaymentPercent,
  );

  const monthlyPropertyTax = inputs.propertyTaxAnnual / 12;
  const monthlyInsurance = inputs.insuranceAnnual / 12;
  const monthlyMaintenance =
    (inputs.purchasePrice * (inputs.maintenancePercent / 100)) / 12;

  const trueMonthlyCost =
    monthlyPI +
    monthlyPMI +
    monthlyPropertyTax +
    monthlyInsurance +
    inputs.hoaMonthly +
    monthlyMaintenance +
    inputs.utilitiesMonthly +
    inputs.commuteChangeMonthly;

  const costGapDollars = trueMonthlyCost - monthlyPI;
  const costGapPercent =
    monthlyPI > 0 ? (costGapDollars / monthlyPI) * 100 : 0;

  const result: TrueCostResult = {
    loanAmount,
    downPaymentDollars,
    monthlyPrincipalInterest: monthlyPI,
    monthlyPMI,
    monthlyPropertyTax,
    monthlyInsurance,
    monthlyHOA: inputs.hoaMonthly,
    monthlyMaintenance,
    monthlyUtilities: inputs.utilitiesMonthly,
    monthlyCommuteChange: inputs.commuteChangeMonthly,
    trueMonthlyCost,
    annualTotalCost: trueMonthlyCost * 12,
    costGapDollars,
    costGapPercent,
  };

  if (inputs.monthlyIncome && inputs.monthlyIncome > 0) {
    const ratio = (trueMonthlyCost / inputs.monthlyIncome) * 100;
    result.housingToIncomeRatio = ratio;
    result.monthlyRemaining = inputs.monthlyIncome - trueMonthlyCost;
    result.marginZone = getMarginZone(ratio);
  }

  return result;
}

export function getMarginZone(ratio: number): MarginZone {
  if (ratio < 28) return 'green';
  if (ratio <= 36) return 'amber';
  return 'red';
}

export function getMarginMessage(zone: MarginZone): string {
  switch (zone) {
    case 'green':
      return 'You have room to breathe. This is what margin looks like.';
    case 'amber':
      return 'This is manageable, but tight. Consider whether this leaves enough for the unexpected.';
    case 'red':
      return 'This number should give you pause. The bank may approve this, but the math says it will squeeze every other area of your life.';
  }
}

export function formatDollars(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`;
}
