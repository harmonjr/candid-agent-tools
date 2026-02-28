'use client';

import { TIME_OPTIONS, type DaySchedule } from '@/lib/boundaries-config';

interface TimePickerRowProps {
  dayKey: string;
  dayLabel: string;
  schedule: DaySchedule;
  onToggle: (dayKey: string) => void;
  onTimeChange: (dayKey: string, field: 'start' | 'end', value: string) => void;
}

export default function TimePickerRow({
  dayKey,
  dayLabel,
  schedule,
  onToggle,
  onTimeChange,
}: TimePickerRowProps) {
  return (
    <div className="flex items-center gap-3 border-b border-border px-4 py-3 last:border-b-0 sm:gap-4">
      <label className="flex cursor-pointer items-center gap-3 sm:w-32">
        <input
          type="checkbox"
          checked={schedule.enabled}
          onChange={() => onToggle(dayKey)}
          className="h-4 w-4 accent-candid"
        />
        <span
          className={`font-sans text-sm font-semibold transition-colors duration-200 ${
            schedule.enabled ? 'text-ink' : 'text-ink-muted'
          }`}
        >
          {dayLabel}
        </span>
      </label>

      {schedule.enabled ? (
        <div className="flex flex-1 items-center gap-2">
          <select
            value={schedule.start}
            onChange={(e) => onTimeChange(dayKey, 'start', e.target.value)}
            className="flex-1 border border-border bg-white px-2 py-2 font-sans text-sm text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20 sm:px-3"
            aria-label={`${dayLabel} start time`}
          >
            {TIME_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
          <span className="font-sans text-xs text-ink-muted">to</span>
          <select
            value={schedule.end}
            onChange={(e) => onTimeChange(dayKey, 'end', e.target.value)}
            className="flex-1 border border-border bg-white px-2 py-2 font-sans text-sm text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20 sm:px-3"
            aria-label={`${dayLabel} end time`}
          >
            {TIME_OPTIONS.map((t) => (
              <option key={t.value} value={t.value}>{t.label}</option>
            ))}
          </select>
        </div>
      ) : (
        <span className="flex-1 font-sans text-sm italic text-ink-muted">
          Day off
        </span>
      )}
    </div>
  );
}
