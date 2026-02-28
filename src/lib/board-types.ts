export type Stage =
  | 'discovery'
  | 'searching'
  | 'under-contract'
  | 'post-close'
  | 'relationship';

export interface Client {
  id: string;
  name: string;
  lifeContext: string;
  nextAction: string;
  stage: Stage;
  createdAt: string;
  stageEnteredAt: string;
  order: number;
}

export interface BoardState {
  clients: Client[];
  capacity: number;
  capacitySet: boolean;
  agentName: string;
}

export interface StageConfig {
  id: Stage;
  title: string;
  description: string;
}

export const STAGES: StageConfig[] = [
  { id: 'discovery', title: 'Discovery', description: 'Initial conversations' },
  { id: 'searching', title: 'Searching', description: 'Actively looking' },
  { id: 'under-contract', title: 'Under Contract', description: 'Through closing' },
  { id: 'post-close', title: 'Post-Close', description: '90-day follow-up' },
  { id: 'relationship', title: 'Relationship', description: 'Ongoing connection' },
];

export const ACTIVE_STAGES: Stage[] = ['discovery', 'searching', 'under-contract'];

export const DEFAULT_CAPACITY = 12;

export function createClient(
  name: string,
  lifeContext: string,
  nextAction: string,
  stage: Stage,
): Client {
  const now = new Date().toISOString();
  return {
    id: crypto.randomUUID(),
    name,
    lifeContext,
    nextAction,
    stage,
    createdAt: now,
    stageEnteredAt: now,
    order: 0,
  };
}

export function getDaysInStage(stageEnteredAt: string): number {
  const entered = new Date(stageEnteredAt);
  const now = new Date();
  const diffMs = now.getTime() - entered.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

export function getActiveClientCount(clients: Client[]): number {
  return clients.filter((c) => ACTIVE_STAGES.includes(c.stage)).length;
}

export function getCapacityZone(
  active: number,
  capacity: number,
): 'green' | 'amber' | 'red' {
  if (capacity <= 0) return 'green';
  const ratio = active / capacity;
  if (ratio > 1) return 'red';
  if (ratio >= 0.8) return 'amber';
  return 'green';
}
