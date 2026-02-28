'use client';

import { useState, useCallback } from 'react';

interface TemplateCardProps {
  title: string;
  subtitle: string;
  content: string;
  onContentChange: (content: string) => void;
}

export default function TemplateCard({
  title,
  subtitle,
  content,
  onContentChange,
}: TemplateCardProps) {
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = content;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [content]);

  return (
    <div className="border-t-2 border-candid bg-white">
      <div className="px-6 py-5 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-serif text-xl font-light text-ink">
              {title}
            </h3>
            <p className="mt-1 font-sans text-xs text-ink-muted">
              {subtitle}
            </p>
          </div>
          <div className="flex shrink-0 gap-2">
            <button
              type="button"
              onClick={() => setIsEditing(!isEditing)}
              className="border border-border bg-white px-3 py-2 font-sans text-xs font-semibold text-ink transition-colors duration-200 hover:border-accent hover:text-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              {isEditing ? 'Done' : 'Edit'}
            </button>
            <button
              type="button"
              onClick={handleCopy}
              className={`px-3 py-2 font-sans text-xs font-semibold text-white transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
                copied
                  ? 'bg-zone-green'
                  : 'bg-accent hover:bg-accent-hover'
              }`}
            >
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>

        {isEditing ? (
          <textarea
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
            rows={6}
            className="mt-4 w-full border border-border bg-cream px-4 py-3 font-sans text-sm leading-relaxed text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          />
        ) : (
          <p className="mt-4 whitespace-pre-line font-sans text-sm leading-relaxed text-ink-muted">
            {content}
          </p>
        )}
      </div>
    </div>
  );
}
