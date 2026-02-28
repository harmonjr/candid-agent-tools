'use client';

import type { GeneratedTemplate } from '@/lib/template-generator';
import TemplateCard from './TemplateCard';

interface TemplateDisplayProps {
  templates: GeneratedTemplate[];
  onTemplateChange: (id: string, content: string) => void;
  onBack: () => void;
}

export default function TemplateDisplay({
  templates,
  onTemplateChange,
  onBack,
}: TemplateDisplayProps) {
  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Step 2
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          Your Templates
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          These are ready to use. Copy them into your phone, email, or CRM.
          Edit any template to make it sound like you — your voice matters
          more than perfect wording.
        </p>
      </div>

      <div className="space-y-6">
        {templates.map((template) => (
          <TemplateCard
            key={template.id}
            title={template.title}
            subtitle={template.subtitle}
            content={template.content}
            onContentChange={(content) => onTemplateChange(template.id, content)}
          />
        ))}
      </div>

      <div className="mt-8 border-t-2 border-candid bg-highlight px-6 py-8 sm:px-8">
        <h3 className="font-serif text-xl font-light text-ink">
          Remember: boundaries are a service, not a limitation.
        </h3>
        <p className="mt-3 max-w-2xl font-sans text-sm leading-relaxed text-ink-muted">
          Clients who respect your boundaries are the clients you want.
          The ones who push back are often the ones who will drain every
          ounce of your energy. Setting expectations early is one of the
          most generous things you can do — for them and for yourself.
        </p>
      </div>

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onBack}
          className="border border-border bg-white px-6 py-3 font-sans text-sm font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Back to Schedule
        </button>
      </div>
    </div>
  );
}
