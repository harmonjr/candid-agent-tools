'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { INPUT_CLASS } from './ModalField';

interface CapacitySettingsProps {
  capacity: number;
  isOpen: boolean;
  onClose: () => void;
  onSave: (capacity: number) => void;
}

export default function CapacitySettings({
  capacity,
  isOpen,
  onClose,
  onSave,
}: CapacitySettingsProps) {
  const [value, setValue] = useState(capacity);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setValue(capacity);
      const timer = setTimeout(() => inputRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen, capacity]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value < 1) return;
      onSave(value);
      onClose();
    },
    [value, onSave, onClose],
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20">
      <div
        className="fixed inset-0 bg-ink/40"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-sm border border-border bg-white px-6 py-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-ink-muted transition-colors duration-200 hover:text-ink focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className="font-serif text-2xl font-light text-ink">
          Capacity Settings
        </h2>
        <p className="mt-2 font-sans text-sm leading-relaxed text-ink-muted">
          How many clients can you serve exceptionally? Not adequately
          — exceptionally.
        </p>

        <form onSubmit={handleSubmit} className="mt-6">
          <label
            htmlFor="capacity-input"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid"
          >
            Active Client Capacity
          </label>
          <input
            ref={inputRef}
            id="capacity-input"
            type="number"
            min={1}
            max={99}
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
            className={`mt-1.5 ${INPUT_CLASS}`}
          />

          <button
            type="submit"
            className="mt-5 w-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Save Capacity
          </button>
        </form>
      </div>
    </div>
  );
}
