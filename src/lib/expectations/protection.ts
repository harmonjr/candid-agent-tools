import type { Section } from './types';

export const PROTECTION_SECTION: Section = {
  id: 'protection',
  title: 'The Protection Conversation \u2014 Money Talk',
  subtitle: 'Financial Boundaries',
  description:
    'Budget and financial boundaries that protect clients from themselves. This is where a Candid Agent earns trust that lasts decades.',
  educationCallout:
    'The hardest conversation in real estate is telling someone to spend less. It\u2019s also the most valuable one. Agents who protect their clients\u2019 financial margins earn trust that lasts decades.',
  scripts: [
    {
      id: 'pre-approval-reframe',
      title: 'The Pre-Approval Reframe',
      context: 'When a client leads with their pre-approval amount',
      content:
        'The bank\u2019s pre-approval tells you what you can borrow. My job is to help you figure out what you should borrow. Those are very different numbers.',
      variations: [
        'Your pre-approval is a ceiling, not a target. Let\u2019s figure out the number that lets you live comfortably, not just technically afford the mortgage.',
      ],
    },
    {
      id: 'true-cost-intro',
      title: 'The True Cost Introduction',
      context: 'Before starting property searches',
      content:
        'Before we start looking, I want to show you what a home actually costs each month \u2014 not just the mortgage, but everything. Taxes, insurance, maintenance, the works. Most buyers are surprised by the gap.',
      variations: [
        'Let me walk you through what homeownership actually costs. The mortgage is just the beginning \u2014 I want to make sure you\u2019re ready for the full picture.',
      ],
    },
    {
      id: 'spend-less',
      title: 'The Spend-Less Conversation',
      context: 'When budget discussions begin',
      content:
        'I\u2019m going to say something most agents won\u2019t: I think you should consider spending less than your maximum. Here\u2019s why that\u2019s not limiting \u2014 it\u2019s liberating.',
    },
    {
      id: 'budget-boundary',
      title: 'The Budget Boundary',
      context: 'Setting a firm search boundary',
      content:
        'I won\u2019t show you homes above your comfortable budget. Not because I\u2019m restricting your options, but because falling in love with a house you can\u2019t comfortably afford isn\u2019t a service \u2014 it\u2019s a setup.',
    },
  ],
};
