export interface EnoughInputs {
  monthlyExpenses: number;
  annualSavings: number;
  annualGiving: number;
  annualMarketing: number;
  annualMlsDues: number;
  annualEO: number;
  annualOtherBusiness: number;
  brokerSplitPercent: number;
  transactionFee: number;
  averageSalePrice: number;
  commissionPercent: number;
}

export interface EnoughResult {
  targetAnnualIncome: number;
  totalBusinessExpenses: number;
  grossPerTransaction: number;
  afterBrokerSplit: number;
  netPerTransaction: number;
  transactionsNeeded: number;
  withJosephReserve: number;
  monthlyTarget: number;
}

export type ReflectionZone = 'low' | 'moderate' | 'high';

export function createEmptyInputs(): EnoughInputs {
  return {
    monthlyExpenses: 0,
    annualSavings: 0,
    annualGiving: 0,
    annualMarketing: 0,
    annualMlsDues: 0,
    annualEO: 0,
    annualOtherBusiness: 0,
    brokerSplitPercent: 0,
    transactionFee: 0,
    averageSalePrice: 0,
    commissionPercent: 0,
  };
}

export function calculateEnough(inputs: EnoughInputs): EnoughResult {
  const annualLiving = inputs.monthlyExpenses * 12;
  const totalBusinessExpenses =
    inputs.annualMarketing +
    inputs.annualMlsDues +
    inputs.annualEO +
    inputs.annualOtherBusiness;

  const targetAnnualIncome =
    annualLiving +
    inputs.annualSavings +
    inputs.annualGiving +
    totalBusinessExpenses;

  const grossPerTransaction =
    inputs.averageSalePrice * (inputs.commissionPercent / 100);

  const afterBrokerSplit =
    grossPerTransaction * (1 - inputs.brokerSplitPercent / 100);

  const netPerTransaction = afterBrokerSplit - inputs.transactionFee;

  const transactionsNeeded =
    netPerTransaction > 0
      ? Math.ceil(targetAnnualIncome / netPerTransaction)
      : 0;

  const withJosephReserve = Math.ceil(transactionsNeeded * 1.2);
  const monthlyTarget =
    withJosephReserve > 0
      ? +(withJosephReserve / 12).toFixed(1)
      : 0;

  return {
    targetAnnualIncome,
    totalBusinessExpenses,
    grossPerTransaction,
    afterBrokerSplit,
    netPerTransaction,
    transactionsNeeded,
    withJosephReserve,
    monthlyTarget,
  };
}

export function getReflectionZone(
  transactions: number,
): ReflectionZone {
  if (transactions < 15) return 'low';
  if (transactions <= 25) return 'moderate';
  return 'high';
}

export function getReflectionText(zone: ReflectionZone): string {
  switch (zone) {
    case 'low':
      return 'If this feels lower than you expected \u2014 good. That\'s margin. The space between what you need and what you chase is where your life happens.';
    case 'moderate':
      return 'This is achievable. The question is: are you being intentional about it, or just hoping? Knowing the number is the first step. Building toward it is the work.';
    case 'high':
      return 'This is a high number. What could you adjust? Lower expenses? A higher average price point? A better split? Sometimes the most honest move is renegotiating the inputs.';
  }
}

export function formatCurrency(value: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value);
}
