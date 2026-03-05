export interface Tool {
  href: string;
  label: string;
  title: string;
  description: string;
  cta: string;
}

export const ALL_TOOLS: Tool[] = [
  {
    href: '/audit',
    label: 'Free Assessment',
    title: 'The Margin Practice Audit',
    description:
      'A 5-minute self-assessment that looks at three dimensions of your practice: financial margin, time margin, and client load. No judgment. Just an honest mirror.',
    cta: 'Take the Audit',
  },
  {
    href: '/enough',
    label: 'Free Calculator',
    title: 'The Enough Calculator',
    description:
      'Reverse-engineer how many closings you actually need per year — starting with the life you want to live, not the income you chase. Most agents are surprised by the number.',
    cta: 'Find My Number',
  },
  {
    href: '/true-cost',
    label: 'Free Calculator',
    title: 'The True Cost Calculator',
    description:
      'Show buyers what a home really costs each month — far beyond the mortgage payment. Maintenance, utilities, commute changes, and the margin check that matters most.',
    cta: 'Calculate True Cost',
  },
  {
    href: '/expectations',
    label: 'Free Guide',
    title: 'Client Expectation Setter',
    description:
      'A first-meeting conversation guide that establishes trust and boundaries upfront. The Bob Method discovery questions, boundary scripts, and pushback responses — customizable to your voice.',
    cta: 'Prepare for the First Meeting',
  },
  {
    href: '/board',
    label: 'Free CRM',
    title: 'The Candid Board',
    description:
      'A radically simple Kanban CRM for agents who serve fewer clients better. Five stages, life context over lead scores, and a margin indicator that tells the truth about your capacity.',
    cta: 'Open Your Board',
  },
  {
    href: '/boundaries',
    label: 'Free Tool',
    title: 'Communication Hours Template',
    description:
      'Define your working hours, generate professional auto-responders, and get scripts for setting client expectations from day one. Because the best agents protect their energy.',
    cta: 'Build My Boundaries',
  },
  {
    href: '/conversations',
    label: 'Free Framework',
    title: 'The Margin Message Framework',
    description:
      'Scripts and frameworks for the hard conversations — about budgets, true costs, and honest advice. The Bob Method, packaged for agents who put people before transactions.',
    cta: 'Browse the Scripts',
  },
  {
    href: '/templates',
    label: 'Free Library',
    title: 'Content Templates',
    description:
      'Pre-structured templates for market updates, buyer education, newsletters, and more. Copy, customize for your market, and publish content that builds trust.',
    cta: 'Browse Templates',
  },
];

export const FEATURED_TOOL = ALL_TOOLS[0];

export const REMAINING_TOOLS = ALL_TOOLS.slice(1);
