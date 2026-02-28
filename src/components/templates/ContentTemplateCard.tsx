'use client';

import { useState, useCallback } from 'react';
import { Copy, Check } from 'lucide-react';
import type { ContentTemplate } from '@/lib/content-templates';

interface ContentTemplateCardProps {
  template: ContentTemplate;
}

function highlightPlaceholders(text: string): React.ReactNode[] {
  const parts = text.split(/(\[[A-Z_/\s]+\])/g);
  return parts.map((part, i) => {
    if (/^\[[A-Z_/\s]+\]$/.test(part)) {
      return (
        <span key={i} className="bg-highlight font-semibold text-candid">
          {part}
        </span>
      );
    }
    return part;
  });
}

export default function ContentTemplateCard({ template }: ContentTemplateCardProps) {
  const [copied, setCopied] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(template.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement('textarea');
      textarea.value = template.content;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [template.content]);

  const previewLines = template.content.split('\n').slice(0, 4).join('\n');

  return (
    <div className="border-t border-border bg-white">
      <div className="px-6 py-5">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="font-serif text-lg font-light text-ink">
              {template.title}
            </h3>
            <p className="mt-1 font-sans text-xs leading-relaxed text-ink-muted">
              {template.description}
            </p>
          </div>
          <button
            onClick={handleCopy}
            className="flex shrink-0 items-center gap-1.5 border border-border px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-accent transition-colors duration-200 hover:border-candid hover:bg-highlight hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            aria-label={`Copy ${template.title} template`}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy
              </>
            )}
          </button>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-3 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          {isExpanded ? 'Hide Template' : 'Preview Template'}
        </button>
      </div>

      {isExpanded && (
        <div className="border-t border-border bg-cream-alt px-6 py-5">
          <pre className="max-h-96 overflow-y-auto whitespace-pre-wrap font-sans text-sm leading-relaxed text-ink">
            {highlightPlaceholders(template.content)}
          </pre>
        </div>
      )}

      {!isExpanded && (
        <div className="border-t border-border/50 bg-cream px-6 py-3">
          <p className="truncate font-sans text-xs text-ink-muted">
            {highlightPlaceholders(previewLines.replace(/\n/g, ' '))}
          </p>
        </div>
      )}
    </div>
  );
}
