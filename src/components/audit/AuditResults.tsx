'use client';

import type { AuditResult } from '@/lib/scoring';
import ScoreDisplay from './ScoreDisplay';
import ScoreBar from './ScoreBar';

interface AuditResultsProps {
  result: AuditResult;
  onRetake: () => void;
}

export default function AuditResults({
  result,
  onRetake,
}: AuditResultsProps) {
  return (
    <div className="print:bg-white">
      <div className="mb-16 text-center">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Your Results
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          Margin Practice Score
        </h2>
        <p className="mt-3 font-sans text-base text-ink-muted">
          Here is an honest look at where you stand — and where to go next.
        </p>
      </div>

      <div className="flex justify-center">
        <ScoreDisplay
          score={result.overallScore}
          zone={result.overallZone}
          label="Overall Margin Score"
          size="large"
        />
      </div>

      <div className="mt-16 border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
        <h3 className="mb-8 font-serif text-2xl font-light text-ink">
          Section Breakdown
        </h3>
        <div className="space-y-8">
          {result.sections.map((section) => (
            <ScoreBar
              key={section.sectionId}
              score={section.score}
              zone={section.zone}
              title={section.title}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 border-t-2 border-candid bg-white px-6 py-8 sm:px-8">
        <h3 className="mb-6 font-serif text-2xl font-light text-ink">
          What to Do Next
        </h3>
        <div className="space-y-4">
          {result.recommendations.map((rec, i) => (
            <div key={i} className="flex gap-4">
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center bg-highlight font-sans text-xs font-semibold text-candid">
                {i + 1}
              </span>
              <p className="font-sans text-sm leading-relaxed text-ink-muted">
                {rec}
              </p>
            </div>
          ))}
        </div>
      </div>

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
          Retake Assessment
        </button>
      </div>
    </div>
  );
}

function NextStepsCta() {
  return (
    <div className="mt-8 border-t-2 border-candid bg-highlight px-6 py-8 sm:px-8">
      <h3 className="font-serif text-xl font-light text-ink">
        This is just the beginning.
      </h3>
      <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
        The Margin Practice Audit shows you where you stand.
        The Candid Agent helps you build a practice where healthy
        margins are the norm, not the exception. Boundary tools,
        sustainability frameworks, and honest conversations about
        what it takes to thrive — not just survive — in real estate.
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
