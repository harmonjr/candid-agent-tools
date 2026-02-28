'use client';

import type { Scenario } from '@/lib/conversations';
import ScriptBlock from './ScriptBlock';
import CalloutBox from './CalloutBox';

interface ScenarioCardProps {
  scenario: Scenario;
}

export default function ScenarioCard({ scenario }: ScenarioCardProps) {
  return (
    <div className="border-t border-border bg-white">
      <div className="px-6 py-8 sm:px-8">
        <h3 className="font-serif text-xl font-light leading-snug text-ink sm:text-2xl">
          {`\u201C${scenario.title}\u201D`}
        </h3>

        <p className="mt-3 font-sans text-sm leading-relaxed text-ink-muted">
          <span className="font-semibold text-ink">When to use:</span>{' '}
          {scenario.context}
        </p>

        <div className="mt-6 flex flex-col gap-4">
          {scenario.scripts.map((script) => (
            <ScriptBlock key={script.label} script={script} />
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-4">
          <CalloutBox variant="warning" label="Why agents avoid this">
            {scenario.whyAgentsAvoid}
          </CalloutBox>

          <CalloutBox
            variant="consequence"
            label="What happens when you stay quiet"
          >
            {scenario.whatHappensWithout}
          </CalloutBox>
        </div>
      </div>
    </div>
  );
}
