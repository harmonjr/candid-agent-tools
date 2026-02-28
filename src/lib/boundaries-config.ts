export interface DaySchedule {
  enabled: boolean;
  start: string;
  end: string;
}

export interface BoundariesConfig {
  schedule: Record<string, DaySchedule>;
  responseTime: number;
  emergencyMethod: string;
  customEmergency: string;
  vacationBackup: string;
  agentName: string;
}

export const DAYS = [
  { key: 'mon', label: 'Monday', short: 'Mon' },
  { key: 'tue', label: 'Tuesday', short: 'Tue' },
  { key: 'wed', label: 'Wednesday', short: 'Wed' },
  { key: 'thu', label: 'Thursday', short: 'Thu' },
  { key: 'fri', label: 'Friday', short: 'Fri' },
  { key: 'sat', label: 'Saturday', short: 'Sat' },
  { key: 'sun', label: 'Sunday', short: 'Sun' },
] as const;

export const TIME_OPTIONS = Array.from({ length: 29 }, (_, i) => {
  const totalMinutes = 7 * 60 + i * 30;
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  const displayMin = minutes === 0 ? '00' : '30';
  return {
    value: `${hours.toString().padStart(2, '0')}:${displayMin}`,
    label: `${displayHour}:${displayMin} ${period}`,
  };
});

export const RESPONSE_TIME_OPTIONS = [
  { value: 1, label: '1 hour' },
  { value: 2, label: '2 hours' },
  { value: 4, label: '4 hours' },
  { value: 8, label: 'Same business day' },
  { value: 24, label: 'Next business day' },
];

export const EMERGENCY_METHODS = [
  { value: 'phone', label: 'Phone call only' },
  { value: 'text-keyword', label: 'Text with "URGENT" keyword' },
  { value: 'both', label: 'Phone call or text marked urgent' },
  { value: 'other', label: 'Other (specify)' },
];

export type PresetKey = 'weekdays-9-5' | 'weekdays-9-6-sat' | 'custom';

export interface Preset {
  key: PresetKey;
  label: string;
  description: string;
}

export const PRESETS: Preset[] = [
  { key: 'weekdays-9-5', label: 'Weekdays 9 -- 5', description: 'Monday through Friday, 9 AM to 5 PM' },
  { key: 'weekdays-9-6-sat', label: 'Weekdays 9 -- 6 + Saturday AM', description: 'Monday through Friday 9 AM to 6 PM, Saturday 9 AM to 12 PM' },
  { key: 'custom', label: 'Custom Schedule', description: 'Set your own hours for each day' },
];

function createDaySchedule(enabled: boolean, start: string, end: string): DaySchedule {
  return { enabled, start, end };
}

export function getPresetSchedule(preset: PresetKey): Record<string, DaySchedule> {
  if (preset === 'weekdays-9-5') {
    return {
      mon: createDaySchedule(true, '09:00', '17:00'),
      tue: createDaySchedule(true, '09:00', '17:00'),
      wed: createDaySchedule(true, '09:00', '17:00'),
      thu: createDaySchedule(true, '09:00', '17:00'),
      fri: createDaySchedule(true, '09:00', '17:00'),
      sat: createDaySchedule(false, '09:00', '17:00'),
      sun: createDaySchedule(false, '09:00', '17:00'),
    };
  }

  if (preset === 'weekdays-9-6-sat') {
    return {
      mon: createDaySchedule(true, '09:00', '18:00'),
      tue: createDaySchedule(true, '09:00', '18:00'),
      wed: createDaySchedule(true, '09:00', '18:00'),
      thu: createDaySchedule(true, '09:00', '18:00'),
      fri: createDaySchedule(true, '09:00', '18:00'),
      sat: createDaySchedule(true, '09:00', '12:00'),
      sun: createDaySchedule(false, '09:00', '17:00'),
    };
  }

  return getPresetSchedule('weekdays-9-5');
}

export const DEFAULT_CONFIG: BoundariesConfig = {
  schedule: getPresetSchedule('weekdays-9-5'),
  responseTime: 2,
  emergencyMethod: 'phone',
  customEmergency: '',
  vacationBackup: '',
  agentName: '',
};
