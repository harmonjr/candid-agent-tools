'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import type { Client, Stage } from '@/lib/board-types';
import { STAGES } from '@/lib/board-types';
import { X } from 'lucide-react';
import ModalField, { INPUT_CLASS } from './ModalField';
import RemoveButton from './RemoveButton';

interface ClientModalProps {
  client: Client | null;
  defaultStage: Stage;
  isOpen: boolean;
  onClose: () => void;
  onSave: (name: string, lifeContext: string, nextAction: string, stage: Stage) => void;
  onMoveClient?: (id: string, stage: Stage) => void;
  onRemoveClient?: (id: string) => void;
}

export default function ClientModal({
  client,
  defaultStage,
  isOpen,
  onClose,
  onSave,
  onMoveClient,
  onRemoveClient,
}: ClientModalProps) {
  const [name, setName] = useState('');
  const [lifeContext, setLifeContext] = useState('');
  const [nextAction, setNextAction] = useState('');
  const [stage, setStage] = useState<Stage>(defaultStage);
  const [showRemoveConfirm, setShowRemoveConfirm] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);

  const isEditing = client !== null;

  useEffect(() => {
    if (isOpen && client) {
      setName(client.name);
      setLifeContext(client.lifeContext);
      setNextAction(client.nextAction);
      setStage(client.stage);
    } else if (isOpen) {
      setName('');
      setLifeContext('');
      setNextAction('');
      setStage(defaultStage);
    }
    setShowRemoveConfirm(false);
  }, [isOpen, client, defaultStage]);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => nameRef.current?.focus(), 100);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!name.trim()) return;
      onSave(name.trim(), lifeContext.trim(), nextAction.trim(), stage);
    },
    [name, lifeContext, nextAction, stage, onSave],
  );

  const handleMoveChange = useCallback(
    (newStage: Stage) => {
      if (client && onMoveClient) {
        onMoveClient(client.id, newStage);
        setStage(newStage);
      }
    },
    [client, onMoveClient],
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center px-4 pt-20">
      <div className="fixed inset-0 bg-ink/40" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-md border border-border bg-white px-6 py-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 p-1 text-ink-muted transition-colors duration-200 hover:text-ink focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        <h2 className="font-serif text-2xl font-light text-ink">
          {isEditing ? 'Edit Client' : 'Add Client'}
        </h2>

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          <ModalField label="Name" htmlFor="client-name">
            <input
              ref={nameRef}
              id="client-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Sarah & James Mitchell"
              className={INPUT_CLASS}
              required
            />
          </ModalField>

          <ModalField label="Life Context" htmlFor="client-context">
            <textarea
              id="client-context"
              value={lifeContext}
              onChange={(e) => setLifeContext(e.target.value)}
              placeholder="Teacher, first baby June, parents nearby"
              rows={2}
              className={`${INPUT_CLASS} resize-none`}
            />
          </ModalField>

          <ModalField label="Next Action" htmlFor="client-action">
            <input
              id="client-action"
              type="text"
              value={nextAction}
              onChange={(e) => setNextAction(e.target.value)}
              placeholder="Send neighborhood comparison for Elm Street area"
              className={INPUT_CLASS}
            />
          </ModalField>

          {isEditing && (
            <ModalField label="Move to Stage" htmlFor="client-stage">
              <select
                id="client-stage"
                value={stage}
                onChange={(e) => handleMoveChange(e.target.value as Stage)}
                className={INPUT_CLASS}
              >
                {STAGES.map((s) => (
                  <option key={s.id} value={s.id}>{s.title}</option>
                ))}
              </select>
            </ModalField>
          )}

          <div className="flex items-center justify-between pt-2">
            <button
              type="submit"
              className="bg-accent px-6 py-3 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              {isEditing ? 'Save Changes' : 'Add Client'}
            </button>

            {isEditing && onRemoveClient && (
              <RemoveButton
                showConfirm={showRemoveConfirm}
                onToggleConfirm={() => setShowRemoveConfirm((p) => !p)}
                onConfirm={() => {
                  onRemoveClient(client.id);
                  onClose();
                }}
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
