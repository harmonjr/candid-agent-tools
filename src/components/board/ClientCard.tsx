'use client';

import { getDaysInStage } from '@/lib/board-types';
import type { Client } from '@/lib/board-types';
import { GripVertical } from 'lucide-react';

interface ClientCardProps {
  client: Client;
  onEdit: (client: Client) => void;
}

export default function ClientCard({ client, onEdit }: ClientCardProps) {
  const days = getDaysInStage(client.stageEnteredAt);

  function handleDragStart(e: React.DragEvent<HTMLDivElement>) {
    e.dataTransfer.setData('text/plain', client.id);
    e.dataTransfer.effectAllowed = 'move';
    const el = e.currentTarget;
    requestAnimationFrame(() => el.classList.add('opacity-40'));
  }

  function handleDragEnd(e: React.DragEvent<HTMLDivElement>) {
    e.currentTarget.classList.remove('opacity-40');
  }

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      className="group cursor-grab border border-border bg-white px-4 py-3 transition-colors duration-200 hover:border-candid/30 active:cursor-grabbing"
    >
      <div className="flex items-start justify-between gap-2">
        <button
          type="button"
          onClick={() => onEdit(client)}
          className="flex-1 text-left focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          <p className="font-sans text-sm font-semibold text-ink">
            {client.name}
          </p>
        </button>
        <GripVertical
          size={14}
          className="mt-0.5 flex-shrink-0 text-ink-muted/40 transition-colors duration-200 group-hover:text-ink-muted"
        />
      </div>

      <button
        type="button"
        onClick={() => onEdit(client)}
        className="mt-1.5 block w-full text-left focus:outline-hidden focus:ring-2 focus:ring-accent/20"
      >
        <p className="font-sans text-xs leading-relaxed text-ink-muted">
          {client.lifeContext}
        </p>
        <p className="mt-1.5 font-sans text-xs text-ink-muted">
          <span className="font-semibold text-candid">Next:</span>{' '}
          {client.nextAction}
        </p>
      </button>

      <p className="mt-2 font-sans text-[10px] text-ink-muted/60">
        {days === 0 ? 'Today' : `${days}d in stage`}
      </p>
    </div>
  );
}
