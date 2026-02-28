'use client';

import { useState, useCallback } from 'react';
import type { Section } from '@/lib/expectations';
import ScriptCard from './ScriptCard';
import EducationCallout from './EducationCallout';

interface SectionAccordionProps {
  section: Section;
  defaultOpen?: boolean;
  customScripts: Record<string, string>;
  onCustomChange: (scriptId: string, text: string | undefined) => void;
}

export default function SectionAccordion({
  section,
  defaultOpen = false,
  customScripts,
  onCustomChange,
}: SectionAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section className="border-t-2 border-candid">
      <button
        type="button"
        onClick={toggle}
        className="flex w-full items-start justify-between gap-4 bg-white px-6 py-6 text-left transition-colors duration-200 hover:bg-highlight/50 focus:outline-hidden focus:ring-2 focus:ring-accent/20 sm:px-8 sm:py-8"
        aria-expanded={isOpen}
      >
        <div>
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            {section.subtitle}
          </span>
          <h2 className="mt-2 font-serif text-2xl font-light text-ink sm:text-3xl">
            {section.title}
          </h2>
          <p className="mt-2 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
            {section.description}
          </p>
        </div>
        <span
          className="mt-2 shrink-0 text-ink-muted transition-transform duration-200"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
          aria-hidden="true"
        >
          <ChevronIcon />
        </span>
      </button>

      {isOpen && (
        <div className="border-t border-border bg-white">
          <div className="px-6 py-8 sm:px-8">
            <div className="flex flex-col gap-4">
              {section.scripts.map((script) => (
                <ScriptCard
                  key={script.id}
                  script={script}
                  customText={customScripts[script.id]}
                  onCustomChange={onCustomChange}
                />
              ))}
            </div>

            <div className="mt-6">
              <EducationCallout>{section.educationCallout}</EducationCallout>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

function ChevronIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 7.5L10 12.5L15 7.5" />
    </svg>
  );
}
