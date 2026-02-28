'use client';

import { ALL_CATEGORIES } from '@/lib/conversations';
import CategoryAccordion from './CategoryAccordion';

export default function ConversationsLanding() {
  return (
    <div>
      <div className="flex flex-col items-center px-6 py-20 text-center sm:py-28">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Conversation Framework
        </span>

        <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-ink sm:text-5xl lg:text-6xl">
          The Margin Message Framework
        </h1>

        <p className="mt-6 max-w-xl font-sans text-base leading-relaxed text-ink-muted sm:text-lg">
          Bob spent an hour asking about a family&apos;s life before ever
          showing a listing. He pulled out an adding machine tape and showed
          what different price points would mean for their monthly budget.
          He steered them toward spending less than they qualified for.
        </p>

        <p className="mt-4 max-w-lg font-sans text-sm leading-relaxed text-ink-muted">
          These are the scripts and frameworks for the hard conversations
          that define a Candid Agent. The conversations most agents
          avoid — and the ones clients remember forever.
        </p>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-24">
        <div className="flex flex-col gap-8">
          {ALL_CATEGORIES.map((category, index) => (
            <CategoryAccordion
              key={category.id}
              category={category}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
