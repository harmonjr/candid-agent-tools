'use client';

import { useState } from 'react';

const PRINCIPLES = [
  { label: 'Education over self-promotion', detail: 'Teach something useful. The trust follows.' },
  { label: 'Honesty over cheerleading', detail: 'If the market is tough, say so. Your credibility depends on it.' },
  { label: 'Margin-aligned advice', detail: 'Help clients build financial breathing room, not stretch to the max.' },
  { label: 'Community over competition', detail: 'Share freely. Rising tides lift all boats.' },
  { label: 'Transparency about interest', detail: 'Disclose when you benefit. Readers deserve to know.' },
];

export default function ContentPrinciples() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-t-2 border-candid bg-highlight px-6 py-6">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between text-left transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Content Principles
        </span>
        <span className="font-sans text-sm text-ink-muted" aria-hidden="true">
          {isExpanded ? '\u2212' : '+'}
        </span>
      </button>

      {isExpanded && (
        <ol className="mt-4 space-y-3">
          {PRINCIPLES.map((p, i) => (
            <li key={i} className="flex gap-3">
              <span className="font-serif text-lg font-light text-candid">
                {i + 1}.
              </span>
              <div>
                <span className="font-sans text-sm font-semibold text-ink">
                  {p.label}
                </span>
                <p className="mt-0.5 font-sans text-xs leading-relaxed text-ink-muted">
                  {p.detail}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
