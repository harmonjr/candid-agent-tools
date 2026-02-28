'use client';

import { useState, useCallback } from 'react';
import type { Script } from '@/lib/conversations';

interface ScriptBlockProps {
  script: Script;
}

export default function ScriptBlock({ script }: ScriptBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(script.text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = script.text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [script.text]);

  return (
    <div className="border-l-2 border-candid/40 bg-cream-alt/50 px-5 py-4">
      <div className="flex items-start justify-between gap-3">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
          {script.label}
        </span>
        <button
          type="button"
          onClick={handleCopy}
          className={`shrink-0 px-3 py-1 font-sans text-[11px] font-semibold transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            copied
              ? 'bg-zone-green text-white'
              : 'border border-border text-ink-muted hover:border-accent hover:text-accent'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      <p className="mt-3 font-serif text-base italic leading-relaxed text-ink">
        {`\u201C${script.text}\u201D`}
      </p>
    </div>
  );
}
