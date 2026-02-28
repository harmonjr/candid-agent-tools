import type { Section } from './types';

export const COMMITMENT_SECTION: Section = {
  id: 'commitment',
  title: 'The Commitment Exchange \u2014 What We Owe Each Other',
  subtitle: 'Mutual Expectations',
  description:
    'This isn\u2019t a one-way contract. The strongest client relationships are built on mutual respect and clearly stated commitments from both sides.',
  educationCallout:
    'The best client relationships start with clear expectations on both sides. It\u2019s not a contract \u2014 it\u2019s a conversation about mutual respect.',
  scripts: [
    {
      id: 'agent-commitment',
      title: 'Agent Commitment',
      context: 'Stating what you bring to the relationship',
      content:
        'Here\u2019s what I commit to: I\u2019ll be prepared for every showing, honest about every property \u2014 including the ones I think you should skip \u2014 and transparent about what I earn and why.',
    },
    {
      id: 'client-expectation',
      title: 'Client Expectation',
      context: 'Asking for what you need in return',
      content:
        'What I ask in return: be honest with me about what you need, respect my working hours the way you\u2019d want yours respected, and trust that when I say \u201Clet\u2019s wait on this one,\u201D it\u2019s because I\u2019m protecting you.',
    },
    {
      id: 'trust-statement',
      title: 'The Trust Statement',
      context: 'Building the foundation of mutual investment',
      content:
        'This works best when we\u2019re both invested. I\u2019m not going to pressure you, and I\u2019d appreciate the same. If at any point this isn\u2019t working, let\u2019s talk about it honestly.',
    },
    {
      id: 'exclusivity',
      title: 'The Exclusivity Conversation',
      context: 'Addressing the question of exclusive representation',
      content:
        'I give my full attention to the clients I\u2019m working with. In return, I ask that we work together exclusively during this process. That way, I can invest the time and energy you deserve.',
    },
  ],
};
