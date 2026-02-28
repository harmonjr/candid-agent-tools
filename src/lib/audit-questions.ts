export type InputType = 'slider' | 'radio' | 'select';

export interface QuestionOption {
  label: string;
  value: number;
}

export interface Question {
  id: string;
  text: string;
  subtext?: string;
  inputType: InputType;
  options?: QuestionOption[];
  min?: number;
  max?: number;
  step?: number;
  labels?: { low: string; high: string };
}

export interface Section {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  questions: Question[];
}

export const SECTIONS: Section[] = [
  {
    id: 'financial',
    title: 'Financial Margin',
    subtitle: 'Your money breathing room',
    description:
      'Let\'s be honest about the numbers. Not to judge — to understand where you actually stand.',
    questions: [
      {
        id: 'expense-ratio',
        text: 'What percentage of your gross commission income goes to business expenses?',
        subtext: 'Include brokerage splits, marketing, MLS fees, gas, everything.',
        inputType: 'select',
        options: [
          { label: 'Under 30% — I run lean', value: 100 },
          { label: '30-50% — About average', value: 75 },
          { label: '50-70% — It adds up fast', value: 45 },
          { label: 'Over 70% — Most of it disappears', value: 15 },
          { label: 'Honestly, I have no idea', value: 5 },
        ],
      },
      {
        id: 'runway-months',
        text: 'If closings dried up tomorrow, how many months could you cover all your bills?',
        subtext: 'Most agents dramatically underestimate this one.',
        inputType: 'radio',
        options: [
          { label: '6+ months — I sleep well', value: 100 },
          { label: '3-6 months — I\'d be okay for a while', value: 75 },
          { label: '1-3 months — It would get tight', value: 40 },
          { label: 'Less than a month — Every check matters', value: 10 },
        ],
      },
      {
        id: 'living-below-means',
        text: 'Does every commission check disappear before the next one arrives?',
        subtext: 'This isn\'t a guilt trip — it\'s an honest mirror.',
        inputType: 'radio',
        options: [
          { label: 'No — I consistently save from each check', value: 100 },
          { label: 'Usually not — I save most months', value: 70 },
          { label: 'Sometimes — It depends on the size of the check', value: 40 },
          { label: 'Yes — It\'s gone before I know it', value: 10 },
        ],
      },
      {
        id: 'dry-spell-plan',
        text: 'Do you have a written plan for surviving a 3-month dry spell?',
        subtext: 'Not a vague sense that you\'d figure it out — a real plan.',
        inputType: 'radio',
        options: [
          { label: 'Yes — documented with specific steps', value: 100 },
          { label: 'Sort of — I know what I\'d cut', value: 60 },
          { label: 'Not really — I\'d figure it out', value: 25 },
          { label: 'No — I try not to think about it', value: 5 },
        ],
      },
    ],
  },
  {
    id: 'time',
    title: 'Time Margin',
    subtitle: 'The hours you can\'t get back',
    description:
      'Your time is the one resource you can\'t earn more of. Let\'s see how you\'re spending it.',
    questions: [
      {
        id: 'weekly-hours',
        text: 'How many hours per week do you actually work?',
        subtext: 'Count everything — emails at 10pm, texts on Saturday, showing prep on Sunday.',
        inputType: 'slider',
        min: 20,
        max: 80,
        step: 5,
        labels: { low: '20 hrs', high: '80 hrs' },
      },
      {
        id: 'last-day-off',
        text: 'When was the last time you had a full day off with zero client contact?',
        subtext: 'Zero means zero. No quick texts, no checking MLS, no email peeks.',
        inputType: 'radio',
        options: [
          { label: 'This week — I protect my time', value: 100 },
          { label: 'Within the last month', value: 65 },
          { label: 'I can\'t remember exactly', value: 30 },
          { label: 'Honestly? It\'s been months', value: 5 },
        ],
      },
      {
        id: 'time-blocks',
        text: 'Do you have non-negotiable time blocks for family, rest, or personal life?',
        subtext: 'Non-negotiable means clients don\'t override them.',
        inputType: 'radio',
        options: [
          { label: 'Yes — and I enforce them', value: 100 },
          { label: 'Yes — but they flex when things get busy', value: 55 },
          { label: 'I try, but work always wins', value: 25 },
          { label: 'No — my schedule belongs to my clients', value: 5 },
        ],
      },
      {
        id: 'productive-vs-reactive',
        text: 'What percentage of your work time is proactive vs. reactive?',
        subtext: 'Proactive: planned lead gen, systems, strategy. Reactive: putting out fires, last-minute requests.',
        inputType: 'select',
        options: [
          { label: 'Mostly proactive — I drive my day', value: 100 },
          { label: 'About 50/50', value: 65 },
          { label: 'Mostly reactive — I\'m always responding', value: 30 },
          { label: 'Almost entirely reactive — I\'m a firefighter', value: 10 },
        ],
      },
    ],
  },
  {
    id: 'client-load',
    title: 'Client Load',
    subtitle: 'Quality over quantity',
    description:
      'More clients doesn\'t always mean more success. Let\'s look at whether your load lets you serve at your best.',
    questions: [
      {
        id: 'active-clients',
        text: 'How many active clients do you currently have?',
        subtext: 'Active means you\'re doing real work for them right now — not just a name in your CRM.',
        inputType: 'slider',
        min: 0,
        max: 25,
        step: 1,
        labels: { low: '0', high: '25+' },
      },
      {
        id: 'exceptional-capacity',
        text: 'How many clients can you serve exceptionally — not adequately, exceptionally?',
        subtext: 'The kind of service that generates referrals without asking.',
        inputType: 'slider',
        min: 0,
        max: 20,
        step: 1,
        labels: { low: '0', high: '20' },
      },
      {
        id: 'drop-twenty-percent',
        text: 'If you dropped to 80% of your current client load, what would happen?',
        inputType: 'radio',
        options: [
          { label: 'Not much — I\'m already at a good number', value: 90 },
          { label: 'I\'d actually serve everyone better', value: 60 },
          { label: 'My stress would drop significantly', value: 35 },
          { label: 'I\'d finally have time to breathe', value: 15 },
        ],
      },
      {
        id: 'saying-no',
        text: 'How comfortable are you saying no to a potential client who isn\'t a good fit?',
        subtext: 'Not every lead is worth your time. But can you actually turn them down?',
        inputType: 'radio',
        options: [
          { label: 'Very — I refer out regularly', value: 100 },
          { label: 'Somewhat — I do it occasionally', value: 65 },
          { label: 'Rarely — I feel like I can\'t afford to', value: 30 },
          { label: 'Never — I take everyone who calls', value: 5 },
        ],
      },
    ],
  },
];
