'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  EXPECTATION_SECTIONS,
  getCustomScripts,
} from '@/lib/expectations';
import SectionAccordion from './SectionAccordion';

export default function ExpectationsLanding() {
  const [customScripts, setCustomScripts] = useState<Record<string, string>>(
    {},
  );

  useEffect(() => {
    setCustomScripts(getCustomScripts());
  }, []);

  const handleCustomChange = useCallback(
    (scriptId: string, text: string | undefined) => {
      setCustomScripts((prev) => {
        const next = { ...prev };
        if (text === undefined) {
          delete next[scriptId];
        } else {
          next[scriptId] = text;
        }
        return next;
      });
    },
    [],
  );

  return (
    <div>
      <div className="flex flex-col items-center px-6 py-20 text-center sm:py-28">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          First Meeting Guide
        </span>

        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
          The Client Expectation Setter
        </h1>

        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
          The first meeting sets the tone for everything. These scripts help you
          establish trust, communicate boundaries, and start the relationship the
          way Bob did &mdash; with the client&apos;s life, not the listing sheet.
        </p>

        <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-ink-muted">
          Customize any script to match your voice, then copy it when you need
          it. Your edits are saved locally and stay with you.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="flex flex-col gap-8">
          {EXPECTATION_SECTIONS.map((section, index) => (
            <SectionAccordion
              key={section.id}
              section={section}
              defaultOpen={index === 0}
              customScripts={customScripts}
              onCustomChange={handleCustomChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
