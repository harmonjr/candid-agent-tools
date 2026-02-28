'use client';

import { useState, useCallback } from 'react';
import type { Script } from '@/lib/expectations';
import { saveCustomScript, resetCustomScript } from '@/lib/expectations';
import ScriptEditArea from './ScriptEditArea';

interface ScriptCardProps {
  script: Script;
  customText: string | undefined;
  onCustomChange: (scriptId: string, text: string | undefined) => void;
}

export default function ScriptCard({
  script,
  customText,
  onCustomChange,
}: ScriptCardProps) {
  const [copied, setCopied] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editValue, setEditValue] = useState('');
  const isCustomized = customText !== undefined;
  const displayText = customText ?? script.content;

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(displayText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = displayText;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [displayText]);

  const handleStartEdit = useCallback(() => {
    setEditValue(displayText);
    setEditing(true);
  }, [displayText]);

  const handleSave = useCallback(() => {
    const trimmed = editValue.trim();
    if (trimmed && trimmed !== script.content) {
      saveCustomScript(script.id, trimmed);
      onCustomChange(script.id, trimmed);
    } else if (trimmed === script.content) {
      resetCustomScript(script.id);
      onCustomChange(script.id, undefined);
    }
    setEditing(false);
  }, [editValue, script.id, script.content, onCustomChange]);

  const handleReset = useCallback(() => {
    resetCustomScript(script.id);
    onCustomChange(script.id, undefined);
    setEditing(false);
  }, [script.id, onCustomChange]);

  return (
    <div className="border-l-2 border-candid/40 bg-cream-alt/50 px-5 py-4">
      <ScriptHeader
        title={script.title}
        isCustomized={isCustomized}
        editing={editing}
        copied={copied}
        onEdit={handleStartEdit}
        onCopy={handleCopy}
      />

      {script.context && (
        <p className="mt-1 font-sans text-[11px] leading-relaxed text-ink-muted/70">
          {script.context}
        </p>
      )}

      {editing ? (
        <ScriptEditArea
          editValue={editValue}
          isCustomized={isCustomized}
          onChangeValue={setEditValue}
          onSave={handleSave}
          onCancel={() => setEditing(false)}
          onReset={handleReset}
        />
      ) : (
        <ScriptDisplay text={displayText} variations={script.variations} />
      )}
    </div>
  );
}

interface ScriptHeaderProps {
  title: string;
  isCustomized: boolean;
  editing: boolean;
  copied: boolean;
  onEdit: () => void;
  onCopy: () => void;
}

function ScriptHeader({
  title,
  isCustomized,
  editing,
  copied,
  onEdit,
  onCopy,
}: ScriptHeaderProps) {
  return (
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-center gap-2">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.15em] text-ink-muted">
          {title}
        </span>
        {isCustomized && !editing && (
          <span className="font-sans text-[10px] font-medium text-candid">
            customized
          </span>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-2">
        {!editing && (
          <button
            type="button"
            onClick={onEdit}
            className="px-3 py-1 font-sans text-[11px] font-semibold text-ink-muted transition-colors duration-200 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Customize
          </button>
        )}
        <button
          type="button"
          onClick={onCopy}
          className={`px-3 py-1 font-sans text-[11px] font-semibold transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            copied
              ? 'bg-zone-green text-white'
              : 'border border-border text-ink-muted hover:border-accent hover:text-accent'
          }`}
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

interface ScriptDisplayProps {
  text: string;
  variations?: string[];
}

function ScriptDisplay({ text, variations }: ScriptDisplayProps) {
  return (
    <>
      <p className="mt-3 font-serif text-base italic leading-relaxed text-ink">
        {`\u201C${text}\u201D`}
      </p>
      {variations && variations.length > 0 && (
        <div className="mt-3 border-t border-border/50 pt-3">
          <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.15em] text-ink-muted/60">
            Variation
          </span>
          {variations.map((variation) => (
            <p
              key={variation.slice(0, 30)}
              className="mt-1 font-serif text-sm italic leading-relaxed text-ink-muted"
            >
              {`\u201C${variation}\u201D`}
            </p>
          ))}
        </div>
      )}
    </>
  );
}
