'use client';

import {
  DAYS,
  PRESETS,
  RESPONSE_TIME_OPTIONS,
  EMERGENCY_METHODS,
  getPresetSchedule,
  type BoundariesConfig,
  type PresetKey,
} from '@/lib/boundaries-config';
import TimePickerRow from './TimePickerRow';

interface ScheduleBuilderProps {
  config: BoundariesConfig;
  activePreset: PresetKey;
  onConfigChange: (config: BoundariesConfig) => void;
  onPresetChange: (preset: PresetKey) => void;
  onGenerate: () => void;
}

export default function ScheduleBuilder({
  config,
  activePreset,
  onConfigChange,
  onPresetChange,
  onGenerate,
}: ScheduleBuilderProps) {
  const handlePreset = (key: PresetKey) => {
    onPresetChange(key);
    if (key !== 'custom') {
      onConfigChange({ ...config, schedule: getPresetSchedule(key) });
    }
  };

  const handleToggleDay = (dayKey: string) => {
    const updated = { ...config.schedule };
    updated[dayKey] = { ...updated[dayKey], enabled: !updated[dayKey].enabled };
    onPresetChange('custom');
    onConfigChange({ ...config, schedule: updated });
  };

  const handleTimeChange = (dayKey: string, field: 'start' | 'end', value: string) => {
    const updated = { ...config.schedule };
    updated[dayKey] = { ...updated[dayKey], [field]: value };
    onPresetChange('custom');
    onConfigChange({ ...config, schedule: updated });
  };

  return (
    <div>
      <div className="mb-10">
        <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Step 1
        </span>
        <h2 className="mt-2 font-serif text-3xl font-light text-ink sm:text-4xl">
          Set Your Hours
        </h2>
        <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-ink-muted">
          Define when you are available. This is not about working less — it is
          about being intentional so your clients get the best version of you.
        </p>
      </div>

      <PresetSelector activePreset={activePreset} onSelect={handlePreset} />

      <div className="mt-8 border-t-2 border-candid bg-white">
        <div className="px-4 py-3 sm:px-6">
          <span className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
            Weekly Schedule
          </span>
        </div>
        {DAYS.map((day) => (
          <TimePickerRow
            key={day.key}
            dayKey={day.key}
            dayLabel={day.label}
            schedule={config.schedule[day.key]}
            onToggle={handleToggleDay}
            onTimeChange={handleTimeChange}
          />
        ))}
      </div>

      <ResponseSettings config={config} onConfigChange={onConfigChange} />

      <div className="mt-10 text-center">
        <button
          type="button"
          onClick={onGenerate}
          className="bg-accent px-8 py-4 font-sans text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent-hover focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          Generate My Templates
        </button>
      </div>
    </div>
  );
}

function PresetSelector({
  activePreset,
  onSelect,
}: {
  activePreset: PresetKey;
  onSelect: (key: PresetKey) => void;
}) {
  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {PRESETS.map((preset) => (
        <button
          key={preset.key}
          type="button"
          onClick={() => onSelect(preset.key)}
          className={`border px-5 py-4 text-left transition-colors duration-200 focus:outline-hidden focus:ring-2 focus:ring-accent/20 ${
            activePreset === preset.key
              ? 'border-candid bg-highlight'
              : 'border-border bg-white hover:border-accent'
          }`}
        >
          <span className="block font-sans text-sm font-semibold text-ink">
            {preset.label}
          </span>
          <span className="mt-1 block font-sans text-xs text-ink-muted">
            {preset.description}
          </span>
        </button>
      ))}
    </div>
  );
}

function ResponseSettings({
  config,
  onConfigChange,
}: {
  config: BoundariesConfig;
  onConfigChange: (config: BoundariesConfig) => void;
}) {
  return (
    <div className="mt-8 space-y-6">
      <div className="border-t-2 border-candid bg-white px-6 py-6">
        <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Response Time During Working Hours
        </label>
        <select
          value={config.responseTime}
          onChange={(e) => onConfigChange({ ...config, responseTime: Number(e.target.value) })}
          className="mt-3 w-full border border-border bg-white px-4 py-3 font-sans text-sm text-ink transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
        >
          {RESPONSE_TIME_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>

      <div className="border-t-2 border-candid bg-white px-6 py-6">
        <label className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-candid">
          Emergency Contact Method
        </label>
        <div className="mt-3 space-y-2">
          {EMERGENCY_METHODS.map((method) => (
            <label
              key={method.value}
              className={`flex cursor-pointer items-center gap-3 border px-4 py-3 font-sans text-sm transition-colors duration-200 ${
                config.emergencyMethod === method.value
                  ? 'border-candid bg-highlight text-ink'
                  : 'border-border bg-white text-ink-muted hover:border-accent hover:text-ink'
              } focus-within:ring-2 focus-within:ring-accent/20`}
            >
              <input
                type="radio"
                name="emergency"
                value={method.value}
                checked={config.emergencyMethod === method.value}
                onChange={() => onConfigChange({ ...config, emergencyMethod: method.value })}
                className="h-4 w-4 accent-candid"
              />
              {method.label}
            </label>
          ))}
        </div>
        {config.emergencyMethod === 'other' && (
          <input
            type="text"
            value={config.customEmergency}
            onChange={(e) => onConfigChange({ ...config, customEmergency: e.target.value })}
            placeholder="Describe your emergency contact method..."
            className="mt-3 w-full border border-border bg-white px-4 py-3 font-sans text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-200 focus:border-accent focus:outline-hidden focus:ring-2 focus:ring-accent/20"
          />
        )}
      </div>
    </div>
  );
}
