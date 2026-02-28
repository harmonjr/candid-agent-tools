import { DAYS, RESPONSE_TIME_OPTIONS, type BoundariesConfig } from './boundaries-config';

function formatTime(time24: string): string {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'PM' : 'AM';
  const displayHour = hours > 12 ? hours - 12 : hours === 0 ? 12 : hours;
  return `${displayHour}:${minutes === 0 ? '00' : '30'} ${period}`;
}

function getWorkingDaysSummary(config: BoundariesConfig): string {
  const enabledDays = DAYS.filter((d) => config.schedule[d.key]?.enabled);
  if (enabledDays.length === 0) return 'No working days set';

  const groups = groupConsecutiveDays(enabledDays.map((d) => d.short));
  return groups.join(', ');
}

function groupConsecutiveDays(days: string[]): string[] {
  if (days.length <= 2) return days;
  const allShorts: string[] = DAYS.map((d) => d.short);
  const indices = days.map((d) => allShorts.indexOf(d));

  const groups: string[] = [];
  let start = 0;
  for (let i = 1; i <= indices.length; i++) {
    const isConsecutive = i < indices.length && indices[i] === indices[i - 1] + 1;
    if (!isConsecutive) {
      const rangeLen = i - start;
      groups.push(
        rangeLen >= 3
          ? `${days[start]} \u2013 ${days[i - 1]}`
          : days.slice(start, i).join(', '),
      );
      start = i;
    }
  }
  return groups;
}

function getTypicalHours(config: BoundariesConfig): string {
  const enabled = DAYS.filter((d) => config.schedule[d.key]?.enabled);
  if (enabled.length === 0) return '';

  const first = config.schedule[enabled[0].key];
  return `${formatTime(first.start)} to ${formatTime(first.end)}`;
}

function getResponseLabel(hours: number): string {
  const option = RESPONSE_TIME_OPTIONS.find((o) => o.value === hours);
  return option?.label ?? `${hours} hours`;
}

function getEmergencyText(config: BoundariesConfig): string {
  const method = config.emergencyMethod;
  if (method === 'phone') return 'please call me directly';
  if (method === 'text-keyword') return 'send a text with "URGENT" in the message';
  if (method === 'both') return 'call me directly or send a text marked "URGENT"';
  return config.customEmergency || 'reach out through my emergency contact method';
}

function getNextWorkingDay(config: BoundariesConfig): string {
  const enabledDays = DAYS.filter((d) => config.schedule[d.key]?.enabled);
  if (enabledDays.length === 0) return 'my next available day';
  return enabledDays[0].label;
}

export interface GeneratedTemplate {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

export function generateAvailabilityStatement(config: BoundariesConfig): GeneratedTemplate {
  const days = getWorkingDaysSummary(config);
  const hours = getTypicalHours(config);
  const response = getResponseLabel(config.responseTime);
  const emergency = getEmergencyText(config);

  return {
    id: 'availability',
    title: 'Availability Statement',
    subtitle: 'For your email signature, website, or first-meeting packet',
    content: `I'm available ${days} from ${hours}. During working hours, I typically respond within ${response}. I believe that protecting my personal time makes me a better agent for you \u2014 when we're working together, you have my full attention and energy. For genuine emergencies outside business hours, ${emergency}.`,
  };
}

export function generateEveningAutoResponder(config: BoundariesConfig): GeneratedTemplate {
  const next = getNextWorkingDay(config);
  const emergency = getEmergencyText(config);
  const enabled = DAYS.filter((d) => config.schedule[d.key]?.enabled);
  const firstStart = enabled.length > 0 ? formatTime(config.schedule[enabled[0].key].start) : '9:00 AM';

  return {
    id: 'evening',
    title: 'Evening Auto-Responder',
    subtitle: 'For after-hours texts and emails',
    content: `Thanks for reaching out! I've received your message and will get back to you during my next working hours \u2014 ${next} at ${firstStart}. I protect my evenings so I can bring my best energy to every client interaction. If this is a genuine emergency regarding an active transaction, ${emergency}. Otherwise, I look forward to connecting with you soon.`,
  };
}

export function generateWeekendAutoResponder(config: BoundariesConfig): GeneratedTemplate {
  const next = getNextWorkingDay(config);
  const emergency = getEmergencyText(config);
  const enabled = DAYS.filter((d) => config.schedule[d.key]?.enabled);
  const firstStart = enabled.length > 0 ? formatTime(config.schedule[enabled[0].key].start) : '9:00 AM';

  return {
    id: 'weekend',
    title: 'Weekend Auto-Responder',
    subtitle: 'For messages received on your days off',
    content: `Hi there! Thank you for your message. I'm currently offline recharging for the week ahead. I'll respond ${next} starting at ${firstStart}. The best agents aren't the ones who never rest \u2014 they're the ones who rest well so they can serve you exceptionally. If you have a time-sensitive emergency involving an active transaction deadline, ${emergency}. Enjoy your weekend!`,
  };
}

export function generateVacationMessage(config: BoundariesConfig): GeneratedTemplate {
  const backup = config.vacationBackup || '[backup contact name and phone/email]';

  return {
    id: 'vacation',
    title: 'Vacation / Time-Off Message',
    subtitle: 'For extended time away from work',
    content: `Thank you for reaching out! I'm currently away from the office and will return on [return date]. During this time, I'll have limited access to messages. For urgent matters regarding active transactions, please contact ${backup}, who will be happy to assist you. For everything else, I'll respond promptly when I return. I appreciate your patience \u2014 a little time to recharge means I come back ready to give you my absolute best.`,
  };
}

export function generateExpectationSetter(config: BoundariesConfig): GeneratedTemplate {
  const days = getWorkingDaysSummary(config);
  const hours = getTypicalHours(config);
  const response = getResponseLabel(config.responseTime);
  const emergency = getEmergencyText(config);

  return {
    id: 'expectation',
    title: 'The Client Expectation Setter',
    subtitle: 'A script for your first meeting with new clients',
    content: `Before we dive in, I want to share how I work so we're on the same page from day one. My working hours are ${days}, ${hours}. During those hours, I'm fully present and responsive \u2014 you can expect to hear back from me within ${response}.\n\nOutside of those hours, I'm with my family, resting, and recharging. I do this intentionally, not because I don't care about your transaction \u2014 but because I've learned that the best service comes from an agent who isn't running on empty.\n\nOf course, genuine emergencies happen \u2014 a contract deadline at risk, a safety concern, a rate lock expiring. If something truly can't wait, ${emergency}. But "I just saw a house I love online" or "When will we hear back?" \u2014 those are great questions that I'll tackle first thing next business day.\n\nMy clients tell me this approach actually makes them feel more confident, not less. They know that when we're working together, they have my undivided attention.`,
  };
}

export function generateAllTemplates(config: BoundariesConfig): GeneratedTemplate[] {
  return [
    generateAvailabilityStatement(config),
    generateEveningAutoResponder(config),
    generateWeekendAutoResponder(config),
    generateVacationMessage(config),
    generateExpectationSetter(config),
  ];
}
