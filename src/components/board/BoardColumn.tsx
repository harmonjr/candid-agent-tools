'use client';

import { useState, useCallback } from 'react';
import type { Client, StageConfig } from '@/lib/board-types';
import { getClientsForStage } from '@/lib/board-storage';
import { Plus } from 'lucide-react';
import ClientCard from './ClientCard';

interface BoardColumnProps {
  stage: StageConfig;
  clients: Client[];
  onAddClick: () => void;
  onEditClient: (client: Client) => void;
  onDropClient: (clientId: string) => void;
}

export default function BoardColumn({
  stage,
  clients,
  onAddClick,
  onEditClient,
  onDropClient,
}: BoardColumnProps) {
  const [isDragOver, setIsDragOver] = useState(false);
  const stageClients = getClientsForStage(clients, stage.id);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  }, []);

  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const { clientX, clientY } = e;
    if (
      clientX < rect.left ||
      clientX > rect.right ||
      clientY < rect.top ||
      clientY > rect.bottom
    ) {
      setIsDragOver(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragOver(false);
      const clientId = e.dataTransfer.getData('text/plain');
      if (clientId) onDropClient(clientId);
    },
    [onDropClient],
  );

  return (
    <div
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`flex min-w-[240px] flex-shrink-0 flex-col px-3 py-4 transition-colors duration-200 ${
        isDragOver
          ? 'border-2 border-dashed border-candid/30 bg-highlight'
          : 'border-2 border-transparent bg-cream-alt/50'
      }`}
    >
      <div className="flex items-center justify-between px-1 pb-3">
        <div>
          <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            {stage.title}
          </h3>
          <p className="mt-0.5 font-sans text-[10px] text-ink-muted/60">
            {stageClients.length} client{stageClients.length !== 1 ? 's' : ''}
          </p>
        </div>
        <button
          type="button"
          onClick={onAddClick}
          className="flex h-7 w-7 items-center justify-center border border-border text-ink-muted transition-colors duration-200 hover:border-candid/30 hover:text-candid focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          aria-label={`Add client to ${stage.title}`}
        >
          <Plus size={14} />
        </button>
      </div>

      <div className="flex flex-1 flex-col gap-2">
        {stageClients.map((client) => (
          <ClientCard
            key={client.id}
            client={client}
            onEdit={onEditClient}
          />
        ))}
      </div>
    </div>
  );
}
