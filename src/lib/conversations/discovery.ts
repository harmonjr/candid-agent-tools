import type { Category } from './types';

export const DISCOVERY_CATEGORY: Category = {
  id: 'discovery',
  title: 'The Discovery Conversation',
  subtitle: 'The Bob Method',
  description:
    'Bob spent an hour asking about Randy\'s life before showing a single listing. He asked about family, goals, fears, and dreams. Then he pulled out an adding machine tape and showed what different price points would mean for their monthly life. That is the Bob Method -- putting the person before the property.',
  scenarios: [
    {
      id: 'life-first',
      title: 'Tell me about your life before we talk about houses',
      context:
        'The very first meeting with a new buyer. Before any MLS searches, before pre-approval letters, before driving neighborhoods.',
      scripts: [
        {
          label: 'Opening the conversation',
          text: 'Before we start looking at listings, I want to understand what matters most to you. Not square footage or school districts -- those come later. I want to know what your life looks like right now, and what you want it to look like.',
        },
        {
          label: 'Getting to the real picture',
          text: 'What does a typical Saturday look like for your family? Where do you spend your time? What do you wish you had more of -- space, quiet, proximity to something?',
        },
        {
          label: 'Setting the vision',
          text: 'If we get this right, what does life look like in five years? Not the house itself -- your life in it.',
        },
      ],
      whyAgentsAvoid:
        'It feels slow. Agents are trained to qualify leads fast, get them searching, and stay ahead of the competition. Asking about Saturday mornings feels like wasting time when there are houses to show.',
      whatHappensWithout:
        'You end up showing 40 homes to someone whose real need was a shorter commute, not a bigger kitchen. The deal takes twice as long, or falls apart entirely, because the house never fit the life.',
    },
    {
      id: 'budget-reframe',
      title: 'Reframing "What\'s your budget?"',
      context:
        'The moment a client asks you to just start searching. They have a pre-approval number and want to see everything up to that limit.',
      scripts: [
        {
          label: 'Redirecting the question',
          text: 'I know the bank said you qualify for $X. But I have a different question -- what do you want your monthly life to feel like? That number tells me what a bank will lend you. It does not tell me what you should spend.',
        },
        {
          label: 'Introducing the real metric',
          text: 'Let me show you what different price points actually look like month-to-month. Not the mortgage payment alone -- the whole picture. Because that is where the feeling of the house lives.',
        },
      ],
      whyAgentsAvoid:
        'A higher budget means higher commission. Questioning the budget feels like talking yourself out of money. Agents worry clients will think they are being patronizing.',
      whatHappensWithout:
        'Clients max out their pre-approval, move in, and within six months realize they cannot afford the life they imagined in the house. They resent the purchase -- and the agent who helped them make it.',
    },
  ],
};
