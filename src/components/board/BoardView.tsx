'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import type { Client, Stage, BoardState } from '@/lib/board-types';
import { STAGES, createClient } from '@/lib/board-types';
import {
  loadBoardState,
  saveBoardState,
  addClient,
  updateClient,
  moveClient,
  removeClient,
  setCapacity,
} from '@/lib/board-storage';
import MarginIndicator from './MarginIndicator';
import BoardColumn from './BoardColumn';
import ClientModal from './ClientModal';
import CapacitySettings from './CapacitySettings';
import EmptyState from './EmptyState';

export default function BoardView() {
  const [state, setState] = useState<BoardState | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [editingClient, setEditingClient] = useState<Client | null>(null);
  const [addStage, setAddStage] = useState<Stage>('discovery');
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    setState(loadBoardState());
  }, []);

  const persist = useCallback((next: BoardState) => {
    setState(next);
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(() => saveBoardState(next), 150);
  }, []);

  const handleAddClick = useCallback((stage: Stage) => {
    setEditingClient(null);
    setAddStage(stage);
    setModalOpen(true);
  }, []);

  const handleEditClient = useCallback((client: Client) => {
    setEditingClient(client);
    setAddStage(client.stage);
    setModalOpen(true);
  }, []);

  const handleSave = useCallback(
    (name: string, lifeContext: string, nextAction: string, stage: Stage) => {
      if (!state) return;
      if (editingClient) {
        persist(updateClient(state, editingClient.id, { name, lifeContext, nextAction }));
      } else {
        const client = createClient(name, lifeContext, nextAction, stage);
        persist(addClient(state, client));
      }
      setModalOpen(false);
      setEditingClient(null);
    },
    [state, editingClient, persist],
  );

  const handleMoveClient = useCallback(
    (id: string, stage: Stage) => {
      if (!state) return;
      persist(moveClient(state, id, stage));
    },
    [state, persist],
  );

  const handleRemoveClient = useCallback(
    (id: string) => {
      if (!state) return;
      persist(removeClient(state, id));
    },
    [state, persist],
  );

  const handleDropClient = useCallback(
    (clientId: string, stage: Stage) => {
      if (!state) return;
      persist(moveClient(state, clientId, stage));
    },
    [state, persist],
  );

  const handleCapacitySave = useCallback(
    (cap: number) => {
      if (!state) return;
      persist(setCapacity(state, cap));
    },
    [state, persist],
  );

  if (!state) return null;

  const isEmpty = state.clients.length === 0;

  if (isEmpty) {
    return (
      <EmptyState
        hasCapacity={state.capacitySet}
        onSetup={handleCapacitySave}
        onAddFirst={() => handleAddClick('discovery')}
      />
    );
  }

  return (
    <>
      <MarginIndicator
        clients={state.clients}
        capacity={state.capacity}
        onSettingsClick={() => setSettingsOpen(true)}
      />

      <div className="mx-auto max-w-7xl px-4 py-6">
        <div className="flex gap-4 overflow-x-auto pb-4">
          {STAGES.map((stage) => (
            <BoardColumn
              key={stage.id}
              stage={stage}
              clients={state.clients}
              onAddClick={() => handleAddClick(stage.id)}
              onEditClient={handleEditClient}
              onDropClient={(id) => handleDropClient(id, stage.id)}
            />
          ))}
        </div>
      </div>

      <ClientModal
        client={editingClient}
        defaultStage={addStage}
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditingClient(null);
        }}
        onSave={handleSave}
        onMoveClient={handleMoveClient}
        onRemoveClient={handleRemoveClient}
      />

      <CapacitySettings
        capacity={state.capacity}
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        onSave={handleCapacitySave}
      />
    </>
  );
}
