import type { BoardState, Client, Stage } from './board-types';
import { DEFAULT_CAPACITY } from './board-types';

const STORAGE_KEY = 'candid-board-state';

const EMPTY_STATE: BoardState = {
  clients: [],
  capacity: DEFAULT_CAPACITY,
  capacitySet: false,
  agentName: '',
};

export function loadBoardState(): BoardState {
  if (typeof window === 'undefined') return EMPTY_STATE;

  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return EMPTY_STATE;
    const parsed = JSON.parse(raw) as BoardState;
    if (!Array.isArray(parsed.clients)) return EMPTY_STATE;
    return parsed;
  } catch {
    return EMPTY_STATE;
  }
}

export function saveBoardState(state: BoardState): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Storage full or unavailable -- fail silently
  }
}

export function addClient(state: BoardState, client: Client): BoardState {
  return { ...state, clients: [client, ...state.clients] };
}

export function updateClient(
  state: BoardState,
  id: string,
  updates: Partial<Pick<Client, 'name' | 'lifeContext' | 'nextAction'>>,
): BoardState {
  return {
    ...state,
    clients: state.clients.map((c) =>
      c.id === id ? { ...c, ...updates } : c,
    ),
  };
}

export function moveClient(
  state: BoardState,
  id: string,
  newStage: Stage,
): BoardState {
  return {
    ...state,
    clients: state.clients.map((c) =>
      c.id === id
        ? { ...c, stage: newStage, stageEnteredAt: new Date().toISOString() }
        : c,
    ),
  };
}

export function removeClient(state: BoardState, id: string): BoardState {
  return {
    ...state,
    clients: state.clients.filter((c) => c.id !== id),
  };
}

export function setCapacity(state: BoardState, capacity: number): BoardState {
  return { ...state, capacity: Math.max(1, capacity), capacitySet: true };
}

export function getClientsForStage(
  clients: Client[],
  stage: Stage,
): Client[] {
  return clients
    .filter((c) => c.stage === stage)
    .sort((a, b) => a.order - b.order);
}
