'use client';

import { useRef, useEffect } from 'react';

interface ScriptEditAreaProps {
  editValue: string;
  isCustomized: boolean;
  onChangeValue: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onReset: () => void;
}

export default function ScriptEditArea({
  editValue,
  isCustomized,
  onChangeValue,
  onSave,
  onCancel,
  onReset,
}: ScriptEditAreaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, []);

  return (
    <div className="mt-3">
      <textarea
        ref={textareaRef}
        value={editValue}
        onChange={(e) => {
          onChangeValue(e.target.value);
          e.target.style.height = 'auto';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
        className="w-full resize-none border border-border bg-white px-4 py-3 font-serif text-base leading-relaxed text-ink transition-colors duration-200 focus:border-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        rows={4}
      />
      <div className="mt-2 flex items-center gap-2">
        <button
          type="button"
          onClick={onSave}
          className="bg-accent px-4 py-1.5 font-sans text-[11px] font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-1.5 font-sans text-[11px] font-semibold text-ink-muted transition-colors duration-200 hover:text-ink focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Cancel
        </button>
        {isCustomized && (
          <button
            type="button"
            onClick={onReset}
            className="ml-auto px-4 py-1.5 font-sans text-[11px] font-semibold text-zone-red transition-colors duration-200 hover:text-zone-red/80 focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Reset to default
          </button>
        )}
      </div>
    </div>
  );
}
