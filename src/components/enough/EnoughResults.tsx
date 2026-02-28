'use client';

import type { EnoughResult } from '@/lib/enough-calculator';
import {
  getReflectionZone,
  getReflectionText,
} from '@/lib/enough-calculator';
import MathBreakdown from './MathBreakdown';

interface EnoughResultsProps {
  result: EnoughResult;
  onRetake: () => void;
}

export default function EnoughResults({
  result,
  onRetake,
}: EnoughResultsProps) {
  const zone = getReflectionZone(result.withJosephReserve);
  const reflection = getReflectionText(zone);

  return (
    <div className="print:bg-white">
      <ResultsHeader transactions={result.withJosephReserve} />

      <MathBreakdown result={result} />

      <JosephReserve result={result} />

      <ReflectionCard reflection={reflection} zone={zone} />

      <NextStepsCta />

      <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <button
          type="button"
          onClick={() => window.print()}
          className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Print / Save Results
        </button>
        <button
          type="button"
          onClick={onRetake}
          className="bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Recalculate
        </button>
      </div>
    </div>
  );
}

function ResultsHeader({ transactions }: { transactions: number }) {
  return (
    <div className="mb-16 text-center">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        The Reveal
      </span>
      <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
        Your Enough Number
      </h2>
      <p className="mt-3 font-sans text-base text-ink-muted">
        This is how many closings fund the life you described.
      </p>
      <div className="mt-10">
        <span className="block font-serif text-6xl font-light text-ink sm:text-7xl">
          {transactions}
        </span>
        <span className="mt-2 block font-sans text-sm font-semibold uppercase tracking-[0.15em] text-ink-muted">
          closings per year
        </span>
      </div>
    </div>
  );
}

function JosephReserve({ result }: { result: EnoughResult }) {
  return (
    <div className="mt-8 border-t-2 border-candid bg-highlight px-6 py-8 sm:px-8">
      <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
        Joseph Reserve (+20%)
      </span>
      <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
        Build reserves during good seasons so lean seasons are not crises.
        This adds a 20% buffer to your target.
      </p>
      <div className="mt-6 flex items-baseline gap-8">
        <div>
          <span className="block font-serif text-4xl font-light text-ink">
            {result.withJosephReserve}
          </span>
          <span className="mt-1 block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
            annual target
          </span>
        </div>
        <div>
          <span className="block font-serif text-4xl font-light text-ink">
            {result.monthlyTarget}
          </span>
          <span className="mt-1 block font-sans text-xs font-semibold uppercase tracking-[0.15em] text-ink-muted">
            per month
          </span>
        </div>
      </div>
    </div>
  );
}

function ReflectionCard({
  reflection,
  zone,
}: {
  reflection: string;
  zone: string;
}) {
  const borderColor =
    zone === 'low'
      ? 'border-zone-green'
      : zone === 'moderate'
        ? 'border-zone-amber'
        : 'border-zone-red';

  return (
    <div
      className={`mt-8 border-t-2 ${borderColor} bg-white px-6 py-8 sm:px-8`}
    >
      <h3 className="font-serif text-xl font-light text-ink">
        A Candid Reflection
      </h3>
      <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
        {reflection}
      </p>
    </div>
  );
}

function NextStepsCta() {
  return (
    <div className="mt-8 border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
      <h3 className="font-serif text-xl font-light text-ink">
        Now you know the number.
      </h3>
      <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
        The Enough Calculator tells you how many transactions you need.
        The Candid Agent helps you build a practice where every one of
        those transactions is sustainable, ethical, and life-giving.
        Boundary tools, honest conversations, and frameworks for agents
        who want to thrive.
      </p>
      <a
        href="https://thecandidagent.com"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        Explore The Candid Agent
      </a>
    </div>
  );
}
