'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { STAGES, DEFAULT_CAPACITY } from '@/lib/board-types';
import { LayoutGrid, UserPlus } from 'lucide-react';
import { INPUT_CLASS } from './ModalField';

interface EmptyStateProps {
  onSetup: (capacity: number) => void;
  onAddFirst: () => void;
  hasCapacity: boolean;
}

export default function EmptyState({
  onSetup,
  onAddFirst,
  hasCapacity,
}: EmptyStateProps) {
  const [capacity, setCapacity] = useState(DEFAULT_CAPACITY);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!hasCapacity) {
      const timer = setTimeout(() => inputRef.current?.focus(), 200);
      return () => clearTimeout(timer);
    }
  }, [hasCapacity]);

  const handleCapacitySubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (capacity < 1) return;
      onSetup(capacity);
    },
    [capacity, onSetup],
  );

  return (
    <div className="flex flex-col items-center px-6 py-16 text-center sm:py-24">
      <LayoutGrid size={40} className="text-candid/60" strokeWidth={1.5} />

      <h2 className="mt-6 max-w-lg font-serif text-3xl font-light leading-tight text-ink sm:text-4xl">
        Your board is ready
      </h2>

      <p className="mt-4 max-w-md font-sans text-base leading-relaxed text-ink-muted">
        Five stages. One board. The only CRM question that matters:
        what does this person need from me next?
      </p>

      {!hasCapacity ? (
        <form
          onSubmit={handleCapacitySubmit}
          className="mt-10 w-full max-w-xs"
        >
          <label
            htmlFor="initial-capacity"
            className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid"
          >
            Your Capacity
          </label>
          <p className="mt-1 font-sans text-xs leading-relaxed text-ink-muted">
            How many clients can you serve exceptionally?
          </p>
          <input
            ref={inputRef}
            id="initial-capacity"
            type="number"
            min={1}
            max={99}
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            className={`mt-2 text-center ${INPUT_CLASS}`}
          />
          <button
            type="submit"
            className="mt-4 w-full bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          >
            Set My Capacity
          </button>
        </form>
      ) : (
        <button
          type="button"
          onClick={onAddFirst}
          className="mt-10 flex items-center gap-2 bg-accent px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          <UserPlus size={16} />
          Add Your First Client
        </button>
      )}

      <div className="mt-16 grid w-full max-w-2xl gap-4 sm:grid-cols-5">
        {STAGES.map((stage) => (
          <div key={stage.id} className="border-t-2 border-candid/20 px-2 pt-3">
            <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid/60">
              {stage.title}
            </p>
            <p className="mt-1 font-sans text-[10px] leading-relaxed text-ink-muted/60">
              {stage.description}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-sm font-sans text-xs leading-relaxed text-ink-muted/60">
        Your data stays on your device. Nothing is sent to a server.
      </p>
    </div>
  );
}
