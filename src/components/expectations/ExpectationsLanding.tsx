'use client';

import { useState, useEffect, useCallback } from 'react';
import {
  EXPECTATION_SECTIONS,
  getCustomScripts,
} from '@/lib/expectations';
import SectionAccordion from './SectionAccordion';

export default function ExpectationsLanding() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(
    EXPECTATION_SECTIONS[0].id,
  );
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
      <div className="flex flex-col items-center px-6 py-16 text-center sm:py-20">
        <p className="max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
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
          {EXPECTATION_SECTIONS.map((section) => (
            <SectionAccordion
              key={section.id}
              section={section}
              isOpen={openSectionId === section.id}
              onToggle={() =>
                setOpenSectionId((prev) =>
                  prev === section.id ? null : section.id,
                )
              }
              customScripts={customScripts}
              onCustomChange={handleCustomChange}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
