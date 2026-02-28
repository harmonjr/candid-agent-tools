'use client';

import { getActiveClientCount, getCapacityZone } from '@/lib/board-types';
import type { Client } from '@/lib/board-types';

interface MarginIndicatorProps {
  clients: Client[];
  capacity: number;
  onSettingsClick: () => void;
}

const ZONE_COLORS = {
  green: 'bg-zone-green',
  amber: 'bg-zone-amber',
  red: 'bg-zone-red',
} as const;

export default function MarginIndicator({
  clients,
  capacity,
  onSettingsClick,
}: MarginIndicatorProps) {
  const active = getActiveClientCount(clients);
  const zone = getCapacityZone(active, capacity);
  const fillPercent = capacity > 0 ? Math.min((active / capacity) * 100, 100) : 0;

  return (
    <div className="border-b border-border bg-white px-6 py-4">
      <div className="mx-auto flex max-w-7xl items-center gap-6">
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <p className="font-sans text-sm font-semibold text-ink">
              Active Clients: {active} / {capacity}
            </p>
            <button
              type="button"
              onClick={onSettingsClick}
              className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid transition-colors duration-200 hover:text-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
            >
              Settings
            </button>
          </div>
          <div className="mt-2 h-2 w-full bg-border">
            <div
              className={`h-full transition-all duration-300 ease-out ${ZONE_COLORS[zone]}`}
              style={{ width: `${fillPercent}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
